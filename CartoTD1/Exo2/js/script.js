if (window.DeviceOrientationEvent && window.DeviceMotionEvent) {
    window.addEventListener("deviceorientation", function(event) {
        document.getElementById("alpha").textContent = event.alpha;
        document.getElementById("beta").textContent = event.beta;
        document.getElementById("gamma").textContent = event.gamma;
    });

    window.addEventListener("devicemotion", function(event) {
        const rotationAcceleration = event.rotationRate;
        const translationAcceleration = event.acceleration;

        document.getElementById("rotationAcceleration").textContent = JSON.stringify(rotationAcceleration);
        document.getElementById("translationAcceleration").textContent = JSON.stringify(translationAcceleration);
    });
} else {
    alert("L'API DeviceOrientation et/ou DeviceMotion n'est pas prise en charge par votre navigateur.");
}
