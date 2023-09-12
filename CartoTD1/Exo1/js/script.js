if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        
        const getCurrentPositionlongitude = position.coords.longitude;
        const getCurrentPositionlatitude = position.coords.latitude;
        const getCurrentPositionaltitude = position.coords.altitude;
        const getCurrentPositionprecision = position.coords.accuracy;
        const getCurrentPositionvitesse = position.coords.speed;
        const getCurrentPositiontimestamp = new Date(position.timestamp);

        document.getElementById("getCurrentPositionlongitude").textContent = getCurrentPositionlongitude;
        document.getElementById("getCurrentPositionlatitude").textContent = getCurrentPositionlatitude;
        document.getElementById("getCurrentPositionaltitude").textContent = getCurrentPositionaltitude;
        document.getElementById("getCurrentPositionprecision").textContent = getCurrentPositionprecision;
        document.getElementById("getCurrentPositionvitesse").textContent = getCurrentPositionvitesse;
        document.getElementById("getCurrentPositiondate").textContent = getCurrentPositiontimestamp.toLocaleString();
    });
    navigator.geolocation.watchPosition(function(position) {
        const watchPositionlongitude = position.coords.longitude;
        const watchPositionlatitude = position.coords.latitude;
        const watchPositionaltitude = position.coords.altitude;
        const watchPositionprecision = position.coords.accuracy;
        const watchPositionvitesse = position.coords.speed;
        const watchPositiontimestamp = new Date(position.timestamp);

        document.getElementById("watchPositionlongitude").textContent = watchPositionlongitude;
        document.getElementById("watchPositionlatitude").textContent = watchPositionlatitude;
        document.getElementById("watchPositionaltitude").textContent = watchPositionaltitude;
        document.getElementById("watchPositionprecision").textContent = watchPositionprecision;
        document.getElementById("watchPositionvitesse").textContent = watchPositionvitesse;
        document.getElementById("watchPositiondate").textContent = watchPositiontimestamp.toLocaleString();
    });
} else {
    alert("La géolocalisation n'est pas prise en charge par votre navigateur.");
}
