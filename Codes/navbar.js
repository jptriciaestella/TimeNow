window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   var navbar = document.getElementById("navbar");
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     navbar.style.backgroundColor = "white";
     navbar.classList.add("navbar-shadow");
   } else {
     navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
     navbar.classList.remove("navbar-shadow");
   }
 }