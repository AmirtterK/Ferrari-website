document.addEventListener("DOMContentLoaded", function () {
  const imageToggle_1 = document.getElementById("image-1");
  const imageToggle_2 = document.getElementById("image-2");
  const imageToggle_3 = document.getElementById("image-3");
  const imageToggle_4 = document.getElementById("image-4");
  const imageToggle_5 = document.getElementById("image-5");
  const imageToggle_6 = document.getElementById("image-6");
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && imageToggle_1.checked) {
      imageToggle_1.checked = false;
    }
    if (e.key === "Escape" && imageToggle_2.checked) {
      imageToggle_2.checked = false;
    }
    if (e.key === "Escape" && imageToggle_3.checked) {
      imageToggle_3.checked = false;
    }
    if (e.key === "Escape" && imageToggle_4.checked) {
      imageToggle_4.checked = false;
    }
    if (e.key === "Escape" && imageToggle_5.checked) {
      imageToggle_5.checked = false;
    }
    if (e.key === "Escape" && imageToggle_6.checked) {
      imageToggle_6.checked = false;
    }
  });
});
