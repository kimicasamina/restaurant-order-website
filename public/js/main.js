// JavaScript to toggle the mobile menu visibility
console.log("HELLO WORLD!");

const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeMenu");
const nav = document.querySelector(".nav");
// const cta = document.querySelector(".cta");

hamburger.addEventListener("click", openMobileNav);
closeMenu.addEventListener("click", closeMobileNav);

function openMobileNav() {
  nav.classList.add("active");
  hamburger.style.display = "none";
  closeMenu.style.display = "block";
  // cta.style.display = "block";
}

function closeMobileNav() {
  nav.classList.remove("active");
  hamburger.style.display = "block";
  closeMenu.style.display = "none";
  // cta.style.display = "none";
}
