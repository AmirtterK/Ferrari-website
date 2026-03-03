document.addEventListener("DOMContentLoaded", function () {
  const videoToggle = document.getElementById("video-toggle");
  const video = document.getElementById("main-video");
  const videoModal = document.querySelector(".video-modal");
  const videoContainer = document.querySelector(".video-container");

  if (videoToggle && video) {
    videoToggle.addEventListener("change", function () {
      if (!this.checked) closeVideo();
      else openVideo();
    });
  }

  // Close when clicking the dark backdrop (outside the video box)
  if (videoModal) {
    videoModal.addEventListener("click", function (e) {
      if (videoContainer && !videoContainer.contains(e.target)) {
        if (videoToggle.checked) {
          videoToggle.checked = false;
          closeVideo();
        }
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && videoToggle.checked) {
      videoToggle.checked = false;
      closeVideo();
    }
  });

  function closeVideo() {
    video.pause();
    video.currentTime = 0;
  }
  function openVideo() {
    setTimeout(() => {
      video.play().catch((error) => {});
    }, 300);
  }
});
