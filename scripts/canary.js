let lightswitch = document.getElementById("lightswitch");
let theme = document.getElementById("theme");

function triggerAnimation() {
  lightswitch.classList.remove("run-animation");
  void lightswitch.offsetWidth;
  lightswitch.classList.add("run-animation");
}

/* eslint-disable no-unused-vars */

function flipSwitch() {
  if (lightswitch.classList.contains("dark")) {
    theme.setAttribute("href", "/styles/themes/graphite.css");
    lightswitch.classList.remove("dark");
    console.log("enable graphite"); // eslint-disable-line
  } else {
    theme.setAttribute("href", "/styles/themes/twilight.css");
    lightswitch.classList.add("dark");
    console.log("enable twilight"); // eslint-disable-line
  }
  triggerAnimation();
}

/* eslint-enable no-unused-vars */
