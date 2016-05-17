function initMap() {

  var myLatLng = {lat: 10.540969, lng: 76.183051};

  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 16
  });

  var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'Location'
  });
}

function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}
