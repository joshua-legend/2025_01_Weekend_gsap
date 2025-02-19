gsap.registerPlugin(ScrollTrigger);

const mottoTL = gsap.timeline();
mottoTL.fromTo(
  ".motto > h2 > div",
  { opacity: 0, y: 10 },
  { opacity: 1, y: 0, duration: 1, delay: 1, stagger: 0.3 }
);

const storyTL = gsap.timeline();
storyTL.fromTo(
  ".story > h6",
  { opacity: 0, y: 10 },
  { opacity: 1, y: 0, duration: 1, delay: 1 }
);
storyTL.to(".story > h6", {
  duration: 3,
  text: "The spread of sharing culture and the realization",
  repeat: 1,
  yoyo: true,
});
storyTL.fromTo(
  ".story > p",
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
);

const imageTL = gsap.timeline();

imageTL.fromTo(
  ".second > figure > img",
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
);
