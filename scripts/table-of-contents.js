/* Toggle add-remove the "responsive" class to the table of contents when the user clicks on the icon */
function mobileContents() {
  var x = document.getElementById("contents");
  if (x.className === "tocbar") {
    x.className += " responsive";
  } else {
    x.className = "tocbar";
  }
}

/* get 
var accordions = document.getElementsByClassName("accordion");
var closeElements = document.getElementsByClassName("close");
var i;

for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var sub = this.nextElementSibling;
    if (sub.style.maxHeight) {
      sub.style.maxHeight = null;
    } else {
      sub.style.maxHeight = sub.scrollHeight + "px";
    }
  });
}
for (i = 0; i < closeElements.length; i++) {
  closeElements[i].addEventListener("click", function() {
    var sect = this.parentElement;
    sect.previousElementSibling.classList.toggle("active");
    if (sect.style.maxHeight) {
      sect.style.maxHeight = null;
    } else {
      sect.style.maxHeight = auto;
    }
  });
} */

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
