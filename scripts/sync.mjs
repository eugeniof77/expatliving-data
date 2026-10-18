#!/usr/bin/env node
// Refreshes this repository from https://www.expatliving.it.
//
// Reads manifest.json (written by the site's generator: every published file,
// its URL on the site and its sha256), downloads each file, and where the
// bytes differ from what is committed, replaces the file, updates the
// manifest, rebuilds the README's dataset table and prepends a CHANGELOG
// entry. Nothing is rewritten: a file is stored exactly as the site serves it.
//
// It needs no secrets and calls only the public site. A file that fails to
// download stops the run with nothing written, so a partial outage can never
// delete or truncate data. Node 20+, no dependencies. MIT.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { collectRows, replaceTable } from "./lib/dataset-table.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const manifestPath = path.join(ROOT, "manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

// A draft must never be mirrored, whatever the site serves (defense in depth:
// the generator already leaves drafts out of the manifest).
function assertNotDraft(file, buf) {
  if (!file.path.endsWith(".json") && !file.path.endsWith(".geojson")) return;
  let meta;
  try {
    meta = JSON.parse(buf.toString("utf8"))?.meta;
  } catch {
    throw new Error(`${file.path}: not valid JSON`);
  }
  const status = meta?.status ?? meta?.ruleStatus;
  if (status !== undefined && status !== "verified") {
    throw new Error(`${file.path}: meta says "${status}", not "verified" — refusing to mirror it`);
  }
}

const fetched = [];
for (const file of manifest.files) {
  const res = await fetch(new URL(file.url, manifest.site), { headers: { "user-agent": "expatliving-data-sync" } });
  if (!res.ok) throw new Error(`${file.url}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length === 0) throw new Error(`${file.url}: empty body`);
  assertNotDraft(file, buf);
  fetched.push({ file, buf, hash: sha256(buf) });
}

const changed = [];
for (const { file, buf, hash } of fetched) {
  const dest = path.join(ROOT, file.path);
  const current = fs.existsSync(dest) ? sha256(fs.readFileSync(dest)) : null;
  if (current === hash && file.sha256 === hash) continue;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  changed.push(file.path);
  file.sha256 = hash;
  file.bytes = buf.length;
}

const out = process.env.GITHUB_OUTPUT;
if (changed.length === 0) {
  console.log("No change: every file matches the site.");
  if (out) fs.appendFileSync(out, "changed=false\n");
  process.exit(0);
}

const registryPath = path.join(ROOT, "data/meta/sources.json");
if (fs.existsSync(registryPath)) {
  const asOf = JSON.parse(fs.readFileSync(registryPath, "utf8")).dataAsOf;
  if (asOf) manifest.dataAsOf = asOf;
}
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

// README: regenerate the dataset table from the files themselves.
const dataPaths = manifest.files.filter((f) => f.path.startsWith("data/")).map((f) => f.path.slice("data/".length));
const readmePath = path.join(ROOT, "README.md");
fs.writeFileSync(
  readmePath,
  replaceTable(fs.readFileSync(readmePath, "utf8"), collectRows(path.join(ROOT, "data"), dataPaths, (p) => fs.readFileSync(p, "utf8"))).replace(
    /data as of \*\*[\d-]+\*\*/,
    `data as of **${manifest.dataAsOf}**`
  )
);

// CHANGELOG: newest first, under the marker.
const today = new Date().toISOString().slice(0, 10);
const entry =
  `## ${today}\n\nSnapshot refreshed from ${manifest.site}. Changed (${changed.length}):\n\n` +
  changed.map((p) => `- \`${p}\``).join("\n") +
  "\n\nAdded or removed files appear only when the generator is re-run and the manifest replaced.\n";
const clPath = path.join(ROOT, "CHANGELOG.md");
const marker = "<!-- entries -->";
const cl = fs.readFileSync(clPath, "utf8");
if (!cl.includes(marker)) throw new Error("CHANGELOG.md has no <!-- entries --> marker");
fs.writeFileSync(clPath, cl.replace(marker, `${marker}\n\n${entry}`));

console.log(`Updated ${changed.length} file(s).`);
if (out) fs.appendFileSync(out, "changed=true\n");
