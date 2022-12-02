document.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 700) {
    nav.classList.remove("navbar-backdrop");
    nav.classList.remove("navbar-dark");
    nav.classList.add("bg-white");
    nav.classList.add("navbar-white");
  }
  if (window.scrollY <= 700) {
    nav.classList.remove("bg-white");
    nav.classList.remove("navbar-white");
    nav.classList.add("navbar-backdrop");
    nav.classList.add("navbar-dark");
  }
});
