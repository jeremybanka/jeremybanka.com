/* :::: Smoothscroll :::::::::::::::::::::::::::::::::::: */
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});
/* :::: Mobile Contents Browser :::::::::::::::::::::::::: */
let toc = document.getElementById("toc");

function toggleTOC() {
  toc.classList.toggle("browse");
}
/* :::: Subsection Activators :::::::::::::::::::::::::: */
var accordions = document.getElementsByClassName("accordion");
var closeElements = document.getElementsByClassName("close");
var i;

for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    this.classList.add("active");
    var sub = this.nextElementSibling;
    sub.style.maxHeight = sub.scrollHeight + "px";
  });
}
for (i = 0; i < closeElements.length; i++) {
  closeElements[i].addEventListener("click", function() {
    var sect = this.parentElement;
    sect.previousElementSibling.classList.remove("active");
    sect.style.maxHeight = null;
  });
}