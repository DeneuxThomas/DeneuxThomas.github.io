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
    ctx.arc(canvas.width - 100, 100, 30, 0, Math.PI * 2);
    ctx.fill();

    // Dessinez le bateau (rectangle et triangle)
    ctx.fillStyle = 'brown';
    ctx.fillRect(200, 250, 80, 20);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(200, 250);
    ctx.lineTo(240, 200);
    ctx.lineTo(280, 250);
    ctx.closePath();
    ctx.fill();
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
