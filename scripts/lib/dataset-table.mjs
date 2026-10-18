// Describes each published data file from the file itself and renders the
// README's dataset table. Shared: `pnpm export-public-data` (private repo)
// uses it to write the README, and it is copied into the public repo as
// scripts/lib/dataset-table.mjs so scripts/sync.mjs can rebuild the same
// table after a sync. Plain ESM, no dependencies, MIT like the rest of the
// public repo's scripts.
//
// Nothing is guessed: a field the file does not carry is "—" (missing is
// absent, never zero), and the table never invents a source for a file that
// states none.

const DASH = "—";

const NUTS_SOURCE = "Eurostat Nuts2json (NUTS 2021 boundaries)";

function plain(v) {
  if (v === undefined || v === null || v === "") return DASH;
  return String(v).replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
}

function polarityOf(meta) {
  return meta && typeof meta.polarity === "string" ? meta.polarity : DASH;
}

/**
 * One row for one data file, or null for a file that is summarised in a group
 * row instead (metrics/history/*).
 * @param {string} rel path under data/, e.g. "metrics/omi-rent-comune-2025h2.json"
 * @param {any} json the parsed file
 * @param {{sources?: any[]}} registry parsed data/meta/sources.json, for files that carry no meta of their own
 */
export function describeDataFile(rel, json, registry = {}) {
  const meta = json && !Array.isArray(json) ? json.meta : undefined;
  const entry = (slug) => (registry.sources ?? []).find((s) => s.slug === slug);

  if (rel.startsWith("metrics/history/")) return null;

  if (rel.startsWith("metrics/")) {
    return {
      path: `data/${rel}`,
      title: meta?.label,
      grain: meta?.grain ?? "comune",
      source: meta?.source,
      year: meta?.year,
      extracted: meta?.extractedAt,
      polarity: polarityOf(meta),
    };
  }
  if (rel.startsWith("tax/")) {
    return {
      path: `data/${rel}`,
      title: meta?.label,
      grain: meta?.grain,
      source: meta?.source,
      year: meta?.taxYear,
      extracted: meta?.extractedAt,
      polarity: DASH,
    };
  }
  if (rel.startsWith("rules/")) {
    return {
      path: `data/${rel}`,
      title: meta?.label,
      grain: "comune, by rule",
      source: "Expat Living Italy — curated rule; legislation cited in the file",
      year: meta?.validFrom ? String(meta.validFrom).slice(0, 4) : undefined,
      extracted: meta?.verifiedOn ? `verified ${meta.verifiedOn}` : undefined,
      polarity: DASH,
    };
  }
  if (rel === "bes/indicators.json") {
    const list = Array.isArray(json) ? json : [];
    const high = list.filter((i) => i.polarity === "high").length;
    const low = list.filter((i) => i.polarity === "low").length;
    const e = entry("bes-territori-2025");
    return {
      path: `data/${rel}`,
      title: `BES indicator definitions (${list.length})`,
      grain: "province",
      source: e?.source,
      year: 2025,
      extracted: e?.extractedAt,
      polarity: `per indicator (${high} high, ${low} low)`,
    };
  }
  if (rel === "bes/provinces.json" || rel === "bes/values.json") {
    const e = entry("bes-territori-2025");
    return {
      path: `data/${rel}`,
      title: rel === "bes/values.json" ? "BES values by province" : "BES province list",
      grain: "province",
      source: e?.source,
      year: 2025,
      extracted: e?.extractedAt,
      polarity: rel === "bes/values.json" ? "see bes/indicators.json" : DASH,
    };
  }
  if (rel === "omi/comuni.json" || rel === "omi/provinces.json") {
    return {
      path: `data/${rel}`,
      title: rel === "omi/comuni.json" ? "OMI residential prices and rents, by comune" : "OMI residential prices and rents, by province",
      grain: rel === "omi/comuni.json" ? "comune" : "province",
      source: meta?.source,
      year: meta?.semester,
      extracted: meta?.extractedAt,
      polarity: DASH,
    };
  }
  if (rel === "seismic/zone-labels.json") {
    return {
      path: `data/${rel}`,
      title: "Seismic zone labels",
      grain: "comune",
      source: meta?.source,
      year: meta?.vintage,
      extracted: meta?.extractedAt,
      polarity: DASH,
    };
  }
  if (rel === "geo/nuts2.geojson" || rel === "geo/nuts3.geojson") {
    return {
      path: `data/${rel}`,
      title: rel.endsWith("nuts2.geojson") ? "NUTS 2 region boundaries" : "NUTS 3 region boundaries",
      grain: rel.includes("nuts2") ? "nuts2" : "nuts3",
      source: NUTS_SOURCE,
      year: 2021,
      extracted: undefined,
      polarity: DASH,
    };
  }
  if (rel === "geo/comuni-centroids.geojson") {
    return { path: `data/${rel}`, title: "Comune centroids", grain: "comune", source: undefined, year: undefined, extracted: undefined, polarity: DASH };
  }
  if (rel === "comuni.json") {
    return { path: `data/${rel}`, title: "Comune spine: ids, names, provinces, regions, population, coordinates", grain: "comune", source: undefined, year: undefined, extracted: undefined, polarity: DASH };
  }
  if (rel === "slug-map.json") {
    return { path: `data/${rel}`, title: "ISTAT comune code to page slug", grain: "comune", source: undefined, year: undefined, extracted: undefined, polarity: DASH };
  }
  if (rel === "meta/sources.json") {
    return { path: `data/${rel}`, title: "Source registry: one entry per dataset", grain: DASH, source: DASH, year: DASH, extracted: json?.dataAsOf, polarity: DASH };
  }
  return { path: `data/${rel}`, title: undefined, grain: undefined, source: undefined, year: undefined, extracted: undefined, polarity: DASH };
}

/** The one row for metrics/history/*, from the files' own meta. */
export function describeHistory(files) {
  if (!files.length) return null;
  const years = files.map((f) => f.json?.meta?.year).filter((y) => Number.isInteger(y));
  const sources = [...new Set(files.map((f) => f.json?.meta?.source).filter(Boolean))];
  const extracted = files.map((f) => f.json?.meta?.extractedAt).filter(Boolean).sort();
  return {
    path: `data/metrics/history/ (${files.length} files)`,
    title: "Year-by-year population and foreign-resident series, for sparklines",
    grain: "comune",
    source: sources.join("; "),
    year: years.length ? `${Math.min(...years)}–${Math.max(...years)}` : undefined,
    extracted: extracted.length ? extracted[extracted.length - 1] : undefined,
    polarity: DASH,
  };
}

export const TABLE_BEGIN = "<!-- dataset-table:begin (generated; do not edit by hand) -->";
export const TABLE_END = "<!-- dataset-table:end -->";

export function datasetTable(rows) {
  const head = "| Path | Title | Grain | Source | Reference year | Extracted | Polarity |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- |";
  const body = rows
    .map((r) => `| \`${r.path}\` | ${plain(r.title)} | ${plain(r.grain)} | ${plain(r.source)} | ${plain(r.year)} | ${plain(r.extracted)} | ${plain(r.polarity)} |`)
    .join("\n");
  return `${TABLE_BEGIN}\n${head}\n${body}\n${TABLE_END}`;
}

/** Replace the generated block of a README with a fresh table. */
export function replaceTable(readme, rows) {
  const a = readme.indexOf(TABLE_BEGIN);
  const b = readme.indexOf(TABLE_END);
  if (a === -1 || b === -1) throw new Error("README has no dataset-table markers");
  return readme.slice(0, a) + datasetTable(rows) + readme.slice(b + TABLE_END.length);
}

/**
 * Rows for every data file under `dataRoot` listed in `relPaths` (paths
 * relative to data/, forward slashes). History files collapse to one row.
 */
export function collectRows(dataRoot, relPaths, readFile) {
  const read = (rel) => JSON.parse(readFile(`${dataRoot}/${rel}`));
  const registry = relPaths.includes("meta/sources.json") ? read("meta/sources.json") : {};
  const rows = [];
  const history = [];
  for (const rel of [...relPaths].sort()) {
    const json = read(rel);
    if (rel.startsWith("metrics/history/")) {
      history.push({ rel, json });
      continue;
    }
    rows.push(describeDataFile(rel, json, registry));
  }
  const h = describeHistory(history);
  if (h) rows.push(h);
  return rows.sort((a, b) => a.path.localeCompare(b.path));
}
