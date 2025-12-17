const Navbar = document.querySelector(".navbar");
const ButtonXmark = document.querySelector(".fa-xmark");
const ButtonBars = document.querySelector(".fa-bars");


function ShowNavbar(link) {
  Navbar.classList.remove("active");

  link.classList.add("active");
};

ButtonBars.addEventListener("click", () => {
 ShowNavbar(Navbar);
});

ButtonXmark.addEventListener("click", () => {
 Navbar.classList.remove("active");
});