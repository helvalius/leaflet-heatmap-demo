$(document).ready(function() {
$.ajax({
  type: "GET",
  url: "2.5_month.csv",
  dataType: "text",
  success: function(data){displayData(data)}
});
});

//now the function that is called after the file was loaded

function displayData(Text){
alert(Text);

//here comes the leaflet standard for the basemap:

var map = L.map('map').setView([0, 0], 2);
var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, example by <a href="http://www.digital-geography.com">digital-geography.com</a>'
}).addTo(map);
}
