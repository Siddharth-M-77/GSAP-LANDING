var tl = gsap.timeline();

tl.from("nav h1", {
  y: -70,
  opacity: 0,
  delay: 1,
});
tl.from("nav .nav-right h4", {
  y: -70,
  opacity: 0,
  stagger: 0.2,
});
tl.from("section .left h1", {
  x: -200,
  opacity: 0,
  stagger: 0.2,
});
tl.from("section .left p", {
  x: -200,
  opacity: 0,
});
tl.from("section .left button", {
  scale: 0,
  opacity: 0,
});
tl.from("section .right img", {
  scale: 0,
  opacity: 0,
});
