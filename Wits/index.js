import { endOpacity, endScale, startOpacity, startScale } from "./animation.js";

gsap.registerPlugin(ScrollTrigger);

const jumbotronImage = document.querySelector(".jumbotron > figure");
const it = document.querySelector("#IT");
const auto = document.querySelector("#Auto");
const home = document.querySelector("#Home");

const tl = gsap.timeline();
tl.fromTo(".motto > h2", { y: 200 }, { y: 0, duration: 1 });

[(it, auto, home)].forEach((v, i) => {
  v.addEventListener("mouseenter", () => {
    jumbotronImage.style.backgroundImage = `url("./images/main_visual_0${
      i + 1
    }.jpg")`;
    gsap
      .timeline()
      .fromTo(jumbotronImage, startOpacity, endOpacity)
      .fromTo(jumbotronImage, startScale, endScale, "<");
  });
});
const logoH6 = document.querySelector(".vision > aside > .logo > h6");

const visionTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision",
    markers: true,
    start: "top top",
  },
});

visionTimeLine.fromTo(
  logoH6,
  {
    x: -350,
  },
  {
    x: 0,
    duration: 1,
  }
);
visionTimeLine.fromTo(
  ".vision > aside > .logo > h2 > div",
  {
    x: -350,
  },
  {
    x: 0,
    duration: 1,
    stagger: 0.5,
  },
  "-=0.5"
);

visionTimeLine.fromTo(
  ".card > figure",
  {
    y: -1000,
  },
  {
    y: 0,
    duration: 1,
    stagger: 0.5,
  }
);
visionTimeLine.fromTo(
  ".card > div",
  {
    y: -1000,
  },
  {
    y: 0,
    duration: 1,
    stagger: 0.5,
  },
  "<"
);

const card = document.querySelector(".card > figure");

card.addEventListener("mouseover", () => {
  gsap.to(".card > figure", { scale: 1.1, duration: 0.5 });
});
card.addEventListener("mouseout", () => {
  gsap.to(".card > figure", { scale: 1, duration: 0.5 });
});
