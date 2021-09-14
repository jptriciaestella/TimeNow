var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");
var burgerBtn = document.getElementById('burgerBtn');
var content= document.getElementById('all-content');
var menu = document.getElementById("nav");
var body = document.getElementById("body");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) 
  {
    navbar.style.top = "0";
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
      navbar.classList.add("scrolled");
    }
    else
    {
      navbar.classList.remove("scrolled");
    }
  } 
  else 
  {
    navbar.style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
 
function focusField(){
    document.getElementById("email-input").style.borderColor = "#1d1b67";
}

function blurField(){
    document.getElementById("email-input").style.borderColor = "#dadada";
}

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle("active");
  content.classList.toggle("active");
  navbar.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("active");
}, false);

function toggleNavbarAcvtive(){
  burgerBtn.classList.toggle("active");
  content.classList.toggle("active");
  navbar.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("active");
}