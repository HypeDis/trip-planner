const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');

mapboxgl.accessToken =
  'pk.eyJ1IjoiaHlwZWQiLCJhIjoiY2p2dHg0a250M2xhbTN5cW93aXRkYTQyaSJ9.l5NA5Cxe0UYVgcZmlwf3zw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

buildMarker('activity', [-74.009, 40.705], map); //full stack hq
