var findMeButton = $(".find-me");

// Check if the browser has support for the Geolocation API
if (!navigator.geolocation) {
  findMeButton.addClass("disabled");
  $(".no-browser-support").addClass("visible");
} else {
  findMeButton.on("click", function (e) {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition(function (position) {
      // Get the coordinates of the current possition.
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      $(".latitude").text(lat.toFixed(3));
      $(".longitude").text(lng.toFixed(3));
      $(".coordinates").addClass("visible");

      // Create a new map and place a marker at the device location.
      var map = new GMaps({
        el: "#map",
        lat: lat,
        lng: lng,
      });

      map.addMarker({
        lat: lat,
        lng: lng,
      });
    });
  });
}
