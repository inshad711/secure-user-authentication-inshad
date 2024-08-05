// navbar 
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains ("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    nav.removeAttribute("style");
    }
}

 // typing text animation script
var typed = new Typed(".typing", {
    strings: ["Fresh Foods"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});