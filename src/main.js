import "./style.css";

window.addEventListener("scroll", () => {
  const header = document.querySelector(".svg");
  header.style.opacity = window.scrollY > 100 ? "0" : "1";
});
