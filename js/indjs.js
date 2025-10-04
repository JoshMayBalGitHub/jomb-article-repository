/*//////////////////////////
 Can someone take a look at any other way
other than this, the repeating of 
window.location.href is making me go insane,
thanks! - Joshua
Still, nothing. - Joshua, 02-18-23
Yeah nah, i am still insane - Joshua, 03-14-23
For now, idk what i can do, this is the best method.. -Joshua
*//////////////////////////
function Jombarticle() {
    window.location.href = "article-navigator.html";
   }
function Jombspecialscihi() {
    window.location.href = "scihi-navigator.html";
}

function Jombathonta() {
    window.location.href = "thonta-navigator.html";
}

function Jombathontaagain() {
    window.location.href = "../../thonta-navigator.html";
}

// sticky navbar don't touch

window.addEventListener('load', function() {
  window.onscroll = function() {stickyNavbar()};
  
var navbar = document.getElementById("sticky-navbar-tb");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-navbar")
  } else {
    navbar.classList.remove("sticky-navbar");
  }
}
});

function chapix() {
    document.getElementById("js-ddcont").classList.toggle("show-ddcont");
}

