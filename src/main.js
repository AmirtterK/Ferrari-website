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
    description: "Sviluppata e costruita a Maranello, la Ferrari SF23, guidata da Carlos Sainz Jr. e Charles Leclerc, ha partecipato al Campionato di Formula 12023. Sebbene fosse considerata un'evoluzione della F1-75 dello scorsoanno, si tratta di una vettura completamente nuova, sviluppata sullabase dell'esperienza maturata nel 2022. Il motore è lo stesso dellaF1-75, ma è stato necessario un grande lavoro per risolvere i problemidi affidabilità.",
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
    description: "La SF90 è la 65ª monoposto costruita dalla Scuderia Ferrari per competere nel Campionato mondiale di Formula 1. Affidata a Sebastian Vettel e Charles Leclerc, la vettura risponde ai nuovi regolamenti che prevedono un aumento del peso minimo e presenta un'unità motrice potenziata composta da un V6 turbo da 1,6 litri e due motogeneratori, l'MGU-K e l'MGU-H. La SF90 rappresenta un'evoluzione della sua predecessora ed è pronta a lottare per il titolo mondiale.",
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
    description: "Costruita dalla Scuderia Ferrari, la SF70H è la 63ª monoposto della squadra a partecipare al Campionato mondiale di Formula 1. Guidata da Sebastian Vettel e Kimi Räikkönen, la vettura ha beneficiato dei cambiamenti regolamentari di quest'anno, acquisendo un maggiore carico aerodinamico e grip meccanico. È pronta ad accettare la sfida e a lottare per il titolo mondiale.",
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
  f499p: {
    title: "Ferrari 499P",
    engine: "V6 ICE",
    displacement: 3000,
    weight: 1030,
    power: 500,
    description: "Il Cavallino Rampante è tornato nella classe regina delle gare endurance nel 2023 con la Ferrari 499P, una Hypercar ibrida spinta da un motore V6 biturbo da 3,0 litri abbinato a un motore elettrico da 272 CV e trazione integrale. Nelle sue prime due stagioni nel FIA WEC, la 499P ha conquistato tre vittorie assolute: due nella leggendaria 24 Ore di Le Mans con le vetture ufficiali del team Ferrari - AF Corse, e una al Circuit of the Americas con la Hypercar schierata dal team privato AF Corse.",
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

// Global variables for lazy loading
let currentScene = null;
let currentRenderer = null;
let currentCamera = null;
let currentControls = null;
let animationId = null;
let isModelLoaded = false;

// Loading state management
const loadingStates = {
  criticalImages: false,
  galleryImages: false,
  model: false,
  video: false
};

// Preload critical images first
function preloadCriticalImages(car) {
  return new Promise((resolve) => {
    const criticalImages = [car.images.main, car.images.description, car.images.thumbnail];
    let loaded = 0;
    const total = criticalImages.length;
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.onload = () => {
        loaded++;
        if (loaded === total) {
          loadingStates.criticalImages = true;
          resolve();
        }
      };
      img.onerror = () => {
        loaded++;
        if (loaded === total) {
          loadingStates.criticalImages = true;
          resolve();
        }
      };
      img.src = src;
    });
  });
}

// Lazy load gallery images
function lazyLoadGalleryImages(slides) {
  if (loadingStates.galleryImages) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px 0px'
  });

  // Update gallery generation to use lazy loading
  const sliderContainer = document.getElementById("image-slider");
  slides.forEach((slide, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide";
    slideDiv.innerHTML = `
      <img data-src="${slide}" alt="" data-slide="${index + 1}" 
           style="cursor: pointer; opacity: 0; transition: opacity 0.3s;" 
           class="lazy-image" loading="lazy"/>
    `;
    sliderContainer.appendChild(slideDiv);
    
    const img = slideDiv.querySelector('img');
    observer.observe(img);
  });
  
  loadingStates.galleryImages = true;
}

// Optimized DOM content loading
document.addEventListener("DOMContentLoaded", async () => {
  // Show loading screen
  const loadElement = document.getElementById("load");
  loadElement.style.display = "block";
  
  // Get URL parameters
  let params = new URLSearchParams(window.location.search);
  let car = params.get("Ferrari");
  if (car === "499p") car = "f499p";
  
  const selectedCar = car || "sf90";
  
  // Load critical content first
  await loadCriticalContent(selectedCar);
  
  // Hide loading screen and show content
  setTimeout(() => {
    loadElement.style.display = "none";
    document.body.classList.add("loaded");
  }, 500);
  
  // Load non-critical content progressively
  setTimeout(() => loadNonCriticalContent(selectedCar), 100);
});

async function loadCriticalContent(key) {
  const car = carData[key];
  if (!car) return;
  
  // Update basic info immediately
  document.title = car.title;
  document.getElementById("engine").innerHTML = car.engine;
  document.getElementById("displacement").innerHTML = car.displacement + " <span>cc</span>";
  document.getElementById("weight").innerHTML = car.weight + " <span>kg</span>";
  document.getElementById("power").innerHTML = car.power + " <span>kW</span>";
  document.getElementById("description-text").textContent = car.description;
  
  // Preload critical images
  await preloadCriticalImages(car);
  
  // Set critical images
  document.getElementById("main-picture").src = car.images.main;
  document.getElementById("description-image").src = car.images.description;
  
  const thumbnail = document.getElementById("video-thumbnail");
  thumbnail.style.backgroundImage = `url(${car.images.thumbnail})`;
  thumbnail.style.backgroundSize = "cover";
  thumbnail.style.backgroundPosition = "center";
}

async function loadNonCriticalContent(key) {
  const car = carData[key];
  if (!car) return;
  
  // Generate gallery with lazy loading
  generateOptimizedGallery(car.images.slides, key);
  
  // Setup video lazily
  setupVideoLazy(car.video);
  
  // Setup 3D model lazily
  if (car.model) {
    setupModelLazy(car);
  }
}

function setupVideoLazy(videoSrc) {
  const videoSource = document.querySelector("#main-video source");
  const videoToggle = document.getElementById("video-toggle");
  
  let videoLoaded = false;
  
  videoToggle.addEventListener("change", function() {
    if (this.checked && !videoLoaded) {
      videoSource.src = videoSrc;
      document.getElementById("main-video").load();
      videoLoaded = true;
      loadingStates.video = true;
    }
  });
}

function setupModelLazy(car) {
  const modelWrapper = document.getElementById("model-wrapper");
  modelWrapper.innerHTML = `
    <div class="title">Modello 3D</div>
    <div class="model-placeholder" style="height: 400px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; cursor: pointer;">
      <div style="text-align: center;">
        <div style="font-size: 48px; margin-bottom: 16px;">🏎️</div>
        <div>Clicca per caricare il modello 3D</div>
      </div>
    </div>
  `;
  modelWrapper.style.display = "block";
  
  const placeholder = modelWrapper.querySelector(".model-placeholder");
  let modelLoadInitiated = false;
  
  // Load model on intersection or click
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !modelLoadInitiated) {
        initializeModel(car, placeholder);
        modelLoadInitiated = true;
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '100px 0px'
  });
  
  observer.observe(placeholder);
  
  // Also allow manual loading
  placeholder.addEventListener("click", () => {
    if (!modelLoadInitiated) {
      initializeModel(car, placeholder);
      modelLoadInitiated = true;
    }
  });
}

function initializeModel(car, placeholder) {
  placeholder.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 24px; margin-bottom: 16px;">Caricamento...</div>
      <div style="width: 50px; height: 50px; border: 3px solid #f3f3f3; border-top: 3px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
    </div>
  `;
  
  // Add CSS for spinner
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  setTimeout(() => {
    placeholder.innerHTML = `<canvas id="sf23-model"></canvas>`;
    loadScene(car.path, car.glb, car.scale, car.degrees);
  }, 100);
}

function generateOptimizedGallery(slides, key) {
  const checkboxesContainer = document.getElementById("image-checkboxes");
  const sliderContainer = document.getElementById("image-slider");
  const modalsContainer = document.getElementById("image-modals-container");

  // Clear existing content
  checkboxesContainer.innerHTML = "";
  sliderContainer.innerHTML = "";
  modalsContainer.innerHTML = "";

  // Generate gallery with lazy loading
  slides.forEach((slide, index) => {
    const slideNumber = index + 1;
    const checkboxId = `image-${slideNumber}`;

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    checkbox.style.display = "none";
    checkboxesContainer.appendChild(checkbox);

    // Create slide with lazy loading
    const slideDiv = document.createElement("div");
    slideDiv.className = "slide";
    slideDiv.innerHTML = `
      <img data-src="${slide}" alt="" data-slide="${slideNumber}" 
           style="cursor: pointer; background: #f0f0f0; min-height: 200px;" 
           class="lazy-image" loading="lazy"/>
    `;
    sliderContainer.appendChild(slideDiv);

    // Create modal
    const modalDiv = document.createElement("div");
    modalDiv.className = "image-modal";
    modalDiv.innerHTML = `
      <div class="image-container">
        <label class="close-button" for="${checkboxId}">&#x00D7;</label>
        <img class="image-display" data-src="${slide}" alt="Ferrari ${carData[key].title} - Image ${slideNumber}" />
      </div>
    `;
    modalsContainer.appendChild(modalDiv);

    // Setup lazy loading observer
    const img = slideDiv.querySelector("img");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          const src = image.dataset.src;
          if (src) {
            image.src = src;
            image.removeAttribute('data-src');
            image.style.background = 'none';
            observer.unobserve(image);
          }
        }
      });
    }, {
      rootMargin: '50px 0px'
    });
    
    observer.observe(img);

    // Add click event to image
    img.addEventListener("click", () => {
      // Load modal image if not loaded
      const modalImg = modalDiv.querySelector(".image-display");
      if (modalImg.dataset.src) {
        modalImg.src = modalImg.dataset.src;
        modalImg.removeAttribute('data-src');
      }
      
      // Close other modals
      document.querySelectorAll('#image-checkboxes input[type="checkbox"]').forEach((cb) => {
        cb.checked = false;
      });

      // Open clicked modal
      checkbox.checked = true;
      modalDiv.classList.add("show");
    });

    // Modal event listeners
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

  // Close modal when clicking outside
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

  // ESC key listener
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

// Car switching with smooth transitions
async function switcMacchine(key) {
  const car = carData[key];
  if (!car) return;
  
  // Add switching class for smooth transition
  document.body.classList.add("car-switching");
  
  // Dispose of current 3D scene
  dispose3DScene();
  
  // Load new car content
  await loadCriticalContent(key);
  
  // Reset toggle
  document.getElementById("macchina-toggle").checked = false;
  
  // Remove switching class
  setTimeout(() => {
    document.body.classList.remove("car-switching");
  }, 500);
  
  // Load non-critical content
  setTimeout(() => loadNonCriticalContent(key), 100);
}

// Cleanup function for 3D scene
function dispose3DScene() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  
  if (currentScene) {
    currentScene.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(material => material.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  }
  
  if (currentRenderer) {
    currentRenderer.dispose();
    currentRenderer = null;
  }
  
  currentScene = null;
  currentCamera = null;
  currentControls = null;
  isModelLoaded = false;
}

// Optimized 3D scene loading
function loadScene(path, glb, scale, degrees) {
  if (isModelLoaded) return;
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
  camera.position.set(-14, 8, 0);

  const canvas = document.querySelector("#sf23-model");
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
  renderer.setSize(window.innerWidth / 1.3, window.innerHeight / 1.3);

  // Set global references
  currentScene = scene;
  currentCamera = camera;
  currentRenderer = renderer;

  // Load background texture
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
  currentControls = controls;

  // Create floor
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

  // Load car model
  loadCars(path, glb, scale, degrees);

  // Add lights
  const directPointLight = new THREE.DirectionalLight(0xffffff, 1);
  directPointLight.position.set(10, 50, 6);
  directPointLight.castShadow = true;
  directPointLight.shadow.mapSize.width = 512;
  directPointLight.shadow.mapSize.height = 512;
  directPointLight.shadow.camera.near = 0.5;
  directPointLight.shadow.camera.far = 500;
  
  scene.add(directPointLight);
  scene.add(new THREE.AmbientLight(0xffffff, 1));

  // Start animation
  animate();
  isModelLoaded = true;

  function animate() {
    animationId = requestAnimationFrame(animate);
    if (currentControls) currentControls.update();
    if (currentRenderer && currentScene && currentCamera) {
      currentRenderer.render(currentScene, currentCamera);
    }
  }

  // Optimized model loading functions
  function loadGlb(path, position = { x: 0, y: 0, z: 0 }, scale = 1, degrees = 0) {
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
        model.castShadow = true;
        model.receiveShadow = false;
        
        // Optimize materials
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
        loadingStates.model = true;
      },
      undefined,
      function (error) {
        console.error("Error loading GLB model:", error);
      }
    );
  }

  function loadFbx(path, position = { x: 0, y: 0, z: 0 }, scale = 1, degrees = 0) {
    const loader = new FBXLoader();
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
        loadingStates.model = true;
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("Error loading FBX model:", error);
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

// Handle window resize
window.addEventListener('resize', () => {
  if (currentCamera && currentRenderer) {
    currentCamera.aspect = window.innerWidth / window.innerHeight;
    currentCamera.updateProjectionMatrix();
    currentRenderer.setSize(window.innerWidth / 1.3, window.innerHeight / 1.3);
  }
});

// Make switcMacchine available globally
window.switcMacchine = switcMacchine;