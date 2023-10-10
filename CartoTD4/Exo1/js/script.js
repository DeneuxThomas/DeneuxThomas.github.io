import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

var scene, camera, light, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

light = new THREE.AmbientLight(0xffffff, 3);
scene.add(light);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;

var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load('/CartoTD4/Exo1/ressource/téléchargement.jpg');

var sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
var sphereMaterial = new THREE.MeshPhongMaterial({ map: texture }); // Appliquer la texture
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

function latLonToCartesian(lat, lon, radius) {
    var phi = (90 - lat) * (Math.PI / 180);
    var theta = (lon + 180) * (Math.PI / 180);

    var x = radius * Math.sin(phi) * Math.cos(theta);
    var y = radius * Math.cos(phi);
    var z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
}

var lat = 45;
var lon = 90;
var radius = 1;

var cartesianCoords = latLonToCartesian(lat, lon, radius);

sphere.position.copy(cartesianCoords);

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}

animate();
