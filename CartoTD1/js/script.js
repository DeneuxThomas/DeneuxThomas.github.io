if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        const altitude = position.coords.altitude;
        const precision = position.coords.accuracy;
        const vitesse = position.coords.speed;
        const timestamp = new Date(position.timestamp);

        document.getElementById("longitude").textContent = longitude;
        document.getElementById("latitude").textContent = latitude;
        document.getElementById("altitude").textContent = altitude;
        document.getElementById("precision").textContent = precision;
        document.getElementById("vitesse").textContent = vitesse;
        document.getElementById("date").textContent = timestamp.toLocaleString();
    });
} else {
    alert("La géolocalisation n'est pas prise en charge par votre navigateur.");
}
