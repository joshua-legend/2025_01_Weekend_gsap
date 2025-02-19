gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 300,
  scrollTrigger: {
    trigger: ".box",
    markers: true,
    scrub: true,
    start: "top center",
    end: "bottom center",
  },
});
