import replaceContent from "./replaceContent.js";

export default function initHistory() {
  const btns = document.querySelectorAll("[data-history]");

  async function fetchData(planetName) {
    const response = await fetch("./data.json");
    const json = await response.json();

    const planet = json.filter((item) => item.name === planetName);

    replaceContent(planet[0]);
  }

  function handleClick(event) {
    event.preventDefault();

    const { href } = this;
    const regexp = /src\/(\w+)/gi;
    const planetName = regexp.exec(href);

    // Atualiza a URL
    window.history.pushState(null, null, href);

    // Faz o fetch das informações
    fetchData(planetName[1]);
  }

  window.addEventListener("popstate", () => {
    fetchData(window.location.href);
  });

  btns.forEach((btn) => btn.addEventListener("click", handleClick));
}
