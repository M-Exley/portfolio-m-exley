import "./style.css";

import filterProjects from "./filterProjects";

window.addEventListener("scroll", () => {
  const header = document.querySelector(".svg");
  header.style.opacity = window.scrollY > 100 ? "0" : "1";
});

filterProjects();
