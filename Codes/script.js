var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
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
    navbar.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

 
function focusField(){
    document.getElementById("email-input").style.borderColor = "#1d1b67";
}

function blurField(){
    document.getElementById("email-input").style.borderColor = "#dadada";
}