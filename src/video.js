document.addEventListener("DOMContentLoaded", function () {
  const videoToggle = document.getElementById("video-toggle");
  const video = document.getElementById("main-video");

  if (videoToggle && video) {
    videoToggle.addEventListener("change", function () {
      if (!this.checked) closeVideo();
      else openVideo();
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
    // Small delay to ensure modal is visible before playing
    setTimeout(() => {
      video.play().catch((error) => {
        console.log("Auto-play prevented:", error);
        // Auto-play might be blocked by browser, that's okay
      });
    }, 300);
  }
});
