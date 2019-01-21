const W_GRIDGAP = 10;

function buildStrip() {
  const a_Imagestrip = Array.from(
    document.getElementsByClassName("imagestrip")
  );
  a_Imagestrip.forEach(e_Imagestrip => {
    const a_Image = Array.from(e_Imagestrip.children);
    const rT_ConstrainedImage = a_Image.reduce(
      (memo, e_Image) => memo + e_Image.naturalWidth / e_Image.naturalHeight,
      0
    );

    const wT_GridGap = W_GRIDGAP * (a_Image.length + 1);
    a_Image.forEach(e_Image => {
      const r_Landscape = e_Image.naturalWidth / e_Image.naturalHeight;
      const rP_Image_ConstrainedImage = r_Landscape / rT_ConstrainedImage;
      e_Image.style.setProperty("--rP-I-CI", rP_Image_ConstrainedImage);
      e_Image.style.setProperty("--wT-GG", wT_GridGap + "px");
    });
  });
}

window.onload = function() {
  buildStrip();
};
