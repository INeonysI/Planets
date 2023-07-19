export default function initDropdownMenu() {
  const nav = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburguer");

  hamburger.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.style.transform = "translateX(100vw)";
      setTimeout(() => {
        nav.classList.remove("active");
        nav.style.transform = "";
      }, 200);
    } else {
      nav.classList.add("active");
      hamburger.classList.toggle("open");
    }
  });
}
