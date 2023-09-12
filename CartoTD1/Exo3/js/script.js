const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const positionInfo = document.getElementById("position");
const eventTypeInfo = document.getElementById("eventType");

let lastX = 0;
let lastY = 0;

canvas.addEventListener("touchstart", handleTouchStart);
canvas.addEventListener("touchmove", handleTouchMove);
canvas.addEventListener("touchend", handleTouchEnd);

function handleTouchStart(event) {
    const touch = event.touches[0];
    const x = touch.clientX - canvas.getBoundingClientRect().left;
    const y = touch.clientY - canvas.getBoundingClientRect().top;

    positionInfo.textContent = `X: ${x}, Y: ${y}`;
    eventTypeInfo.textContent = "TouchStart";

    lastX = x;
    lastY = y;

    ctx.beginPath();
    ctx.moveTo(x, y);
}

function handleTouchMove(event) {
    event.preventDefault();

    const touch = event.touches[0];
    const x = touch.clientX - canvas.getBoundingClientRect().left;
    const y = touch.clientY - canvas.getBoundingClientRect().top;

    positionInfo.textContent = `X: ${x}, Y: ${y}`;
    eventTypeInfo.textContent = "TouchMove";

    ctx.lineTo(x, y);
    ctx.stroke();

    lastX = x;
    lastY = y;
}

function handleTouchEnd(event) {
    eventTypeInfo.textContent = "TouchEnd";
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const clearButton = document.createElement("button");
clearButton.textContent = "Effacer";
clearButton.addEventListener("click", clearCanvas);
document.body.appendChild(clearButton);
