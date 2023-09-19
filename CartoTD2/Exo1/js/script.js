// marqueur pour le IUT
const map = L.map('map').setView([43.6174848, 7.0811648], 13);
// marqueur pour le centre-ville de Nice
const niceMarker = L.marker([43.7000, 7.2650]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        document.getElementById("getCurrentPositionlongitude").textContent = latitude;
        document.getElementById("getCurrentPositionlatitude").textContent = longitude;


        niceMarker.bindPopup('Centre-ville de Nice').openPopup();

        const marker = L.marker([latitude, longitude]).addTo(map);

        marker.bindPopup('Votre position actuelle').openPopup();
    });
} else {
    alert("La géolocalisation n'est pas prise en charge par votre navigateur.");
}
