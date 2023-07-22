export default function replaceContent(planet) {
  // Substitui as imagens
  const img = document.querySelector("[data-image=default]");
  const imgInternal = document.querySelector("[data-image=internal]");
  const imgSurface = document.querySelector("[data-image=surface]");

  img.src = planet.images.planet;
  imgInternal.src = planet.images.internal;
  imgSurface.src = planet.images.geology;

  const title = document.querySelector("[data-title]");
  const overview = document.querySelector("p[data-overview]");
  const structure = document.querySelector("p[data-structure]");
  const surface = document.querySelector("p[data-surface]");

  title.innerText = planet.name;
  overview.innerText = planet.overview.content;
  overview.nextElementSibling.href = planet.overview.source;
  structure.innerText = planet.structure.content;
  structure.nextElementSibling.href = planet.structure.source;
  surface.innerText = planet.geology.content;
  console.log(surface);
  surface.nextElementSibling.href = planet.geology.source;

  const rotation = document.querySelector("[data-rotation]");
  const revolution = document.querySelector("[data-revolution]");
  const radius = document.querySelector("[data-radius]");
  const temperature = document.querySelector("[data-temperature]");

  const span = document.createElement("span");
  span.setAttribute("data-float", "");

  rotation.innerHTML = `<span data-float>${planet.rotation
    .split(/\s/g)
    .join("</span> ")}`;
  revolution.innerHTML = `<span data-float>${planet.revolution
    .split(/\s/g)
    .join("</span> ")}`;
  radius.innerHTML = `<span data-float>${planet.radius
    .split(/\s/g)
    .join("</span> ")}`;
  temperature.innerHTML = `<span data-float>${planet.temperature
    .split(/\s/g)
    .join("</span> ")}`;
}
