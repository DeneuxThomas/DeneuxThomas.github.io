import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var scene, camera, light, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
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
var sphereMaterial = new THREE.MeshPhongMaterial({ map: texture });
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

const markerGeometry2 = new THREE.BoxGeometry(0.02, 0.02, 0.02);
const sphereRadius = 1;

function latLonToCartesian(lat, lon) {
    lat = lat * Math.PI / 180.0;
    lon = -lon * Math.PI / 180.0;
    return new THREE.Vector3(
        Math.cos(lat) * Math.cos(lon),
        Math.sin(lat),
        Math.cos(lat) * Math.sin(lon)
    )
}

function addCurrentLocationModel() {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log(lat);
        console.log(lon);

        const loader = new GLTFLoader();

        loader.load('/CartoTD4/Exo1/ressource/Soldier.glb', (gltf) => {
            const model = gltf.scene;
            model.scale.set(0.1, 0.1, 0.1);
            model.rotation.set(0, -1.5, 0);

            const modelPosition = latLonToCartesian(lat, lon);

            model.position.copy(modelPosition);
            scene.add(model);
        });
    }, (error) => {
        console.error('Erreur de géolocalisation : ', error);
    });
}

var textureLoader = new THREE.TextureLoader();

function addCountryMarker(lat, lon, flagTextureUrl) {
    var flagTexture = textureLoader.load(flagTextureUrl);

    var markerMaterial = new THREE.MeshBasicMaterial({ map: flagTexture });

    var marker = new THREE.Mesh(markerGeometry2, markerMaterial);

    var markerPosition = latLonToCartesian(lat, lon, sphereRadius);
    marker.position.copy(markerPosition);

    scene.add(marker);
}

async function addCountryMarkers() {
    const countryData = await fetchCountryData();

    countryData.forEach((country) => {
        const lat = country.latlng[0];
        const lon = country.latlng[1];
        const flagUrl = country.flags.png;

        addCountryMarker(lat, lon, flagUrl);
    });
}

async function fetchCountryData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données des pays.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
addCountryMarkers();
addCurrentLocationModel();

function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}

animate();
