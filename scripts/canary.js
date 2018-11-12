let lightswitch = document.getElementById("lightswitch");
let theme = document.getElementById("theme");

function triggerAnimation(e) {
  e.preventDefault;
  lightswitch.classList.remove("run-animation");
  void lightswitch.offsetWidth;
  lightswitch.classList.add("run-animation");
}

/* eslint-disable no-unused-vars */

function flipSwitch(e) {
  if (lightswitch.style.animationDirection === "reverse") {
    theme.setAttribute("href", "/styles/themes/graphite.css");
    lightswitch.style.animationDirection = null;
    console.log("pencil's down"); // eslint-disable-line
  } else {
    theme.setAttribute("href", "/styles/themes/twilight.css");
    lightswitch.style.animationDirection = "reverse";
    console.log("graph"); // eslint-disable-line
  }
  triggerAnimation(e);
}

/* eslint-enable no-unused-vars */
