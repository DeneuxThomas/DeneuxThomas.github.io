const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawCanvas() {
    // Dessinez le ciel (rectangle bleu)
    // Chargez l'image
    const backgroundImage = new Image();
    backgroundImage.src = '/CartoTD3/Exo1/img/mer_avec_plage.jpg'; // Remplacez 'lien_vers_votre_image.jpg' par le chemin de votre image

    // Attendez que l'image soit chargée
    backgroundImage.onload = function () {
        // Dessinez l'image comme fond
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

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
    };
}

drawCanvas();

const svg = document.getElementById('svg');

function drawSVG() {

    // Dessinez le ciel (rectangle bleu)
    const skyRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    skyRect.setAttribute('x', '0');
    skyRect.setAttribute('y', '0');
    skyRect.setAttribute('width', '800');
    skyRect.setAttribute('height', '200');
    skyRect.setAttribute('fill', 'skyblue');
    svg.appendChild(skyRect);

    // Dessinez la mer (rectangle bleu plus foncé)
    const seaRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    seaRect.setAttribute('x', '0');
    seaRect.setAttribute('y', '200');
    seaRect.setAttribute('width', '800');
    seaRect.setAttribute('height', '200');
    seaRect.setAttribute('fill', 'blue');

    svg.appendChild(seaRect);


    // Dessinez le soleil (cercle jaune)
    const sunCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    sunCircle.setAttribute('cx', '700');
    sunCircle.setAttribute('cy', '100');
    sunCircle.setAttribute('r', '30');
    sunCircle.setAttribute('fill', 'yellow');
    svg.appendChild(sunCircle);

    // Dessinez le bateau (triangle bas)
    const boatTriangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    boatTriangle.setAttribute('points', '100,250 250,250 150,320');
    boatTriangle.setAttribute('fill', 'red');
    boatTriangle.setAttribute('stroke', 'black');
    boatTriangle.setAttribute('stroke-width', '2');
    svg.appendChild(boatTriangle);

    // Dessinez le bateau (triangle haut gauche)
    const leftBoatTriangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    leftBoatTriangle.setAttribute('points', '100,240 150,100 150,240');
    leftBoatTriangle.setAttribute('fill', 'darkred');
    leftBoatTriangle.setAttribute('stroke', 'black');
    leftBoatTriangle.setAttribute('stroke-width', '2');
    svg.appendChild(leftBoatTriangle);

    // Dessinez le bateau (triangle haut droit)
    const rightBoatTriangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    rightBoatTriangle.setAttribute('points', '250,240 160,100 160,240');
    rightBoatTriangle.setAttribute('fill', 'darkred');
    rightBoatTriangle.setAttribute('stroke', 'black');
    rightBoatTriangle.setAttribute('stroke-width', '2');
    svg.appendChild(rightBoatTriangle);

    sunCircle.addEventListener('mouseover', () => {
        skyRect.setAttribute('fill', 'darkblue');
        sunCircle.setAttribute('fill', 'white');
    });
    sunCircle.addEventListener('mouseout', () => {
        skyRect.setAttribute('fill', 'skyblue');
        sunCircle.setAttribute('fill', 'yellow');
    });
}

drawSVG();
