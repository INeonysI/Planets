export default function replaceContent(planet) {
  // Substitui as imagens
  const img = document.querySelector("[data-image=default]");
  const imgInternal = document.querySelector("[data-image=internal]");
  const imgSurface = document.querySelector("[data-image=surface]");

  img.src = planet.images.planet;
  imgInternal.src = planet.images.internal;
  imgSurface.src = planet.images.geology;

  const overview = document.querySelector("[data-overview]");
  const structure = document.querySelector("[data-structure]");
  const surface = document.querySelector("[data-surface]");

  overview.innerText = planet.overview.content;
  overview.nextElementSibling.href = planet.overview.source;
  structure.innerText = planet.structure.content;
  structure.nextElementSibling.href = planet.structure.source;
  surface.innerText = planet.geology.content;
  surface.nextElementSibling.href = planet.geology.source;

  const rotation = document.querySelector("[data-rotation]");
  const revolution = document.querySelector("[data-revolution]");
  const radius = document.querySelector("[data-radius]");
  const temperature = document.querySelector("[data-temperature]");

  rotation.innerText = planet.rotation;
  revolution.innerText = planet.revolution;
  radius.innerText = planet.radius;
  temperature.innerText = planet.temperature;
}
