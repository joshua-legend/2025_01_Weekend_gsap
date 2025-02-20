import { animation } from "./animation.js";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".motto",
  { ...animation.fadeInStart, ...animation.moveToUpStart },
  {
    ...animation.fadeInEnd,
    ...animation.moveToUpEnd,
    duration: 1,
    scrollTrigger: {
      trigger: ".second",
      start: "30% center",
      end: "bottom center",
      markers: true,
      pin: true,
    },
  }
);
