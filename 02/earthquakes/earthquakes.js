function loadJSONP(url) {
  var script = document.createElement('script');
  script.src = url;

  document.getElementsByTagName('head')[0].append(script);
}

var QUAKE_URL = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonp';
var map = L
  .map('map')
  .setView([33.858631, -118.279602], 7);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
 .addTo(map);

// /!\ code is in RxJS 5!
var quakes = Rx.Observable
  .create(function (subject) {
    window.eqfeed_callback = function (res) {
      res.features.forEach(function (quake) {
        subject.next(quake);
      })
    }

    loadJSONP(QUAKE_URL);
  });

quakes.subscribe(function (quake) {
  var coords = quake.geometry.coordinates;
  var size = quake.properties.mag * 10000;

  L.circle([coords[1], coords[0]], size)
   .addTo(map);
});
