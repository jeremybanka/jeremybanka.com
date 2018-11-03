/* Toggle add-remove the "responsive" class to the table of contents when the user clicks on the icon */
function mobileContents() {
  var x = document.getElementById("contents");
  if (x.className === "tocbar") {
    x.className += " responsive";
  } else {
    x.className = "tocbar";
  }
}

/* Smoothscroll charm */
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

/* Smoothscroll charm */
