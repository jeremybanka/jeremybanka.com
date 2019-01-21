const w_GridGap = 10;
let g_Imagestrips = document.getElementsByClassName("imagestrip");
// let w_ViewStrip = g_Imagestrips[0].offsetWidth;

function buildStrip() {
  for (i = 0; i < g_Imagestrips.length; i++) {
    // for each Imagestrip element
    const g_Image = g_Imagestrips[i].children;
    const a_Image = Array.from(g_Image);
    const n_Image = g_Image.length;
    const wT_GridGaps = w_GridGap * (n_Image + 1);

    const rT_ConstrainedImage = a_Image.reduce(
      (memo, e_Image) => memo + e_Image.naturalWidth / e_Image.naturalHeight,
      0
    );

    a_Image.forEach(e_Image => {
      const r_Landscape = e_Image.naturalWidth / e_Image.naturalHeight;
      const rP_Image_ConstrainedImage = r_Landscape / rT_ConstrainedImage;
      e_Image.style.setProperty("--rP-I-CI", rP_Image_ConstrainedImage);
      e_Image.style.setProperty("--wT-GG", wT_GridGaps + "px");
    });
  }
}

window.onload = function() {
  buildStrip();
};
