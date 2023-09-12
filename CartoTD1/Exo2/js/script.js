if (window.DeviceOrientationEvent && window.DeviceMotionEvent) {
    window.addEventListener("deviceorientation", function(event) {
        document.getElementById("alpha").textContent = event.alpha;
        document.getElementById("beta").textContent = event.beta;
        document.getElementById("gamma").textContent = event.gamma;
    });

    window.addEventListener("devicemotion", function(event) {
        const accelerationX = event.acceleration.x;
        const accelerationY = event.acceleration.y;
        const accelerationZ = event.acceleration.z;

        document.getElementById("accelerationX").textContent = accelerationX;
        document.getElementById("accelerationY").textContent = accelerationY;
        document.getElementById("accelerationZ").textContent = accelerationZ;
    });
} else {
    alert("L'API DeviceOrientation et/ou DeviceMotion n'est pas prise en charge par votre navigateur.");
}
