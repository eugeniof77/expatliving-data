# Expat Living Italy: open data

Sourced, granular numbers for people relocating to or retiring in Italy: the
files behind [www.expatliving.it](https://www.expatliving.it/data), published as plain JSON.

**This is a read-only mirror.** It is generated from the site and re-synced
from it (data as of **2026-10-13**). Issues are welcome: a wrong number, a
missing source, a question about a field. Pull requests to the data files
aren't accepted, because the next sync would overwrite them. If a figure is
wrong, tell us and we fix it at the source.

123 files:

- `(root)`: 7
- `.github`: 1
- `api`: 1
- `data (top level)`: 2
- `data/bes`: 3
- `data/geo`: 3
- `data/meta`: 1
- `data/metrics`: 59
- `data/metrics/history`: 36
- `data/omi`: 2
- `data/rules`: 4
- `data/seismic`: 1
- `data/tax`: 1
- `scripts`: 2

## Datasets

Generated from the files themselves. "—" means the file doesn't state it.
Polarity (whether a higher value is better, `high`, or worse, `low`) is
shown only where a file declares one.

<!-- dataset-table:begin (generated; do not edit by hand) -->
| Path | Title | Grain | Source | Reference year | Extracted | Polarity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `data/bes/indicators.json` | BES indicator definitions (67) | province | ISTAT | 2025 | 2026-08-09 | per indicator (38 high, 29 low) |
| `data/bes/provinces.json` | BES province list | province | ISTAT | 2025 | 2026-08-09 | — |
| `data/bes/values.json` | BES values by province | province | ISTAT | 2025 | 2026-08-09 | see bes/indicators.json |
| `data/comuni.json` | Comune spine: ids, names, provinces, regions, population, coordinates | comune | — | — | — | — |
| `data/geo/comuni-centroids.geojson` | Comune centroids | comune | — | — | — | — |
| `data/geo/nuts2.geojson` | NUTS 2 region boundaries | nuts2 | Eurostat Nuts2json (NUTS 2021 boundaries) | 2021 | — | — |
| `data/geo/nuts3.geojson` | NUTS 3 region boundaries | nuts3 | Eurostat Nuts2json (NUTS 2021 boundaries) | 2021 | — | — |
| `data/meta/sources.json` | Source registry: one entry per dataset | — | — | — | 2026-10-13 | — |
| `data/metrics/accommodation-capacity-beds-comune-2024.json` | Tourist accommodation bed capacity (2024) | comune | ISTAT — tourist accommodation capacity | 2024 | 2026-09-29 | — |
| `data/metrics/accommodation-capacity-beds-per-resident-comune-2024.json` | Tourist beds per resident (2024) | comune | ISTAT — tourist accommodation capacity | 2024 | 2026-09-29 | — |
| `data/metrics/accommodation-capacity-hotel-share-comune-2024.json` | Hotel share of tourist accommodation (2024) | comune | ISTAT — tourist accommodation capacity | 2024 | 2026-09-29 | — |
| `data/metrics/agcom-ftth-share-comune-2026.json` | Fibre to the home (FTTH) availability, by comune (Q3 2026) | comune | AGCOM — Broadband Map (fixed network) | 2026 | 2026-10-16 | — |
| `data/metrics/age-median-2019.json` | Median age (2019) | comune | ISTAT | 2019 | 2026-10-13 | — |
| `data/metrics/age-structure-2019.json` | Median age and indice di vecchiaia (2019) | comune | ISTAT | 2019 | 2026-10-13 | — |
| `data/metrics/age-vecchiaia-2019.json` | Indice di vecchiaia (2019) | comune | ISTAT | 2019 | 2026-10-13 | — |
| `data/metrics/air-quality-pm10-province-2024.json` | Air quality: PM10 by province (2024) | province | EEA | 2024 | 2026-09-25 | — |
| `data/metrics/air-quality-pm25-province-2024.json` | Air quality: PM2.5 by province (2024) | province | EEA | 2024 | 2026-09-25 | — |
| `data/metrics/bes-indicators-2024.json` | Well-being (BES) | province | ISTAT | 2024 | 2026-08-19 | — |
| `data/metrics/citizenship-acquisitions-2024.json` | Citizenship acquisitions (2024) | province | ISTAT | 2024 | 2026-10-13 | — |
| `data/metrics/crime-burglary-rate-province-2024.json` | Home burglary rate by province (2024) | province | ISTAT — crime and public safety | 2024 | 2026-09-25 | — |
| `data/metrics/crime-rate-province-2024.json` | Reported crime rate by province (2024) | province | ISTAT — crime and public safety | 2024 | 2026-09-25 | — |
| `data/metrics/era5-heat-days-comune-2015-2024.json` | Average annual days above 30C (2015-2024) | comune | Copernicus Climate Data Store (ERA5-Land) | 2024 | 2026-09-22 | — |
| `data/metrics/era5-heat-days-nuts2-2015-2024.json` | Average annual days above 30C (2015-2024) | nuts2 | Copernicus Climate Data Store (ERA5-Land) | 2024 | 2026-10-03 | — |
| `data/metrics/era5-rainfall-total-comune-2015-2024.json` | Average annual rainfall (2015-2024) | comune | Copernicus Climate Data Store (ERA5-Land) | 2024 | 2026-09-28 | — |
| `data/metrics/era5-rainy-days-comune-2015-2024.json` | Average annual days with measurable rain (2015-2024) | comune | Copernicus Climate Data Store (ERA5-Land) | 2024 | 2026-09-28 | — |
| `data/metrics/era5-summer-high-comune-2015-2024.json` | Average July daily maximum temperature (2015-2024) | comune | Copernicus Climate Data Store (ERA5-Land) | 2024 | 2026-09-22 | — |
| `data/metrics/era5-summer-high-nuts2-2015-2024.json` | Average July daily maximum temperature (2015-2024) | nuts2 | Copernicus Climate Data Store (ERA5-Land) | 2024 | 2026-10-03 | — |
| `data/metrics/era5-winter-low-comune-2015-2024.json` | Average January daily minimum temperature (2015-2024) | comune | Copernicus Climate Data Store (ERA5-Land) | 2024 | 2026-09-22 | — |
| `data/metrics/era5-winter-low-nuts2-2015-2024.json` | Average January daily minimum temperature (2015-2024) | nuts2 | Copernicus Climate Data Store (ERA5-Land) | 2024 | 2026-10-03 | — |
| `data/metrics/eurostat-foreign-born-nuts2-2025.json` | Foreign-born share of the working-age population, by NUTS 2 region (2025) | nuts2 | Eurostat | 2025 | 2026-10-15 | — |
| `data/metrics/eurostat-gdp-nuts3-2023.json` | GDP per capita, by NUTS 3 region (2023) | nuts3 | Eurostat | 2023 | 2026-10-03 | — |
| `data/metrics/eurostat-housing-cost-nuts2-2024.json` | Housing cost overburden rate, by NUTS 2 region (2024) | nuts2 | Eurostat | 2024 | 2026-10-03 | — |
| `data/metrics/eurostat-life-expectancy-nuts2-2023.json` | Life expectancy at birth, by NUTS 2 region (2023) | nuts2 | Eurostat | 2023 | 2026-10-03 | — |
| `data/metrics/eurostat-population-nuts3-2023.json` | Population, by NUTS 3 region (2023) | nuts3 | Eurostat | 2023 | 2026-10-03 | — |
| `data/metrics/eurostat-poverty-nuts2-2024.json` | At-risk-of-poverty rate, by NUTS 2 region (2024) | nuts2 | Eurostat | 2024 | 2026-10-03 | — |
| `data/metrics/eurostat-unemployment-nuts2-2025.json` | Unemployment rate, by NUTS 2 region (2025) | nuts2 | Eurostat | 2025 | 2026-10-03 | — |
| `data/metrics/foreign-registrations-flow-2025.json` | New foreign registrations from abroad | comune | ISTAT | 2025 | 2026-10-13 | — |
| `data/metrics/foreign-residents-birthplace-2024.json` | Residents by country-of-birth group | comune | ISTAT | 2024 | 2026-10-13 | — |
| `data/metrics/foreign-residents-citizenship-2025.json` | Foreign residents by citizenship | comune | ISTAT | 2025 | 2026-10-13 | — |
| `data/metrics/foreign-residents-total-2025.json` | Foreign residents, all citizenships | comune | ISTAT | 2025 | 2026-10-13 | — |
| `data/metrics/healthcare-quality-district-region-2024.json` | Healthcare quality: community & district care by region (2024) | region | Ministero della Salute | 2024 | 2026-09-25 | — |
| `data/metrics/healthcare-quality-hospital-region-2024.json` | Healthcare quality: hospital care by region (2024) | region | Ministero della Salute | 2024 | 2026-09-25 | — |
| `data/metrics/healthcare-quality-prevention-region-2024.json` | Healthcare quality: prevention by region (2024) | region | Ministero della Salute | 2024 | 2026-09-25 | — |
| `data/metrics/history/ (36 files)` | Year-by-year population and foreign-resident series, for sparklines | comune | ISTAT | 2002–2025 | 2026-10-13 | — |
| `data/metrics/momentum-2019-2025.json` | Change in foreign share (2019–2025) | comune | ISTAT | 2025 | 2026-10-13 | — |
| `data/metrics/oecd-disposable-income-nuts2-2021.json` | Disposable household income per capita, by NUTS 2 region (2021) | nuts2 | OECD | 2021 | 2026-10-03 | — |
| `data/metrics/oecd-foreign-born-share-nuts2-2019.json` | Foreign-born population share, by NUTS 2 region (2019) | nuts2 | OECD | 2019 | 2026-10-03 | — |
| `data/metrics/oecd-homicide-nuts3-2023.json` | Intentional homicide rate, by NUTS 3 region (2023) | nuts3 | OECD | 2023 | 2026-10-03 | — |
| `data/metrics/oecd-old-age-dependency-nuts3-2022.json` | Old-age dependency ratio, by NUTS 3 region (2022) | nuts3 | OECD | 2022 | 2026-10-03 | — |
| `data/metrics/oecd-physicians-nuts2-2023.json` | Active physicians per 1,000 population, by NUTS 2 region (2023) | nuts2 | OECD | 2023 | 2026-10-03 | — |
| `data/metrics/oecd-rooms-per-person-nuts2-2021.json` | Rooms per person, by NUTS 2 region (2021) | nuts2 | OECD | 2021 | 2026-10-03 | — |
| `data/metrics/oecd-tertiary-education-nuts2-2024.json` | Tertiary education attainment, by NUTS 2 region (2024) | nuts2 | OECD | 2024 | 2026-10-03 | — |
| `data/metrics/oecd-vehicle-theft-nuts3-2023.json` | Vehicle theft rate, by NUTS 3 region (2023) | nuts3 | OECD | 2023 | 2026-10-03 | — |
| `data/metrics/omi-house-premium-comune-2025h2.json` | House vs apartment price by comune (2025H2) | comune | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025 | 2026-09-12 | — |
| `data/metrics/omi-house-purchase-comune-2025h2.json` | Detached house purchase price by comune (2025H2) | comune | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025 | 2026-09-12 | — |
| `data/metrics/omi-price-to-rent-2025h2.json` | Years of rent to equal the purchase price by province (2025H2) | province | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025 | 2026-09-12 | — |
| `data/metrics/omi-price-to-rent-comune-2025h2.json` | Years of rent to equal the purchase price by comune (2025H2) | comune | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025 | 2026-09-12 | — |
| `data/metrics/omi-purchase-2025h2.json` | Property purchase price by province (2025H2) | province | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025 | 2026-09-12 | — |
| `data/metrics/omi-purchase-comune-2025h2.json` | Property purchase price by comune (2025H2) | comune | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025 | 2026-09-12 | — |
| `data/metrics/omi-refurbished-premium-comune-2025h2.json` | Premium for refurbished housing by comune (2025H2) | comune | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025 | 2026-09-12 | — |
| `data/metrics/omi-rent-2025h2.json` | Property rent by province (2025H2) | province | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025 | 2026-09-12 | — |
| `data/metrics/omi-rent-comune-2025h2.json` | Property rent by comune (2025H2) | comune | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025 | 2026-09-12 | — |
| `data/metrics/population-trend-2019-2025.json` | Population change (2019–2025) | comune | ISTAT | 2025 | 2026-10-13 | — |
| `data/metrics/regime-7-percent-pensioners-province-share.json` | Population living in a comune eligible for the 7% pensioner regime | province | Expat Living Italy — rule applied to ISTAT population | 2019 | 2026-10-03 | — |
| `data/metrics/regime-7-percent-pensioners.json` | 7% pensioner regime | comune | Expat Living Italy — rule applied to ISTAT population | 2019 | 2026-10-03 | — |
| `data/metrics/seasonality-index-comune-2024.json` | Tourism seasonality index (2024) | comune | ISTAT — tourist accommodation flow | 2024 | 2026-09-28 | — |
| `data/metrics/seasonality-peak-visitor-multiplier-comune-2024.json` | Peak-month visitors per resident (2024) | comune | ISTAT — tourist accommodation flow | 2024 | 2026-09-28 | — |
| `data/metrics/seismic-hazard-class-comune-2025.json` | Seismic hazard class, by comune (2025) | comune | Dipartimento della Protezione Civile — seismic classification | 2025 | 2026-10-15 | — |
| `data/omi/comuni.json` | OMI residential prices and rents, by comune | comune | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025H2 | 2026-09-12 | — |
| `data/omi/provinces.json` | OMI residential prices and rents, by province | province | Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | 2025H2 | 2026-09-12 | — |
| `data/rules/regime-7-percent-pensioners.json` | 7% flat tax for foreign pensioners moving to southern Italy | comune, by rule | Expat Living Italy — curated rule; legislation cited in the file | 2019 | verified 2026-08-23 | — |
| `data/rules/regime-citizenship-descent.json` | Italian citizenship by descent — what changed in 2025, and who still qualifies | comune, by rule | Expat Living Italy — curated rule; legislation cited in the file | 2025 | verified 2026-10-15 | — |
| `data/rules/regime-elective-residency.json` | Elective residency — the visa route for people with no work income | comune, by rule | Expat Living Italy — curated rule; legislation cited in the file | 2011 | verified 2026-10-15 | — |
| `data/rules/regime-impatriati.json` | Regime impatriati — the 50% tax break for workers moving to Italy | comune, by rule | Expat Living Italy — curated rule; legislation cited in the file | 2024 | verified 2026-08-24 | — |
| `data/seismic/zone-labels.json` | Seismic zone labels | comune | Dipartimento della Protezione Civile — seismic classification | 31 May 2025 | 2026-10-15 | — |
| `data/slug-map.json` | ISTAT comune code to page slug | comune | — | — | — | — |
| `data/tax/irpef-national-2026.json` | National IRPEF brackets | national | Legge di Bilancio 2026 (L. 199/2025), amending TUIR art. 11 | 2026 | 2026-08-24 | — |
<!-- dataset-table:end -->

Every metric file has a `meta` block (slug, label, year, source, sourceUrl,
extractedAt, unit, grain) and `values` keyed by place. A place the source has
no figure for is **absent**, never `0` and never `null`.

### Left out on purpose

Anything whose own `meta.status` isn't `verified` is not published here
(a draft is a hand-encoded rule or schedule not yet checked against the
legislation). Withheld at this snapshot:

- `data/rules/regime-digital-nomad.json`
- `data/rules/regime-flat-tax-new-residents.json`
- `data/tax/addizionale-comunale-2025.json`
- `data/tax/addizionale-regionale-2026.json`
- `data/tax/imu-abitazione-principale-lusso-2025.json`
- `data/tax/imu-altri-fabbricati-2025.json`

`data/meta/sources.json` is the unedited source registry and may still name
these slugs; there are no figures behind them here.

## How this relates to the API

The same numbers are served live by the site. Prefer these when you need a
single comune, a search or an eligibility check; use this repo when you want
the whole file.

| What | Where |
| :--- | :--- |
| REST API (OpenAPI 3.1) | https://www.expatliving.it/api/v1 — spec at https://www.expatliving.it/api/v1/openapi.json, copied here as `api/openapi.json` |
| Developer docs | https://www.expatliving.it/api/docs |
| `llms.txt` for assistants that fetch a URL | https://www.expatliving.it/llms.txt, copied here as `llms.txt` |
| MCP server (Streamable HTTP, no auth, read-only) | https://www.expatliving.it/api/v1/mcp |
| In plain words | https://www.expatliving.it/data/ask-your-ai |
| Catalog and sources | https://www.expatliving.it/data/catalog, https://www.expatliving.it/data/sources |

`manifest.json` lists every file here with its URL on the site and its
sha256. `.github/workflows/sync.yml` re-fetches them and commits a snapshot
and a CHANGELOG entry when anything changed (manual trigger for now).

## Rules for using the numbers

1. **Grain is labelled.** A file's `meta.grain` says what its keys are:
   `comune`, `province`, `region`, `nuts2`, `nuts3` or national. A
   province figure is never a comune figure; don't show one as the other.
2. **Missing is not zero.** A place with no value has no entry. Don't fill it,
   average it or read it as "none".
3. **Percentile rank is within year.** Where a rank is given it is a
   percentile within that year's distribution; ties share a rank.
4. **There is no single "best province".** Rankings are reader-weighted, and
   each indicator has an explicit polarity. Don't build one composite score
   and present it as the answer.
5. **Draft is not a "no".** Verified rules say what they leave out
   (`meta.knownIncompleteness`); a town absent from a list isn't necessarily
   ineligible.
6. **Credit the source.** See [LICENSES.md](LICENSES.md).

## Citing

See [CITATION.cff](CITATION.cff). Please credit "Expat Living Italy
(expatliving.it)" and link the page the figures come from.
