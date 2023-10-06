const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawCanvas() {
    // Dessinez le ciel (rectangle bleu)
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dessinez la mer (rectangle bleu plus foncé)
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // Dessinez le soleil (cercle jaune)
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(700, 100, 30, 0, Math.PI * 2);
    ctx.fill();

    // Dessinez le bateau (triangle bas)
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 250);
    ctx.lineTo(250, 250);
    ctx.lineTo(150, 320);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Dessinez le bateau (triangle haut gauche)
    ctx.fillStyle = 'darkred';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 240);
    ctx.lineTo(150, 100);
    ctx.lineTo(150, 240);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Dessinez le bateau (triangle haut droit)
    ctx.fillStyle = 'darkred';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(250, 240);
    ctx.lineTo(160, 100);
    ctx.lineTo(160, 240);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

drawCanvas();

// const svg = document.getElementById('svg');

// function drawSVG() {
//     // Votre code SVG ici
//     // Par exemple, vous pouvez dessiner une maison avec un rectangle et un triangle
// }

// drawSVG();

// canvas.addEventListener('click', () => {

// });

// svg.addEventListener('mouseover', () => {

// });
