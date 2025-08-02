Map.addLayer(roi)

var grid = roi.geometry().coveringGrid('EPSG:4326', 5000)

Map.addLayer(grid)




var modis = ee.ImageCollection("MODIS/061/MOD11A2")
.select(['LST_Day_1km', 'LST_Night_1km'],['day','night'])
.filterDate('2021','2022')
.map(function(img){
  var temp = img.multiply(0.02).subtract(273.15)
  return temp
  .copyProperties(img, img.propertyNames())
  }).mean()
  
print(modis)

var stat = grid.map(function(feature){
  var vals = modis.reduceRegion({
    reducer: ee.Reducer.mean(), 
    geometry: feature.geometry(), 
    scale: 1000
    })
  return feature
  .set(vals)
  })
  

print(stat)


Export.table.toDrive({
  collection: stat, description: 'Western_LST_Day_Night', fileFormat: 'SHP', folder: 'test'
  
  })