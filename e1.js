var map;
var heatmap;

function initializeMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat:45.423560, lng:-75.683720 },
    zoom: 15,  
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: [],
  });
  heatmap.setMap(map);
}

async function addtempData() {
  var heatmapData = [];
  
  try {
    const response = await fetch('https://pollution-patrol-maps-api.uc.r.appspot.com/temp');
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

async function addpmData() {
  var heatmapData = [];
  
  try {
    const response = await fetch('https://pollution-patrol-maps-api.uc.r.appspot.com/pm');
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

async function addhumidData() {
  var heatmapData = [];
  
  try {
    const response = await fetch('https://pollution-patrol-maps-api.uc.r.appspot.com/humid');
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




