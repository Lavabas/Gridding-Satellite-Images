# Gridding Satellite Imagery: A Zonal Statistics Example Using MODIS Land Surface Temperature (LST)

## Overview
This project demonstrates how to grid satellite raster data and perform zonal statistics over each grid cell using Google Earth Engine (GEE). The analysis showcases how raster datasets (e.g., temperature, vegetation, rainfall, NDVI) can be aggregated over a uniform grid, a technique useful for machine learning, climate modeling, urban analysis, and spatial statistics.

To illustrate this method, the project uses MODIS MOD11A2 Land Surface Temperature (LST) data as an example, computing average daytime and nighttime surface temperatures for 2021 over a 5 km × 5 km grid covering the Western Province of Sri Lanka.

### Gridded LST (2021) over Western Province, Sri Lanka
<img width="955" height="773" alt="image" src="https://github.com/user-attachments/assets/288cc0dd-30d6-4b89-abb9-850f9278d0eb" />

## Objective
- Illustrate a generic approach to gridding satellite imagery.
- Generate a uniform grid over a region of interest (ROI).
- Perform zonal mean extraction of raster values (here, LST) for each grid cell.
- Export the aggregated results for GIS-based visualization or further analysis.

## Why Gridding?
Gridding satellite imagery is valuable because:
1. It simplifies complex, high-resolution raster data into manageable chunks.
2. Enables uniform spatial sampling for regression, classification, or clustering tasks.
3. Supports machine learning, where inputs must be structured and spatially consistent.
4. Avoids irregularities or gaps in administrative boundaries.
5. Facilitates comparative spatial analysis across different regions or datasets.

### Note: The LST values are used here only as a demonstration. This approach is equally applicable to NDVI, rainfall, ET, or any satellite-derived raster product.

## Notes
- Modularity: You can substitute MODIS LST with NDVI, rainfall, ET, NTL, etc.
- Scalability: Can be extended to any region, any satellite product, and any time frame.
- Data Gaps: Cloud contamination may lead to missing values; consider using .reduce(ee.Reducer.median()) or gap-filling if needed.
- Projection: Uses EPSG:4326 (WGS84).

