import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);

// Charger la texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/CartoTD3/Exo2/ressource/raimbow.jpg');

// Créer un matériau avec la texture
const material = new THREE.MeshPhongMaterial({ map: texture });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const loader = new GLTFLoader();

loader.load('/CartoTD3/Exo2/ressource/moai.glb', (gltf) => {
    const model = gltf.scene;

    model.position.set(10, -1, 0);
    model.scale.set(1, 1, 1);
    model.rotation.set(0, 0, 0);

    scene.add(model);
});



const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(0, 5, 10);
scene.add(directionalLight);

camera.position.z = 4;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera);
}

animate();
