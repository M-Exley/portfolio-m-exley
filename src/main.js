import "./style.css";

import filterProjects from "./filterProjects";
import toggleLang from "./toggle-lang";

window.addEventListener("scroll", () => {
  const header = document.querySelector(".svg");
  header.style.opacity = window.scrollY > 200 ? "0" : "1";
});

const widget = document.querySelector(".widget");
window.addEventListener("scroll", () => {
  widget.style.opacity = window.scrollY > 200 ? "0" : "1";
});

window.addEventListener("click", () => {
  widget.style.backgroundColor = "red";
  document.querySelectorAll(".cv").forEach((cv) => {
    cv.style.display = "block";
  });
});

toggleLang();
filterProjects();
