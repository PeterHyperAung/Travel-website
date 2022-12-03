document.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  const point = 630;
  if (window.scrollY > point) {
    nav.classList.remove("navbar-backdrop");
    nav.classList.remove("navbar-dark");
    nav.classList.add("bg-white");
    nav.classList.add("navbar-white");
  }
  if (window.scrollY <= point) {
    nav.classList.remove("bg-white");
    nav.classList.remove("navbar-white");
    nav.classList.add("navbar-backdrop");
    nav.classList.add("navbar-dark");
  }
});
