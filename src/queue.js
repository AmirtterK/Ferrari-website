class AssetLoadingQueue {
  constructor() {
    this.queues = {
      critical: [], // Text content, main image
      important: [], // Description image, thumbnail
      medium: [], // Gallery slides
      low: [], // Video, 3D model
    };

    this.loadingStates = {
      critical: false,
      important: false,
      medium: false,
      low: false,
    };

    this.concurrentLoads = {
      critical: 1,
      important: 2,
      medium: 3,
      low: 1,
    };

    this.activeLoads = {
      critical: 0,
      important: 0,
      medium: 0,
      low: 0,
    };

    this.observers = [];
  }

  // Add task to appropriate queue
  add(task, priority = "medium") {
    this.queues[priority].push(task);
    this.processQueue(priority);
  }

  // Process queue with concurrency limits
  async processQueue(priority) {
    if (
      this.loadingStates[priority] ||
      this.activeLoads[priority] >= this.concurrentLoads[priority]
    ) {
      return;
    }

    const queue = this.queues[priority];
    if (queue.length === 0) return;

    this.loadingStates[priority] = true;

    while (
      queue.length > 0 &&
      this.activeLoads[priority] < this.concurrentLoads[priority]
    ) {
      const task = queue.shift();
      this.activeLoads[priority]++;

      this.executeTask(task, priority);
    }
  }

  async executeTask(task, priority) {
    try {
      await task.execute();
      this.notifyObservers("loaded", { type: task.type, priority, task });
    } catch (error) {
      console.error(`Failed to load ${task.type}:`, error);
      this.notifyObservers("error", { type: task.type, priority, error, task });
    } finally {
      this.activeLoads[priority]--;

      // Continue processing queue
      if (this.queues[priority].length > 0) {
        this.processQueue(priority);
      } else if (this.activeLoads[priority] === 0) {
        this.loadingStates[priority] = false;
        this.notifyObservers("queueComplete", { priority });
      }
    }
  }

  // Observer pattern for loading updates
  subscribe(callback) {
    this.observers.push(callback);
  }

  notifyObservers(event, data) {
    this.observers.forEach((callback) => callback(event, data));
  }

  // Get total pending tasks
  getPendingCount() {
    return Object.values(this.queues).reduce(
      (total, queue) => total + queue.length,
      0
    );
  }

  // Check if specific priority queue is complete
  isQueueComplete(priority) {
    return (
      this.queues[priority].length === 0 && this.activeLoads[priority] === 0
    );
  }
}

// Specific loading tasks for different asset types
class LoadingTasks {
  static createTextTask(content, targetId) {
    return {
      type: "text",
      execute: async () => {
        // Simulate small delay for smooth UI
        await new Promise((resolve) => setTimeout(resolve, 10));
        document.getElementById(targetId).textContent = content;
      },
    };
  }

  static createImageTask(src, targetId, isBackground = false) {
    return {
      type: "image",
      src,
      execute: async () => {
        return new Promise((resolve, reject) => {
          const img = new Image();

          img.onload = () => {
            const target = document.getElementById(targetId);
            if (!target) {
              reject(new Error(`Target element ${targetId} not found`));
              return;
            }

            if (isBackground) {
              target.style.backgroundImage = `url(${src})`;
              target.style.backgroundSize = "cover";
              target.style.backgroundPosition = "center";
            } else {
              target.src = src;
            }

            resolve();
          };

          img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
          img.src = src;
        });
      },
    };
  }

  static createGalleryTask(slides, key) {
    return {
      type: "gallery",
      execute: async () => {
        // Use requestIdleCallback for smooth loading
        return new Promise((resolve) => {
          const loadSlides = () => {
            generateGallery(slides, key);
            resolve();
          };

          if ("requestIdleCallback" in window) {
            requestIdleCallback(loadSlides);
          } else {
            setTimeout(loadSlides, 0);
          }
        });
      },
    };
  }

  static createVideoTask(videoSrc) {
    return {
      type: "video",
      execute: async () => {
        return new Promise((resolve) => {
          const videoSource = document.querySelector("#main-video source");
          if (videoSource) {
            videoSource.src = videoSrc;
            const video = document.getElementById("main-video");

            // Load video metadata without downloading full video
            video.preload = "metadata";
            video.load();
          }
          resolve();
        });
      },
    };
  }

  static create3DModelTask(path, glb, scale, degrees) {
    return {
      type: "3d-model",
      execute: async () => {
        return new Promise((resolve) => {
          // Use requestIdleCallback for heavy 3D loading
          if ("requestIdleCallback" in window) {
            requestIdleCallback(
              () => {
                loadScene(path, glb, scale, degrees);
                resolve();
              },
              { timeout: 2000 }
            );
          } else {
            setTimeout(() => {
              loadScene(path, glb, scale, degrees);
              resolve();
            }, 100);
          }
        });
      },
    };
  }

  static createSpecsTask(car, key) {
    return {
      type: "specs",
      execute: async () => {
        await new Promise((resolve) => setTimeout(resolve, 5));

        // Update specs
        document.getElementById("engine").innerHTML = car.engine;
        document.getElementById("displacement").innerHTML =
          car.displacement + " <span>cc</span>";
        document.getElementById("weight").innerHTML =
          car.weight + " <span>kg</span>";

        if (key === "f2012") {
          document.getElementById("power").innerHTML =
            car.power + " <span>+rev</span>";
          document.getElementById("hybrid").innerHTML = "TRASMISSIONE";
        } else {
          document.getElementById("power").innerHTML =
            car.power + " <span>kW</span>";
          document.getElementById("hybrid").innerHTML = "POTENZA";
        }
      },
    };
  }
}

// Progress indicator
class LoadingProgressIndicator {
  constructor() {
    this.createProgressBar();
    this.totalTasks = 0;
    this.completedTasks = 0;
  }

  createProgressBar() {
    const progressContainer = document.createElement("div");
    progressContainer.id = "loading-progress";
    progressContainer.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 4px; 
                  background: rgba(0,0,0,0.1); z-index: 9999;">
        <div id="progress-bar" style="height: 100%; background: linear-gradient(90deg, #da291c, #ff6b6b); 
                                     width: 0%; transition: width 0.3s ease;"></div>
      </div>
      <div id="loading-status" style="position: fixed; bottom: 20px; right: 20px; 
                                     background: rgba(0,0,0,0.8); color: white; 
                                     padding: 10px 20px; border-radius: 25px; 
                                     font-family: 'Body-Font', sans-serif; 
                                     font-size: 12px; z-index: 9999;
                                     opacity: 0; transition: opacity 0.3s ease;">
        Loading...
      </div>
    `;
    document.body.appendChild(progressContainer);
  }

  updateProgress(completed, total, currentTask = "") {
    this.completedTasks = completed;
    this.totalTasks = total;

    const percentage = total > 0 ? (completed / total) * 100 : 0;
    const progressBar = document.getElementById("progress-bar");
    const loadingStatus = document.getElementById("loading-status");

    if (progressBar) {
      progressBar.style.width = `${percentage}%`;
    }

    if (loadingStatus) {
      if (percentage > 0 && percentage < 100) {
        loadingStatus.style.opacity = "1";
        loadingStatus.textContent = currentTask
          ? `Loading ${currentTask}... ${Math.round(percentage)}%`
          : `Loading... ${Math.round(percentage)}%`;
      } else if (percentage >= 100) {
        setTimeout(() => {
          loadingStatus.style.opacity = "0";
          setTimeout(() => {
            const container = document.getElementById("loading-progress");
            if (container) container.remove();
          }, 300);
        }, 500);
      }
    }
  }
}

// Enhanced switchMacchine function with async loading
async function switchMacchineSmooth(key) {
  const car = carData[key];
  if (!car) return;

  // Initialize loading system
  const loadingQueue = new AssetLoadingQueue();
  const progressIndicator = new LoadingProgressIndicator();

  let totalTasks = 0;
  let completedTasks = 0;

  // Count total tasks
  const taskCounts = {
    critical: 3, // title, specs, main image
    important: 2, // description text, description image
    medium: car.images.slides.length + 1, // gallery + thumbnail
    low: car.model ? 2 : 1, // video + optional 3D model
  };

  totalTasks = Object.values(taskCounts).reduce((sum, count) => sum + count, 0);

  // Subscribe to loading updates
  loadingQueue.subscribe((event, data) => {
    if (event === "loaded") {
      completedTasks++;
      progressIndicator.updateProgress(completedTasks, totalTasks, data.type);
    } else if (event === "queueComplete") {
      console.log(`${data.priority} priority queue completed`);
    }
  });

  // Handle special styling for F2012
  if (key === "f2012") {
    document.getElementById("main-specs").style.color = "black";
    document
      .querySelectorAll(".spec-seperator")
      .forEach((separator) => (separator.style.backgroundColor = "black"));
  } else {
    document.getElementById("main-specs").style.color = "white";
    document
      .querySelectorAll(".spec-seperator")
      .forEach((separator) => (separator.style.backgroundColor = "white"));
  }

  // Add smooth transition
  document.body.classList.add("car-switching");

  // CRITICAL PRIORITY - Must load first
  loadingQueue.add(LoadingTasks.createTextTask(car.title, "title"), "critical");
  loadingQueue.add(LoadingTasks.createSpecsTask(car, key), "critical");
  loadingQueue.add(
    LoadingTasks.createImageTask(car.images.main, "main-picture"),
    "critical"
  );

  // IMPORTANT PRIORITY - Load after critical
  await new Promise((resolve) => {
    const checkCritical = () => {
      if (loadingQueue.isQueueComplete("critical")) {
        resolve();
      } else {
        setTimeout(checkCritical, 50);
      }
    };
    checkCritical();
  });

  loadingQueue.add(
    LoadingTasks.createTextTask(car.description, "description-text"),
    "important"
  );
  loadingQueue.add(
    LoadingTasks.createImageTask(car.images.description, "description-image"),
    "important"
  );

  // MEDIUM PRIORITY - Gallery and thumbnail
  loadingQueue.add(
    LoadingTasks.createGalleryTask(car.images.slides, key),
    "medium"
  );
  loadingQueue.add(
    LoadingTasks.createImageTask(car.images.thumbnail, "video-thumbnail", true),
    "medium"
  );

  // LOW PRIORITY - Heavy assets
  loadingQueue.add(LoadingTasks.createVideoTask(car.video), "low");

  // Handle 3D model
  const modelWrapper = document.getElementById("model-wrapper");
  if (car.model) {
    modelWrapper.innerHTML = `
      <div class="title">Modello 3D</div>
      <div class="canvas-container">
        <canvas id="modello"></canvas>
        <div id="loading-screen">
          <div id="loader"></div>
        </div>
      </div>
    `;
    modelWrapper.style.display = "block";
    loadingQueue.add(
      LoadingTasks.create3DModelTask(car.path, car.glb, car.scale, car.degrees),
      "low"
    );
  } else {
    modelWrapper.style.display = "none";
  }

  // Update page title and close sidebar
  document.title = car.title;
  document.getElementById("macchina-toggle").checked = false;

  // Remove transition class after initial load
  setTimeout(() => {
    document.body.classList.remove("car-switching");
  }, 300);
}

// Initialize with smooth loading
document.addEventListener("DOMContentLoaded", () => {
  let params = new URLSearchParams(window.location.search);
  let car = params.get("Ferrari");
  if (car === "499p") car = "f499p";

  // Use smooth loading instead of immediate loading
  switchMacchineSmooth(car || "sf23");
});

// Enhanced image preloading with intersection observer
class LazyImageLoader {
  constructor() {
    this.imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          this.imageObserver.unobserve(img);
        }
      });
    });
  }

  observe(img) {
    this.imageObserver.observe(img);
  }
}

// Usage example with lazy loading for gallery images
function generateGalleryWithLazyLoading(slides, key) {
  const lazyLoader = new LazyImageLoader();
  const checkboxesContainer = document.getElementById("image-checkboxes");
  const sliderContainer = document.getElementById("image-slider");
  const modalsContainer = document.getElementById("image-modals-container");

  // Clear existing content
  checkboxesContainer.innerHTML = "";
  sliderContainer.innerHTML = "";
  modalsContainer.innerHTML = "";

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
      <img class="lazy" data-src="${slide}" alt="" data-slide="${slideNumber}" 
           style="cursor: pointer; background: #f0f0f0;" loading="lazy"/>
    `;
    sliderContainer.appendChild(slideDiv);

    // Setup lazy loading
    const img = slideDiv.querySelector("img");
    lazyLoader.observe(img);

    // Rest of the modal setup...
    const modalDiv = document.createElement("div");
    modalDiv.className = "image-modal";
    modalDiv.innerHTML = `
      <div class="image-container">
        <label class="close-button" for="${checkboxId}">&#x00D7;</label>
        <img class="image-display" src="${slide}" alt="Ferrari ${carData[key].title} - Image ${slideNumber}" />
      </div>
    `;
    modalsContainer.appendChild(modalDiv);

    // Event listeners...
    img.addEventListener("click", () => {
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
}

// Export for use in main application
window.AssetLoadingQueue = AssetLoadingQueue;
window.switchMacchineSmooth = switchMacchineSmooth;
