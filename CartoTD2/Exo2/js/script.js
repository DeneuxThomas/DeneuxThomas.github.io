let map = L.map('map').setView([25.0, -70.0], 5);

L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
    attribution: '&copy; <a href="http://maps.stamen.com/">Stamen Design</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let myLatitude = 43.6174848;
let myLongitude = 7.0811648;

let marseilleCoordinates = [43.2965, 5.3698];
let niceCoordinates = [43.7000, 7.2650];

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

function calculateDistance(lat1, lon1, lat2, lon2) {
    let R = 6371;
    let dLat = (lat2 - lat1) * (Math.PI / 180);
    let dLon = (lon2 - lon1) * (Math.PI / 180);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;
    return distance;
}

let distanceMarseilleToYou = calculateDistance(
    marseilleCoordinates[0],
    marseilleCoordinates[1],
    myLatitude,
    myLongitude
);

let divDistance = document.getElementById('distance');
divDistance.innerHTML = "<p>Distance entre Marseille et votre position: <span id='distance'>" + distanceMarseilleToYou.toFixed(2) + "</span> mètres</p>";

console.log('Distance entre Marseille et votre position : ' + distanceMarseilleToYou.toFixed(2) + ' km');
