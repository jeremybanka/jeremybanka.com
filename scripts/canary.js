let lightswitch = document.getElementById("lightswitch");
let theme = document.getElementById("theme");

/* eslint-disable no-unused-vars */

function hitLights() {
  const isDark = lightswitch.classList.contains("dark");
  const newTheme = isDark ? "graphite" : "charcoal";
  theme.setAttribute("href", `/styles/themes/${newTheme}.css`);
  lightswitch.classList.toggle("dark");
}

/* eslint-enable no-unused-vars */
