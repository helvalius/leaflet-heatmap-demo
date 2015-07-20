(function(){
  'use strict';
//let's read the csv file. if this is finished we call the function to show it on the map.



var data = [
    { tour: 19, lat: 52.1536925, lon: 11.6395728}
];

var map = L.map('map').setView([ 40.706, -73.926], 14);

L.esri.basemapLayer('Streets').addTo(map);

L.esri.heatmapFeatureLayer({
  url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/ArcGIS/rest/services/Graffiti_Reports/FeatureServer/0',
  radius: 12
}).addTo(map);

})();
