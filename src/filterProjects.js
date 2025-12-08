export default function filterProjects() {
  const container = document.querySelector(".clickable-languages");
  let selection;

  container.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      selection = e.target.textContent.toLowerCase();
      console.log(selection);
    }
  });

  
}
