var map = L.map('map', {
  center: [30.28980311712408, -97.74123606052011],
  zoom: 12,
});

var Satellite = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
      { attribution: '&copy; CARTO, tpmckeon', subdomains: 'abcd', maxZoom: 19 }).addTo(map);

