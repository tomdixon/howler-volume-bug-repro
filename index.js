const sound = new Howl({
  src: ['sample.mp3'],
  autoplay: false,
  loop: false,
  volume: 1,
  html5: true,
  preload: false,
});

let id = 0;

document.getElementById("play").addEventListener("click", () => {
  id = sound.play();
  sound.volume(0.05, id);
})
document.getElementById("stop").addEventListener("click", () => {
  sound.stop(id);
})