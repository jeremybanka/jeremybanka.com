const w_GridGap = 10;
let g_Imagestrips = document.getElementsByClassName("imagestrip");
// let w_ViewStrip = g_Imagestrips[0].offsetWidth;

function buildStrip() {
  for (i = 0; i < g_Imagestrips.length; i++) {
    // for each Imagestrip element
    let g_Image = g_Imagestrips[i].children;
    let a_Image = Array.from(g_Image);
    let n_Image = g_Image.length;
    let wT_GridGaps = w_GridGap * (n_Image + 1);
    // let w_Available = w_ViewStrip - wT_GridGaps;

    let rT_ConstrainedImage = 0;
    a_Image.forEach(e_Image => {
      let r_Landscape = e_Image.naturalWidth / e_Image.naturalHeight;
      rT_ConstrainedImage += r_Landscape;
    });

    for (k = 0; k < g_Image.length; k++) {
      /* for each image */
      let r_Landscape = g_Image[k].naturalWidth / g_Image[k].naturalHeight;
      let rP_Image_ConstrainedImage = r_Landscape / rT_ConstrainedImage;

      g_Image[k].style.setProperty("--rP-I-CI", rP_Image_ConstrainedImage);
      g_Image[k].style.setProperty("--wT-GG", wT_GridGaps + "px");

      console.log(rP_Image_ConstrainedImage); /* interrogator */

      /*
      let w_Image = rP_Image_ConstrainedImage * w_Available; 
      g_Image[k].style.width = w_Image + "px"; 
      
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
