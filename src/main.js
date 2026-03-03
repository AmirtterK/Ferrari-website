import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const carData = {
  sf23: {
    title: "Squadra Corsa: Ferrari SF-23",
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
    title: "Squadra Corsa: Ferrari SF90",
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
    title: "Squadra Corsa: Ferrari SF70H",
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
    title: "Squadra Corsa: Ferrari F2012",
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
    title: "Squadra Corsa: Ferrari 499P",
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

// ─── Global resize handler (single, not per loadScene call) ─────────────────
let _rendererRef = null;
let _cameraRef = null;
let _resizeRAF = null;

window.addEventListener("resize", () => {
  if (_resizeRAF) cancelAnimationFrame(_resizeRAF);
  _resizeRAF = requestAnimationFrame(() => {
    if (!_rendererRef || !_cameraRef) return;
    const container = document.querySelector(".canvas-container");
    const w = container ? container.clientWidth : window.innerWidth;
    const h = window.innerWidth <= 768 ? Math.round(w * 0.65) : Math.round(w * 0.56);
    _cameraRef.aspect = w / h;
    _cameraRef.updateProjectionMatrix();
    _rendererRef.setSize(w, h);
  });
});

// ─── Global keydown for gallery (single listener, not per generateGallery) ──
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const openModal = document.querySelector(".image-modal.show");
    if (openModal) {
      closeModal(openModal);
    }
  }
});

function closeModal(modal) {
  const label = modal.querySelector("label.close-button");
  if (!label) return;
  const checkboxId = label.getAttribute("for");
  const checkbox = document.getElementById(checkboxId);
  if (checkbox) checkbox.checked = false;
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  let car = params.get("Ferrari");
  if (car === "499p") car = "f499p";
  switcMacchine(car || "sf23");
});

async function switcMacchine(key) {
  const car = carData[key];
  if (!car) return;

  // colour overrides for f2012 white-on-dark livery
  const isDark = key === "f2012";
  const specsColor = isDark ? "black" : "white";
  document.getElementById("main-specs").style.color = specsColor;
  document.querySelectorAll(".spec-seperator").forEach((s) => {
    s.style.backgroundColor = specsColor;
  });

  document.title = car.title;
  document.getElementById("engine").innerHTML = car.engine;
  document.getElementById("displacement").innerHTML = `${car.displacement} <span>cc</span>`;
  document.getElementById("weight").innerHTML = `${car.weight} <span>kg</span>`;

  if (isDark) {
    document.getElementById("power").innerHTML = `${car.power} <span>+rev</span>`;
    document.getElementById("hybrid").innerHTML = "TRASMISSIONE";
  } else {
    document.getElementById("power").innerHTML = `${car.power} <span>kW</span>`;
    document.getElementById("hybrid").innerHTML = "POTENZA";
  }

  document.getElementById("description-text").textContent = car.description;

  // Hero image — load in parallel with description image
  const mainPic = document.getElementById("main-picture");
  const descPic = document.getElementById("description-image");

  const heroLoad = new Promise((res) => {
    if (mainPic.complete && mainPic.src.includes(car.images.main)) return res();
    mainPic.onload = res;
    mainPic.onerror = res; // don't block on error
    mainPic.src = car.images.main;
  });

  descPic.src = car.images.description;

  // Video thumbnail background
  const thumbnail = document.getElementById("video-thumbnail");
  thumbnail.style.backgroundImage = `url(${car.images.thumbnail})`;
  thumbnail.style.backgroundSize = "cover";
  thumbnail.style.backgroundPosition = "center";

  // Video source — set src lazily, don't preload
  const videoEl = document.getElementById("main-video");
  const videoSource = videoEl.querySelector("source");
  if (videoSource && videoSource.src !== car.video) {
    videoSource.src = car.video;
    // Don't call .load() until user actually opens the player
    videoEl.setAttribute("data-needs-load", "true");
  }

  // Wait only for hero image before revealing
  await heroLoad;

  generateGallery(car.images.slides, key);

  document.getElementById("squadra-toggle").checked = false;

  document.body.classList.add("car-switching");
  setTimeout(() => document.body.classList.remove("car-switching"), 500);

  // 3D model section
  const modelWrapper = document.getElementById("model-wrapper");

  // Dispose previous renderer to free GPU memory
  if (_rendererRef) {
    _rendererRef.dispose();
    _rendererRef = null;
    _cameraRef = null;
  }

  if (car.model) {
    modelWrapper.innerHTML = `
      <div class="section-title">MACCHINA</div>
      <div class="canvas-container">
        <canvas id="modello"></canvas>
        <div id="loading-screen">
          <div id="loader-wrapper">
            <div id="percent">0%</div>
            <div id="loader"></div>
          </div>
        </div>
      </div>`;
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

  checkboxesContainer.innerHTML = "";
  sliderContainer.innerHTML = "";
  modalsContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();
  const modalFragment = document.createDocumentFragment();

  slides.forEach((slide, index) => {
    const slideNumber = index + 1;
    const checkboxId = `image-${slideNumber}`;

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    checkbox.style.display = "none";
    checkboxesContainer.appendChild(checkbox);

    // Slide thumbnail — lazy load all
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide";
    const thumbImg = document.createElement("img");
    thumbImg.src = slide;
    thumbImg.alt = "";
    thumbImg.loading = "lazy";
    thumbImg.style.cursor = "pointer";
    slideDiv.appendChild(thumbImg);
    fragment.appendChild(slideDiv);

    // Modal — use data-src, load full image only when opened
    const modalDiv = document.createElement("div");
    modalDiv.className = "image-modal";
    modalDiv.innerHTML = `
      <div class="image-container">
        <label class="close-button" for="${checkboxId}">&#x00D7;</label>
        <img class="image-display" data-src="${slide}"
             alt="Ferrari ${carData[key].title} - Image ${slideNumber}" />
      </div>`;
    modalFragment.appendChild(modalDiv);

    // Open modal on thumbnail click
    thumbImg.addEventListener("click", () => {
      // Close any open modals first
      document.querySelectorAll(".image-modal.show").forEach((m) => closeModal(m));

      // Lazy-load the full image now
      const fullImg = modalDiv.querySelector(".image-display");
      if (fullImg.dataset.src && !fullImg.src) {
        fullImg.src = fullImg.dataset.src;
      }

      checkbox.checked = true;
      modalDiv.classList.add("show");
      document.body.style.overflow = "hidden";
    });

    checkbox.addEventListener("change", function () {
      if (!this.checked) {
        modalDiv.classList.remove("show");
        document.body.style.overflow = "";
      }
    });

    // Close button
    modalDiv.querySelector(".close-button").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModal(modalDiv);
    });

    // Tap backdrop to close
    modalDiv.addEventListener("click", (e) => {
      const container = modalDiv.querySelector(".image-container");
      if (container && !container.contains(e.target)) {
        closeModal(modalDiv);
      }
    });
  });

  sliderContainer.appendChild(fragment);
  modalsContainer.appendChild(modalFragment);
}

function loadScene(path, glb, scale, degrees) {
  const scene = new THREE.Scene();

  // Loading manager — single fade-out, no duplicate calls
  let fadeOutDone = false;
  const loadingManager = new THREE.LoadingManager();

  loadingManager.onProgress = (url, loaded, total) => {
    const el = document.getElementById("percent");
    if (el) el.textContent = `${Math.floor((loaded / total) * 100)}%`;
  };

  loadingManager.onLoad = () => {
    if (fadeOutDone) return;
    fadeOutDone = true;
    const screen = document.getElementById("loading-screen");
    if (!screen) return;
    screen.classList.add("fade-out");
    screen.addEventListener("transitionend", () => screen.remove(), { once: true });
  };

  // Camera
  const isMobile = window.innerWidth <= 768;
  const canvasContainer = document.querySelector(".canvas-container");
  const w = canvasContainer ? canvasContainer.clientWidth : window.innerWidth;
  const h = isMobile ? Math.round(w * 0.65) : Math.round(w * 0.56);

  const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 500);
  camera.position.set(-14, 8, 0);
  _cameraRef = camera;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#modello"),
    alpha: true,
    antialias: !isMobile, // skip antialiasing on mobile for perf
    powerPreference: "high-performance",
  });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  _rendererRef = renderer;

  // Background texture
  new THREE.TextureLoader().load("assets/pictures/canvas-background.jpg", (texture) => {
    scene.background = texture;
  });

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxDistance = 30;
  controls.minDistance = 10;
  controls.target.set(0, 2, 0);
  controls.update();

  // Floor
  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(70, 32), // reduced segments from 64→32
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.3 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  // Lights
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(10, 50, 6);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.set(512, 512);
  dirLight.shadow.camera.near = 0.5;
  dirLight.shadow.camera.far = 500;
  scene.add(dirLight);
  scene.add(new THREE.AmbientLight(0xffffff, 1));

  // Load model
  if (glb) loadGlb(path, scale);
  else loadFbx(path, scale, degrees);

  // Render loop — pause when canvas is off-screen (IntersectionObserver)
  let isVisible = true;
  let animId = null;

  const canvasEl = document.querySelector("#modello");
  const visObserver = new IntersectionObserver(
    ([entry]) => { isVisible = entry.isIntersecting; },
    { threshold: 0.05 }
  );
  if (canvasEl) visObserver.observe(canvasEl);

  function animate() {
    animId = requestAnimationFrame(animate);
    if (!isVisible) return; // skip render when off-screen
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // ── Loaders ────────────────────────────────────────────────────────────────

  function loadGlb(path, scale) {
    const loader = new GLTFLoader(loadingManager);
    const draco = new DRACOLoader();
    draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(draco);

    loader.load(path, (gltf) => {
      const model = gltf.scene;
      model.scale.setScalar(scale);
      model.castShadow = true;
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((mat) => {
            if (mat.map) {
              mat.map.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
              mat.map.minFilter = THREE.LinearMipMapLinearFilter;
              mat.map.magFilter = THREE.LinearFilter;
              mat.map.generateMipmaps = true;
              mat.map.needsUpdate = true;
            }
          });
        }
      });
      scene.add(model);
    }, undefined, (err) => console.error("GLB load error:", err));
  }

  function loadFbx(path, scale, degrees) {
    const loader = new FBXLoader(loadingManager);
    loader.load(path, (model) => {
      model.scale.setScalar(scale);
      model.rotation.y = degrees * (Math.PI / 180);
      model.castShadow = true;
      scene.add(model);
    }, undefined, (err) => console.error("FBX load error:", err));
  }
}
