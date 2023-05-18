var map;
var heatmap;

function initializeMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 43.3008, lng: -79.8559 },
    zoom: 8,  // zoom level adjusted to see heatmap more clearly
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: [],
  });
  heatmap.setMap(map);
}

async function addHeatmapData() {
  var heatmapData = [];
  
  try {
    const response = await fetch('https://pollution-patrol-maps-api.uc.r.appspot.com/show');
    const data = await response.json();

    for (var i = 0; i < data.length; i++) {
      var lat = data[i].location.lat;
      var lng = data[i].location.lng;
      var we = data[i].weight;
      var extracted = new google.maps.LatLng(lat, lng);
      var newEntry = { location: extracted, weight: we };
      heatmapData.push(newEntry);
    }

    // update heatmap data
    heatmap.setData(new google.maps.MVCArray(heatmapData));

  } catch (error) {
    console.error('Error:', error);
  }
}