import replaceContent from "./replaceContent.js";

export default function initHistory() {
  const btns = document.querySelector("[data-history]");

  async function fetchData(planetName) {
    const response = await fetch("../../data.json");
    const json = await response.json();

    const planet = json.filter((item) => item.name === planetName);

    replaceContent(planet);
  }

  function handleClick() {
    const { href } = this;

    // Atualiza a URL
    window.history.pushState(null, null, href);

    // Faz o fetch das informações
    fetchData(href);
  }

  window.addEventListener("popstate", () => {
    fetchData(window.location.href);
  });

  btns.forEach((btn) => btn.addEventListener("click", handleClick));
}
