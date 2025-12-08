export default function toggleLang() {
  const toggleBtn = document.querySelector(".toggle-lang");

  let english = true;

  toggleBtn.addEventListener("click", function () {
    console.log("Toggle activated");

    if (english) {
      toggleBtn.textContent = "ENGLISH";
      document.querySelector(".intro-english").style.display = "none";
      document.querySelector(".intro-spanish").style.display = "block";
      english = false;
    } else if (!english) {
      toggleBtn.textContent = "ESPAÑOL";
      document.querySelector(".intro-spanish").style.display = "none";
      document.querySelector(".intro-english").style.display = "block";
      english = true;
    }
  });
}
