window.addEventListener("scroll", () => {
  let lastScrollY = window.scrollY;
  const header = document.getElementById("mainHeader");
  if (window.scrollY > lastScrollY) {
    // user is scrolling down
    header.style.transform = "translateY(-100%)";
  } else {
    // user is scrolling up
    header.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});
