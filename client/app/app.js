(function(){
  'use strict';
//let's read the csv file. if this is finished we call the function to show it on the map.



var data = [
    { tour: 19, lat: 52.1536925, lon: 11.6395728}
];

//here comes the leaflet standard for the basemap:

var map = L.map('map').setView([0, 0], 2);
var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, example by <a href="http://www.digital-geography.com">digital-geography.com</a>'
}).addTo(map);




// now the function that is called after the file was loaded

function displayData(Text){

 var data_array= [0,0,0]; //create it before filling
 for (var i = 0; i < data.length; i++) {
   data_array[i] = [data[i].lat, data[i].lon,0]; // if values are marked as string in the object else:
 }

 var heat = L.heatLayer(data_array,{
          radius: 15,
          blur: 20,
          maxZoom: 6,
      }).addTo(map);
}



displayData(data);

})();
