# Licenses

The numbers in `data/` come from public institutions and keep their licenses.
Each row below is one source, with the license and credit line the site itself
states for it on its sources page, https://www.expatliving.it/data/sources. Snapshot of data as
of 2026-10-13.

| Source (as in each file's `meta.source`) | License | Required attribution | Datasets |
| :--- | :--- | :--- | :--- |
| AGCOM — Broadband Map (fixed network) | CC BY 4.0 · attribution (credit line and portal address required) | BroadbandMap di Agcom - Autorità per le garanzie nelle comunicazioni è distribuito con Licenza Creative Commons Attribuzione 4.0 Internazionale; cite the portal address, https://geo3.agcom.it/opendata | 1: `agcom-ftth-share-comune-2026` |
| Agenzia delle Entrate — Osservatorio del Mercato Immobiliare (OMI) | Free · attribution (this site is a non-commercial blog) | Fonte: Agenzia Entrate — Osservatorio del Mercato Immobiliare (OMI) | 10: `omi-house-premium-comune-2025h2`, `omi-house-purchase-comune-2025h2`, `omi-price-to-rent-2025h2`, `omi-price-to-rent-comune-2025h2`, `omi-purchase-2025h2`, `omi-purchase-comune-2025h2`, `omi-quotazioni-2025h2`, `omi-refurbished-premium-comune-2025h2`, `omi-rent-2025h2`, `omi-rent-comune-2025h2` |
| Copernicus Climate Data Store (ERA5-Land) | Free, CC BY 4.0 attribution | Contains modified Copernicus Climate Change Service information (ERA5-Land) | 8: `era5-heat-days-comune-2015-2024`, `era5-heat-days-nuts2-2015-2024`, `era5-rainfall-total-comune-2015-2024`, `era5-rainy-days-comune-2015-2024`, `era5-summer-high-comune-2015-2024`, `era5-summer-high-nuts2-2015-2024`, `era5-winter-low-comune-2015-2024`, `era5-winter-low-nuts2-2015-2024` |
| Dipartimento della Protezione Civile — seismic classification | CC BY 4.0 · attribution (credit line required) | Fonte: Dipartimento della Protezione Civile-Presidenza del Consiglio dei Ministri | 1: `seismic-hazard-class-comune-2025` |
| EEA | CC BY 4.0 · attribution | Credit "EEA", as in each file's meta.source, and keep its meta.sourceUrl | 2: `air-quality-pm10-province-2024`, `air-quality-pm25-province-2024` |
| Eurostat | CC BY 4.0 · attribution | Credit "Eurostat", as in each file's meta.source, and keep its meta.sourceUrl | 7: `eurostat-foreign-born-nuts2-2025`, `eurostat-gdp-nuts3-2023`, `eurostat-housing-cost-nuts2-2024`, `eurostat-life-expectancy-nuts2-2023`, `eurostat-population-nuts3-2023`, `eurostat-poverty-nuts2-2024`, `eurostat-unemployment-nuts2-2025` |
| Expat Living Italy — rule applied to ISTAT population | CC BY-NC 4.0 · attribution, non-commercial (commercial use by agreement) | Credit "Expat Living Italy (expatliving.it)" and link the page the figures come from. For commercial use, ask first: https://www.expatliving.it/contact | 2: `regime-7-percent-pensioners`, `regime-7-percent-pensioners-province-share` |
| ISTAT | Free · attribution | Credit "ISTAT", as in each file's meta.source, and keep its meta.sourceUrl | 12: `age-median-2019`, `age-structure-2019`, `age-vecchiaia-2019`, `bes-indicators-2024`, `bes-territori-2025`, `citizenship-acquisitions-2024`, `foreign-registrations-flow-2025`, `foreign-residents-birthplace-2024`, `foreign-residents-citizenship-2025`, `foreign-residents-total-2025`, `momentum-2019-2025`, `population-trend-2019-2025` |
| ISTAT — crime and public safety | Free | Credit "ISTAT — crime and public safety", as in each file's meta.source, and keep its meta.sourceUrl | 2: `crime-burglary-rate-province-2024`, `crime-rate-province-2024` |
| ISTAT — tourist accommodation capacity | Free · attribution | Credit "ISTAT — tourist accommodation capacity", as in each file's meta.source, and keep its meta.sourceUrl | 3: `accommodation-capacity-beds-comune-2024`, `accommodation-capacity-beds-per-resident-comune-2024`, `accommodation-capacity-hotel-share-comune-2024` |
| ISTAT — tourist accommodation flow | Free · attribution | Credit "ISTAT — tourist accommodation flow", as in each file's meta.source, and keep its meta.sourceUrl | 2: `seasonality-index-comune-2024`, `seasonality-peak-visitor-multiplier-comune-2024` |
| Legge di Bilancio 2026 (L. 199/2025), amending TUIR art. 11 | CC BY-NC 4.0 · attribution, non-commercial (commercial use by agreement) | Credit "Expat Living Italy (expatliving.it)" and link the page the figures come from. For commercial use, ask first: https://www.expatliving.it/contact | 1: `irpef-national-2026` |
| Ministero della Salute | CC BY 4.0 · attribution | Credit "Ministero della Salute", as in each file's meta.source, and keep its meta.sourceUrl | 3: `healthcare-quality-district-region-2024`, `healthcare-quality-hospital-region-2024`, `healthcare-quality-prevention-region-2024` |
| OECD | Free to use · no blanket license — OECD's Data terms point to each dataset's own metadata for restrictions | Credit "OECD", as in each file's meta.source, and keep its meta.sourceUrl | 8: `oecd-disposable-income-nuts2-2021`, `oecd-foreign-born-share-nuts2-2019`, `oecd-homicide-nuts3-2023`, `oecd-old-age-dependency-nuts3-2022`, `oecd-physicians-nuts2-2023`, `oecd-rooms-per-person-nuts2-2021`, `oecd-tertiary-education-nuts2-2024`, `oecd-vehicle-theft-nuts3-2023` |

Notes:

- Every file also carries its own `meta.source`, `meta.sourceUrl`, reference
  year and `extractedAt`. Keep them when you reuse the numbers.
- The BES files (`data/bes/`) are published by ISTAT, but each indicator in
  `bes/indicators.json` names the body that produced it in its own `source`
  field (Banca d'Italia, ISPRA, Terna, INAIL, Invalsi, and others). Credit that
  body where it matters.
- Draft rules and draft tax schedules are not in this repository; see the
  README.
- The rows marked CC BY-NC 4.0 are Expat Living Italy's own work: rules
  encoded from Italian legislation, and figures derived by applying them to
  ISTAT population. The legislation itself is free to use; the encoding and
  the derived figures are licensed
  [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). For
  commercial use, ask first: https://www.expatliving.it/contact.

## This repository's own material

| Material | License |
| :--- | :--- |
| Documentation (README, this file, CHANGELOG, files under `api/` and `llms.txt` as text) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| Scripts (`scripts/`, `.github/workflows/`) | MIT (see `LICENSE`) |

Please credit "Expat Living Italy (expatliving.it)" and link the page the
figures come from when you quote them.
