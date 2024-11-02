/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll("main section");

const ul = document.getElementById("navbar__list");

const navbar = document.querySelector(".navbar__menu ");

const scrollToTop = document.querySelector("a.scroll_to_top");

let scrollTimeout;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function createNavbar() {
  sections.forEach((section, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${section.id}`;
    a.textContent = `Section ${index + 1}`;
    a.className = "menu__link";
    li.appendChild(a);
    ul.appendChild(li);
  });
}
createNavbar();

// Add class 'hide' to section when near top of viewport

window.addEventListener("scroll", makeActive);

// smooth scroll
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu__link")) {
    e.preventDefault();

    const targetId = e.target.getAttribute("href").substring(1);

    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 250) {
    scrollToTop.classList.add("hide");
  } else {
    scrollToTop.classList.remove("hide");
  }
});

// add class 'active' to style navbar
window.addEventListener("scroll", () => {
  window.scrollY >= 100
    ? ul.classList.add("active")
    : ul.classList.remove("active");
});

window.addEventListener("scroll", () => {
  ul.classList.remove("hidden");

  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    ul.classList.add("hidden");
  }, 1000);
});

// Prevent navbar from hiding on hover or click
ul.addEventListener("mouseenter", () => {
  clearTimeout(scrollTimeout);
});
ul.addEventListener("mouseleave", () => {
  scrollTimeout = setTimeout(() => {
    ul.classList.add("hidden");
  }, 1000);
});

// control scroll to top

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/**
 * End Main Functions
 */
