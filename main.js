let nimadirContainer = document.getElementById("nimadr-container");
let expandAllBtn = document.getElementById("expand-all");
let collapseAllBtn = document.getElementById("collapse-all");
let findLocationBtn = document.getElementById("find-location");
let ochiq = document.getElementById("visible-count");
let locationInfo = document.getElementById("location-info");

let sanoq = () => {
  let ochilgan = document.querySelectorAll(".answer.visible").length;
  ochiq.textContent = `Visible Answers: ${ochilgan}`;
};

nimadirContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("question")) {
    let answer = e.target.nextElementSibling;
    let parent = e.target.parentElement;

    answer.classList.toggle("visible");
    parent.classList.toggle("active");
    sanoq();
  }
});

nimadirContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("favorite-btn")) {
    e.stopPropagation();
    alert("Marked as Favorite!");
  }
});

expandAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.classList.add("visible");
    answer.parentElement.classList.add("active");
  });
  sanoq();
});

collapseAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.classList.remove("visible");
    answer.parentElement.classList.remove("active");
  });
  sanoq();
});

findLocationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let { latitude, longitude } = position.coords;
        locationInfo.textContent = `Latitude: ${latitude.toFixed(
          6
        )}, Longitude: ${longitude.toFixed(6)}`;
      },
      () => {
        locationInfo.textContent = "Unable to retrieve location.";
      }
    );
  } else {
    locationInfo.textContent = "Geolocation is not supported by your browser.";
  }
});

sanoq();