let map = L.map('map').setView([25.0, -70.0], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let myLatitude = 43.6174848;
let myLongitude = 7.0811648;

let myCoordinates = L.latLng(43.6174848, 7.0811648);
let marseilleCoordinates = L.latLng(43.2965, 5.3698);
let niceCoordinates = L.latLng(43.7000, 7.2650);

let segment = L.polyline([marseilleCoordinates, niceCoordinates], {
    color: 'green',
}).addTo(map);

let triangleCoordinates = [
    [32.320236, -64.7740215],
    [26.710203, -80.022971],
    [18.469833, -66.150920],
];
let triangle = L.polygon(triangleCoordinates, {
    color: 'red',
}).addTo(map);

let precision = 1000;

let circle = L.circle([myLatitude, myLongitude], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.2,
    radius: precision,
}).addTo(map);

let distance = marseilleCoordinates.distanceTo(myCoordinates) / 1000;

let divDistance = document.getElementById('distance');
divDistance.innerHTML = "<p>Distance entre Marseille et votre position: <span id='distance'>" + distance.toFixed(2) + "</span> kilomètres</p>";
