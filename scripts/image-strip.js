const W_GUTTER = 10;

function buildStrip() {
  const A_strips = Array.from(document.getElementsByClassName("imagestrip"));
  A_strips.forEach(E_strip => {
    const A_images = Array.from(E_strip.children);
    const RT_constrainedImage = A_images.reduce(
      (memo, E_image) => memo + E_image.naturalWidth / E_image.naturalHeight,
      0
    );

    const WT_gutters = W_GUTTER * (A_images.length + 1);
    console.log(WT_gutters);
    A_images.forEach(E_image => {
      const R_landscape = E_image.naturalWidth / E_image.naturalHeight;
      const RP_image_constrainedImage = R_landscape / RT_constrainedImage;
      E_image.style.setProperty("--RP-I-CI", RP_image_constrainedImage);
      E_image.style.setProperty("--WT-G", WT_gutters + "px");
    });
  });
}

const protoWait = document.createElement("img");
protoWait.setAttribute("src", "/images/load.gif");

document.body.insertBefore(protoWait, document.body.children[0]);

window.onload = function() {
  protoWait.setAttribute("style", "display: none");
  buildStrip();
};
