function play(audio, element) {
  if (audio.paused) {
    audio.play();
    element.dataset.playing = true;
  } else {
    audio.pause();
    element.dataset.playing = false;
  }
}

export default function initMusic() {
  const button = document.querySelector("[data-play-music] div");

  const audio = new Audio("./assets/cosmic-glow-6703.mp3");
  audio.loop = true;

  button.addEventListener("click", () => play(audio, button));
}
