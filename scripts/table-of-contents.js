/* :::: Smoothscroll :::::::::::::::::::::::::::::::::::: */
$(document).on("click", "a[href^=\"#\"]", function(event) {
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
/* :::: Scrollbar Hack ::::::::::::::::::::::::::::::::::: */
(function($) {
  $(window).on("load", function() {
    $(".tocbar").mCustomScrollbar({ alwaysShowScrollbar: 2 });
    $(".tocbar").mCustomScrollbar({ scrollInertia: i });
  });
})(jQuery);

/*
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
</script>
<script>
(function($) {
  $(window).on("load", function() {
    $(".tocbar").mCustomScrollbar({ alwaysShowScrollbar: 2 });
    $(".tocbar").mCustomScrollbar({ scrollInertia: i });
  });
})(jQuery);
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
