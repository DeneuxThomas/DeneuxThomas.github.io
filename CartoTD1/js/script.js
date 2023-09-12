// Vérifie si le navigateur prend en charge la géolocalisation
if ("geolocation" in navigator) {
    // Utilise getCurrentPosition() pour obtenir les données de géolocalisation actuelles
    navigator.geolocation.getCurrentPosition(function(position) {
        displayPosition("current", position);
    });

    // Utilise watchPosition() pour suivre les changements de position en temps réel
    const watchId = navigator.geolocation.watchPosition(function(position) {
        displayPosition("watch", position);
    });
    
    // Fonction pour afficher les données de géolocalisation
    function displayPosition(prefix, position) {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        const altitude = position.coords.altitude;
        const precision = position.coords.accuracy;
        const speed = position.coords.speed;
        const timestamp = new Date(position.timestamp);

        document.getElementById(`${prefix}Lon`).textContent = longitude;
        document.getElementById(`${prefix}Lat`).textContent = latitude;
        document.getElementById(`${prefix}Alt`).textContent = altitude;
        document.getElementById(`${prefix}Precision`).textContent = precision;
        document.getElementById(`${prefix}Speed`).textContent = speed;
        document.getElementById(`${prefix}Date`).textContent = timestamp.toLocaleString();
    }
} else {
    // Si la géolocalisation n'est pas prise en charge, affiche un message d'erreur
    alert("La géolocalisation n'est pas prise en charge par votre navigateur.");
}
