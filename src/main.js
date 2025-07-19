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
      main: "assets/pictures/sf23/sf23-main.webp",
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
      thumbnail: "assets/pictures/sf90/sf90-thumbnail.jpg",
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
      thumbnail: "assets/pictures/sf70h/sf70h-thumbnail.jpg",
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
  f2012: {
    title: "Ferrari F2012",
    engine: "V8",
    displacement: 2398,
    weight: 640,
    power: "7-speed",
    description:
      "La 58ª vettura di Formula 1 costruita dalla Scuderia Ferrari, la F2012 ha gareggiato nel Campionato del Mondo di Formula 1 2012, guidata da Fernando Alonso e Felipe Massa con un solo obiettivo: conquistare i titoli mondiali piloti e costruttori. Spinta da un motore V8 aspirato, la monoposto presenta un caratteristico scalino sul muso, introdotto a causa dei regolamenti, che ha permesso di alzare la parte inferiore a vantaggio dell'aerodinamica. La livrea rossa e bianca, dal forte impatto estetico, rappresenta la nostra eredità nel mondo delle corse.",
    images: {
      main: "assets/pictures/f2012/f2012-main.webp",
      description: "assets/pictures/f2012/f2012-description.jpg",
      thumbnail: "assets/pictures/f2012/f2012-thumbnail.jpg",
      slides: [
        "assets/pictures/f2012/slides/slide-1.jpg",
        "assets/pictures/f2012/slides/slide-2.jpg",
        "assets/pictures/f2012/slides/slide-3.jpg",
        "assets/pictures/f2012/slides/slide-4.jpg",
        "assets/pictures/f2012/slides/slide-5.jpg",
        "assets/pictures/f2012/slides/slide-6.jpg",
        "assets/pictures/f2012/slides/slide-7.jpg",
        "assets/pictures/f2012/slides/slide-8.jpg",
        "assets/pictures/f2012/slides/slide-9.jpg",
      ],
    },
    video: "assets/videos/sf70h-unveiling.mp4",
    model: false,
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

document.addEventListener("DOMContentLoaded", () => {
  let params = new URLSearchParams(window.location.search);
  let car = params.get("Ferrari");
  console.log(car);
  if (car === "499p") car = "f499p";
  if (car) {
    switcMacchine(car);
  } else switcMacchine("sf23");
});

async function switcMacchine(key) {
  const car = carData[key];
  if (!key) return;

  if (key === "f2012") {
    document.getElementById("main-specs").style.color = "black";
    document
      .querySelectorAll(".spec-seperator")
      .forEach((seperator) => (seperator.style.backgroundColor = "black"));
  }

  document.title = car.title;
  document.getElementById("engine").innerHTML = car.engine;
  document.getElementById("displacement").innerHTML =
    car.displacement + " <span>cc</span>";
  document.getElementById("weight").innerHTML = car.weight + " <span>kg</span>";
  if (key === "f2012") {
    document.getElementById("power").innerHTML =
      car.power + " <span>+rev</span>";
    document.getElementById("hybrid").innerHTML = car.power + "TRASMISSIONE";
  } else {
    document.getElementById("power").innerHTML = car.power + " <span>kW</span>";
    document.getElementById("hybrid").innerHTML = car.power + "POTENZA";
  }
  document.getElementById("description-text").textContent = car.description;
  // document.getElementById("main-picture").src = car.images.main;
  const mainPic = document.getElementById("main-picture");
  mainPic.src = car.images.main;
  await new Promise((resolve, reject) => {
    mainPic.onload = resolve;
    mainPic.onerror = reject;
  });

  document.getElementById("description-image").src = car.images.description;
  const thumbnail = document.getElementById("video-thumbnail");
  thumbnail.style.backgroundImage = `url(${car.images.thumbnail})`;
  thumbnail.style.backgroundSize = "cover";
  thumbnail.style.backgroundPosition = "center";

  generateGallery(car.images.slides, key);
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
        <div class="details-section">
        <div class="section-title">Modello 3D</div>
        <div class="canvas-container">
        <canvas id="modello"></canvas>
        <div id="loading-screen">
        <div id="loader"></div>
        </div>
        </div>
        </div>
      `;
    modelWrapper.style.display = "block";
    loadScene(car.path, car.glb, car.scale, car.degrees);
  } else {
    modelWrapper.style.display = "none";
  }
}

function generateGallery(slides, key) {
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
        <img class="image-display" src="${slide}" alt="Ferrari ${carData[key].title} - Image ${slideNumber}" />
      </div>
    `;
    modalsContainer.appendChild(modalDiv);

    slideDiv.querySelector("img").addEventListener("click", () => {
      document
        .querySelectorAll('#image-checkboxes input[type="checkbox"]')
        .forEach((cb) => {
          cb.checked = false;
        });

      checkbox.checked = true;

      modalDiv.classList.add("show");
    });

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        modalDiv.classList.add("show");
        document.body.style.overflow = "hidden";
      } else {
        modalDiv.classList.remove("show");
        document.body.style.overflow = "";
      }
    });

    modalDiv.querySelector(".close-button").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      checkbox.checked = false;
      modalDiv.classList.remove("show");
      document.body.style.overflow = "";
    });
  });

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

function loadScene(path, glb, scale, degrees) {
  const scene = new THREE.Scene();

  const loadingManager = new THREE.LoadingManager(() => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("fade-out");

    loadingScreen.addEventListener("transitionend", onTransitionEnd);
  });

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    500
  );
  camera.position.set(-14, 8, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#modello"),
    alpha: true,
  });

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
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

  const floorGeometry = new THREE.CircleGeometry(70, 64);
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.6,
    metalness: 0.3,
  });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  loadCars(path, glb, scale, degrees);

  const directPointLight = new THREE.DirectionalLight(0xffffff, 1);
  directPointLight.position.set(10, 50, 6);
  directPointLight.castShadow = true;
  directPointLight.shadow.mapSize.width = 512;
  directPointLight.shadow.mapSize.height = 512;
  directPointLight.shadow.camera.near = 0.5;
  directPointLight.shadow.camera.far = 500;
  // scene.add(new THREE.PointLightHelper(pointLight));

  scene.add(directPointLight);
  scene.add(new THREE.AmbientLight(0xffffff, 1));
  // scene.add(new THREE.GridHelper(100, 50));
  // scene.add(new THREE.AxesHelper(5));
  animate();

  function animate() {
    requestAnimationFrame(animate);

    controls.update();
    renderer.render(scene, camera);
  }

  function loadGlb(
    path,
    position = { x: 0, y: 0, z: 0 },
    scale = 1,
    degrees = 0
  ) {
    const loader = new GLTFLoader(loadingManager);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      path,
      function (gltf) {
        const model = gltf.scene;
        model.position.set(position.x, position.y, position.z);
        model.scale.set(scale, scale, scale);
        model.castShadow = true;
        model.receiveShadow = false;
        model.traverse((child) => {
          if (child.isMesh && child.material) {
            const material = child.material;
            const materials = Array.isArray(material) ? material : [material];
            child.castShadow = true;
            child.receiveShadow = false;
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
    const loader = new FBXLoader(loadingManager);

    loader.load(
      path,
      (model) => {
        model.scale.set(scale, scale, scale);
        model.position.set(position.x, position.y, position.z);
        const radians = degrees * (Math.PI / 180);
        model.rotation.y = radians;
        model.castShadow = true;
        model.receiveShadow = false;

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
