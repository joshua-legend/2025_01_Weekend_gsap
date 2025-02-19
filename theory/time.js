const tl = gsap.timeline({ repeat: -1 });
tl.to(".box", {
  x: 100,
  backgroundColor: "red",
  duration: 1,
  stagger: 0.3,
  ease: "bounce.in",
});
tl.to(".box", {
  y: 100,
  backgroundColor: "yellow",
  duration: 1,
  stagger: 0.3,
  ease: "bounce.in",
});
tl.to(".box", {
  x: 0,
  backgroundColor: "orange",
  duration: 1,
  stagger: 0.3,
  ease: "bounce.in",
});
tl.to(".box", {
  y: 0,
  backgroundColor: "green",
  duration: 1,
  stagger: 0.3,
  ease: "bounce.in",
});
