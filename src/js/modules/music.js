function play(audio) {
  console.log(this);
  if (audio.paused) {
    audio.play();
    this.dataset.playing = true;
  } else {
    audio.pause();
    this.dataset.playing = false;
  }
}

export default function initMusic() {
  const button = document.querySelector("[data-play-music] div");

  const audio = new Audio("./assets/cosmic-glow-6703.mp3");
  audio.loop = true;

  button.addEventListener("click", () => play.call(button, audio));
}
