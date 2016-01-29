function initMap() {
  var estacion1 = {lat: 19.060658, lng: -98.184772};
  var estacion2 = {lat: 19.057555, lng: -98.180830};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: estacion1,
    scrollwheel: false,
    zoom: 7
  });

  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
    destination: estacion2,
    origin: estacion1,
    travelMode: google.maps.TravelMode.WALKING
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });
}