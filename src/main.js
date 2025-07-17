import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const carData = {
  sf23: {
    title: "Ferrari SF-23",
    engine: "V6",
    displacement: 1600,
    weight: 798,
    power: 120,
    description:
      "Sviluppata e costruita a Maranello, la Ferrari SF23, guidata da Carlos Sainz Jr. e Charles Leclerc, ha partecipato al Campionato di Formula 12023. Sebbene fosse considerata un'evoluzione della F1-75 dello scorsoanno, si tratta di una vettura completamente nuova, sviluppata sullabase dell'esperienza maturata nel 2022. Il motore è lo stesso dellaF1-75, ma è stato necessario un grande lavoro per risolvere i problemidi affidabilità.",
    images: {
      main: "assets/pictures/sf23/sf23-main.jpg",
      description: "assets/pictures/sf23/sf23-description.jpg",
      thumbnail: "assets/pictures/sf23/sf23-thumbnail.png",
      slides: [
        "assets/pictures/sf23/slides/slide-1.jpg",
        "assets/pictures/sf23/slides/slide-2.jpg",
        "assets/pictures/sf23/slides/slide-3.jpg",
        "assets/pictures/sf23/slides/slide-4.jpg",
        "assets/pictures/sf23/slides/slide-5.jpg",
        "assets/pictures/sf23/slides/slide-6.jpg",
      ],
    },
    video: "assets/videos/sf23-unveiling.mp4",
    model: true,
    glb: true,
    scale: 6,
    degrees: 0,
    path: "assets/3d-model/sf23/sf23.gltf",
  },

  sf90: {
    title: "Ferrari SF90",
    engine: "V6",
    displacement: 1600,
    weight: 743,
    power: 120,
    description:
      "La SF90 è la 65ª monoposto costruita dalla Scuderia Ferrari per competere nel Campionato mondiale di Formula 1. Affidata a Sebastian Vettel e Charles Leclerc, la vettura risponde ai nuovi regolamenti che prevedono un aumento del peso minimo e presenta un'unità motrice potenziata composta da un V6 turbo da 1,6 litri e due motogeneratori, l'MGU-K e l'MGU-H. La SF90 rappresenta un'evoluzione della sua predecessora ed è pronta a lottare per il titolo mondiale.",
    images: {
      main: "assets/pictures/sf90/sf90-main.jpg",
      description: "assets/pictures/sf90/sf90-description.jpg",
      thumbnail: "assets/pictures/sf90/sf90-thumbnail.png",
      slides: [
        "assets/pictures/sf90/slides/slide-1.jpg",
        "assets/pictures/sf90/slides/slide-2.jpg",
        "assets/pictures/sf90/slides/slide-3.jpg",
        "assets/pictures/sf90/slides/slide-4.jpg",
        "assets/pictures/sf90/slides/slide-5.jpg",
        "assets/pictures/sf90/slides/slide-6.jpg",
        "assets/pictures/sf90/slides/slide-7.jpg",
        "assets/pictures/sf90/slides/slide-8.jpg",
        "assets/pictures/sf90/slides/slide-9.jpg",
      ],
    },
    video: "assets/videos/sf90-unveiling.mp4",
    model: true,
    glb: true,
    scale: 4.4,
    degrees: 0,
    path: "assets/3d-model/sf90/sf90.glb",
  },
  sf70h: {
    title: "Ferrari SF70H",
    engine: "V6",
    displacement: 1600,
    weight: 728,
    power: 120,
    description:
      "Costruita dalla Scuderia Ferrari, la SF70H è la 63ª monoposto della squadra a partecipare al Campionato mondiale di Formula 1. Guidata da Sebastian Vettel e Kimi Räikkönen, la vettura ha beneficiato dei cambiamenti regolamentari di quest'anno, acquisendo un maggiore carico aerodinamico e grip meccanico. È pronta ad accettare la sfida e a lottare per il titolo mondiale.",
    images: {
      main: "assets/pictures/sf70h/sf70h-main.jpg",
      description: "assets/pictures/sf70h/sf70h-description.webp",
      thumbnail: "assets/pictures/sf70h/sf70h-thumbnail.png",
      slides: [
        "assets/pictures/sf70h/slides/slide-1.jpg",
        "assets/pictures/sf70h/slides/slide-2.jpg",
        "assets/pictures/sf70h/slides/slide-3.jpg",
        "assets/pictures/sf70h/slides/slide-4.jpg",
        "assets/pictures/sf70h/slides/slide-5.jpg",
        "assets/pictures/sf70h/slides/slide-6.jpg",
        "assets/pictures/sf70h/slides/slide-7.jpg",
        "assets/pictures/sf70h/slides/slide-8.webp",
        "assets/pictures/sf70h/slides/slide-9.jpg",
        "assets/pictures/sf70h/slides/slide-10.webp",
      ],
    },
    video: "assets/videos/sf70h-unveiling.mp4",
    model: true,
    glb: false,
    scale: 0.05,
    degrees: 90,
    path: "assets/3d-model/sf70h/sf70h.fbx",
  },
  f499p: {
    title: "Ferrari 499P",
    engine: "V6 ICE",
    displacement: 3000,
    weight: 1030,
    power: 500,
    description:
      "Il Cavallino Rampante è tornato nella classe regina delle gare endurance nel 2023 con la Ferrari 499P, una Hypercar ibrida spinta da un motore V6 biturbo da 3,0 litri abbinato a un motore elettrico da 272 CV e trazione integrale. Nelle sue prime due stagioni nel FIA WEC, la 499P ha conquistato tre vittorie assolute: due nella leggendaria 24 Ore di Le Mans con le vetture ufficiali del team Ferrari - AF Corse, e una al Circuit of the Americas con la Hypercar schierata dal team privato AF Corse.",
    images: {
      main: "assets/pictures/499p/499p-main.jpg",
      description: "assets/pictures/499p/499p-description.jpg",
      thumbnail: "assets/pictures/499p/499p-thumbnail.jpg",
      slides: [
        "assets/pictures/499p/slides/slide-1.jpg",
        "assets/pictures/499p/slides/slide-2.jpg",
        "assets/pictures/499p/slides/slide-3.jpg",
        "assets/pictures/499p/slides/slide-4.jpg",
        "assets/pictures/499p/slides/slide-5.jpg",
        "assets/pictures/499p/slides/slide-6.jpg",
        "assets/pictures/499p/slides/slide-7.jpg",
        "assets/pictures/499p/slides/slide-8.jpg",
        "assets/pictures/499p/slides/slide-9.jpg",
        "assets/pictures/499p/slides/slide-10.jpg",
        "assets/pictures/499p/slides/slide-11.jpg",
      ],
    },
    video: "assets/videos/499p-unveiling.mp4",
    model: false,
  },
};

let current = "sf70h";

async function switcMacchine(key) {
  const car = carData[key];
  if (!key) return;
  document.title = car.title;
  document.getElementById("engine").innerHTML = car.engine;
  document.getElementById("displacement").innerHTML =
    car.displacement + " <span>cc</span>";
  document.getElementById("weight").innerHTML = car.weight + " <span>kg</span>";
  document.getElementById("power").innerHTML = car.power + " <span>kW</span>";
  document.getElementById("description-text").textContent = car.description;
  document.getElementById("main-picture").src = car.images.main;
  document.getElementById("description-image").src = car.images.description;
  const thumbnail = document.getElementById("video-thumbnail");
  thumbnail.style.backgroundImage = `url(${car.images.thumbnail})`;
  thumbnail.style.backgroundSize = "cover";
  thumbnail.style.backgroundPosition = "center";

  current = key;
  generateGallery(car.images.slides);
  const videoSource = document.querySelector("#main-video source");
  if (videoSource) {
    videoSource.src = car.video;
    document.getElementById("main-video").load();
  }
  document.getElementById("macchina-toggle").checked = false;

  document.body.classList.add("car-switching");
  setTimeout(() => {
    document.body.classList.remove("car-switching");
  }, 500);
  const modelWrapper = document.getElementById("model-wrapper");
  if (car.model) {
    modelWrapper.innerHTML = `
        <div class="title">Modello 3D</div>
        <canvas id="sf23-model"></canvas>
      `;
    modelWrapper.style.display = "block";
    loadScene(car.path, car.glb, car.scale, car.degrees);
  } else {
    modelWrapper.style.display = "none";
  }
}

function generateGallery(slides) {
  const checkboxesContainer = document.getElementById("image-checkboxes");
  const sliderContainer = document.getElementById("image-slider");
  const modalsContainer = document.getElementById("image-modals-container");

  // Clear existing content
  checkboxesContainer.innerHTML = "";
  sliderContainer.innerHTML = "";
  modalsContainer.innerHTML = "";

  // Generate checkboxes, slides, and modals
  slides.forEach((slide, index) => {
    const slideNumber = index + 1;
    const checkboxId = `image-${slideNumber}`;

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    checkbox.style.display = "none";
    checkboxesContainer.appendChild(checkbox);

    // Create slide
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide";
    slideDiv.innerHTML = `
      <img src="${slide}" alt="" data-slide="${slideNumber}" style="cursor: pointer;" loading="lazy"/>
    `;
    sliderContainer.appendChild(slideDiv);

    // Create modal
    const modalDiv = document.createElement("div");
    modalDiv.className = "image-modal";
    modalDiv.innerHTML = `
      <div class="image-container">
        <label class="close-button" for="${checkboxId}">&#x00D7;</label>
        <img class="image-display" src="${slide}" alt="Ferrari ${carData[current].title} - Image ${slideNumber}" />
      </div>
    `;
    modalsContainer.appendChild(modalDiv);

    // Add click event to image
    slideDiv.querySelector("img").addEventListener("click", () => {
      // Close any open modals first
      document
        .querySelectorAll('#image-checkboxes input[type="checkbox"]')
        .forEach((cb) => {
          cb.checked = false;
        });

      // Open the clicked modal
      checkbox.checked = true;

      // Show the modal by adding the show class
      modalDiv.classList.add("show");
    });

    // Add event listener to checkbox to control modal visibility
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        modalDiv.classList.add("show");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
      } else {
        modalDiv.classList.remove("show");
        document.body.style.overflow = ""; // Restore scrolling
      }
    });

    // Add click event to close button
    modalDiv.querySelector(".close-button").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      checkbox.checked = false;
      modalDiv.classList.remove("show");
      document.body.style.overflow = "";
    });
  });

  // Close modal when clicking outside the image
  document.querySelectorAll(".image-modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        const checkboxId = modal.querySelector("label").getAttribute("for");
        const checkbox = document.getElementById(checkboxId);
        checkbox.checked = false;
        modal.classList.remove("show");
        document.body.style.overflow = "";
      }
    });
  });

  // Add ESC key listener to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const openModal = document.querySelector(".image-modal.show");
      if (openModal) {
        const checkboxId = openModal.querySelector("label").getAttribute("for");
        const checkbox = document.getElementById(checkboxId);
        checkbox.checked = false;
        openModal.classList.remove("show");
        document.body.style.overflow = "";
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const carLinks = document.querySelectorAll("[data-car]");
  carLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const key = this.getAttribute("data-car");
      sessionStorage.setItem("selectedCar", key);
      window.location.reload();
      switcMacchine(key);
    });
  });

  // Check for stored selection on load
  const savedCar = sessionStorage.getItem("selectedCar") || current;
  if (savedCar && carData[savedCar]) {
    switcMacchine(savedCar);
  } else {
    switcMacchine(current);
  }
});

function loadScene(path, glb, scale, degrees) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    500
  );
  camera.position.set(-14, 8, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#sf23-model"),
    alpha: true,
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth / 1.3, window.innerHeight / 1.3);
  const loader = new THREE.TextureLoader();
  loader.load("assets/pictures/canvas-background.jpg", function (texture) {
    scene.background = texture;
  });

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxDistance = 30;
  controls.minDistance = 10;
  controls.target.set(0, 2, 0);
  controls.update();

  const floorGeometry = new THREE.CircleGeometry(70, 64); // 100 radius, 64 segments
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0x444444,
    roughness: 0.6,
    metalness: 0.3,
  });
  // const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  // floor.rotation.x = -Math.PI / 2; 
  // floor.receiveShadow = true;
  // scene.add(floor);

  loadCars(path, glb, scale, degrees);

  const pointLight = new THREE.PointLight(0xffffff, 2100);
  pointLight.position.set(20, 20, 6);
  // scene.add(new THREE.PointLightHelper(pointLight));

  scene.add(pointLight);
  scene.add(new THREE.AmbientLight(0xffffff, 1));
  // scene.add(new THREE.GridHelper(100, 50));
  // scene.add(new THREE.AxesHelper(5));
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

    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    const cameraLookAtPoint = new THREE.Vector3()
      .copy(camera.position)
      .add(direction.multiplyScalar(10));
    // console.log("Camera is looking at point:", cameraLookAtPoint);

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
    scale = 1,
    degrees = 0
  ) {
    const loader = new GLTFLoader();

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      path,
      function (gltf) {
        const model = gltf.scene;
        model.position.set(position.x, position.y, position.z);
        model.scale.set(scale, scale, scale);

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

  function loadFbx(
    path,
    position = { x: 0, y: 0, z: 0 },
    scale = 1,
    degrees = 0
  ) {
    const loader = new FBXLoader();

    loader.load(
      path,
      (model) => {
        model.scale.set(scale, scale, scale);
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

  function loadCars(path, glb, scale, degrees) {
    if (glb) {
      loadGlb(path, { x: 0, y: 0, z: 0 }, scale, degrees);
    } else {
      loadFbx(path, { x: 0, y: 0, z: 0 }, scale, degrees);
    }
  }
}
