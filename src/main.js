import { ThreeMFLoader } from "three/examples/jsm/Addons.js";
import "./style.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";

const keys = {};
const moveSpeed = 0.1;

// scene
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);

// Set initial camera position
camera.position.set(-13,3.5,-1);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#sf23-model"),
  alpha: 0
});
renderer.setClearColor(0x000000, 0);

// dimensions
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth / 1.3, window.innerHeight / 1.3);

// Create controls but don't activate them immediately
const controls = new PointerLockControls(camera, renderer.domElement);

// Set initial camera look direction AFTER creating controls
// This will set the camera to look at the target point
const targetPoint = new THREE.Vector3(-3.7, 2, -1);
camera.lookAt(targetPoint);

// listeners
document.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
});
document.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

const canvas = document.getElementById("sf23-model");

canvas.addEventListener("click", () => {
  controls.lock(); 
});

// Add escape key listener to unlock controls for testing
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    controls.unlock();
  }
});

loadCars();

const pointLight = new THREE.PointLight(0xffffff, 2100);
pointLight.position.set(20, 20, 6);

const pointLightHelper = new THREE.PointLightHelper(pointLight);
scene.add(pointLightHelper);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const gridHelper = new THREE.GridHelper(100, 50);
scene.add(gridHelper); // Uncommented to help with orientation

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper); // Uncommented to help with orientation

animate();

function animate() {
  // Only process movement controls if pointer is locked
  if (controls.isLocked) {
    if (keys["z"]) controls.moveForward(moveSpeed);
    if (keys["s"]) controls.moveForward(-moveSpeed);
    if (keys["d"]) controls.moveRight(moveSpeed);
    if (keys["q"]) controls.moveRight(-moveSpeed);
    if (keys["r"]) camera.position.y += moveSpeed;
    if (keys["f"]) camera.position.y -= moveSpeed;
  }

  requestAnimationFrame(animate);

  // Debug camera position and look direction
  console.log(
    `Camera position: x=${camera.position.x.toFixed(2)}, y=${camera.position.y.toFixed(2)}, z=${camera.position.z.toFixed(2)}`
  );
  
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  const cameraLookAtPoint = new THREE.Vector3()
    .copy(camera.position)
    .add(direction.multiplyScalar(10));
  console.log("Camera is looking at point:", cameraLookAtPoint);

  controls.update();
  renderer.render(scene, camera);
}

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0x9bb0ff });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

function loadGlb(
  path,
  position = { x: 0, y: 0, z: 0 },
  degrees = { x: 0, y: 0, z: 0 }
) {
  const loader = new GLTFLoader();

  loader.load(
    path,
    function (gltf) {
      const model = gltf.scene;
      model.position.set(position.x, position.y, position.z);
      model.scale.set(6, 6, 6);
      
      // Set rotation based on provided degrees, not camera position
      model.rotation.x = degrees.x * (Math.PI / 180);
      model.rotation.y = degrees.y * (Math.PI / 180);
      model.rotation.z = degrees.z * (Math.PI / 180);
      
      // Remove the automatic camera-facing rotation
      // model.rotation.y = Math.atan2(
      //   camera.position.x - position.x,
      //   camera.position.z - position.z
      // );
      
      model.traverse((child) => {
        if (child.isMesh && child.material) {
          const material = child.material;
          const materials = Array.isArray(material) ? material : [material];

          materials.forEach((mat) => {
            if (mat.map) {
              mat.map.anisotropy = renderer.capabilities.getMaxAnisotropy();
              mat.map.minFilter = THREE.LinearMipMapLinearFilter;
              mat.map.magFilter = THREE.LinearFilter;
              mat.map.generateMipmaps = true;
              mat.map.needsUpdate = true;
            }
          });
        }
      });
      scene.add(model);
    },
    undefined,
    function (error) {
      console.error("An error happened while loading the model:", error);
    }
  );
}

function loadFbx(path, position = { x: 0, y: 0, z: 0 }, degrees = 0) {
  const loader = new FBXLoader();

  loader.load(
    path,
    (model) => {
      model.scale.set(0.008, 0.008, 0.008);
      model.position.set(position.x, position.y, position.z);
      const radians = degrees * (Math.PI / 180);
      model.rotation.y = radians;

      scene.add(model);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.error("An error happened while loading the FBX:", error);
    }
  );
}

function loadBackGround() {
  const spaceTexture = new THREE.TextureLoader().load("../assets/space.jpg");
  scene.background = spaceTexture;
}

function loadCars() {
  loadGlb(
    "../assets/sf23-2/sf23.gltf",
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 0 }
  );
}