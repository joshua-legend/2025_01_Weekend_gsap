const boxTween = gsap.fromTo(
  ".box",
  {
    x: 0,
    y: 0,
    backgroundColor: "red",
  },
  {
    x: 300,
    y: 300,
    backgroundColor: "yellow",
    duration: 3,
    repeat: -1,
    yoyo: true,
  }
);
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

start.addEventListener("click", () => {
  boxTween.resume();
});
stop.addEventListener("click", () => {
  boxTween.pause();
});
reset.addEventListener("click", () => {
  boxTween.restart();
});
