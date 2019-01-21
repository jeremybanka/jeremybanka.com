const w_GridGap = 10;
let g_ImageStrips = document.getElementsByClassName("imagestrip");
// let w_ViewStrip = g_ImageStrips[0].offsetWidth;

function buildStrip() {
  for (i = 0; i < g_ImageStrips.length; i++) {
    // for each imagestrip element
    let g_Images = g_ImageStrips[i].children;
    let n_Images = g_Images.length;
    let wT_GridGaps = w_GridGap * (n_Images + 1);
    // let w_Available = w_ViewStrip - wT_GridGaps;

    let rT_ConstrainedImages = 0;
    for (j = 0; j < g_Images.length; j++) {
      /* find width of total composite images */
      let r_Landscape = g_Images[j].naturalWidth / g_Images[j].naturalHeight;
      rT_ConstrainedImages += r_Landscape;
    }
    for (k = 0; k < g_Images.length; k++) {
      /* for each image */
      let r_Landscape = g_Images[k].naturalWidth / g_Images[k].naturalHeight;
      let rP_Image_ConstrainedImages = r_Landscape / rT_ConstrainedImages;

      g_Images[k].style.setProperty("--rP-I-CI", rP_Image_ConstrainedImages);
      g_Images[k].style.setProperty("--wT-GG", wT_GridGaps + "px");

      console.log(rP_Image_ConstrainedImages); /* interrogator */

      /*
      let w_Image = rP_Image_ConstrainedImages * w_Available; 
      g_Images[k].style.width = w_Image + "px"; 
      
      :^: Crude function that changes the width of each image to exactly what it should be upon load.
      :ˇ: Below is a sophisticated version that uses CSS calc. 
      :ˇ: It modifies variables listed in each image's style tag
      */
    }
  }
}

window.onload = function() {
  buildStrip();
};
