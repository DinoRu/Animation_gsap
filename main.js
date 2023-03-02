let toggleBtn = document.querySelector(".toggleBtn");
let menu = document.querySelector(".menu");

// Text animation
gsap.from(".text-inner", 2, {
  opacity: 0,
  delay: 2,
  stagger: 0.2,
});

gsap.from(".toggleBtn", 1, {
  x: -150,
  y: -150,
  delay: 3.4,
});

gsap.from(".stripe-1 img", 2, {
  y: 400,
  opacity: 0,
  stagger: 0.4,
  delay: 2,
});

gsap.from(".stripe-2 img", 2, {
  opacity: 0,
  stagger: 0.4,
  delay: 2,
});

// Menu animation
let tl = new TimelineMax({ pause: true });

tl.to(".menu-icon", 1.6, {
  opacity: 0,
  rotation: 180,
});

tl.to(
  ".close-icon",
  1.6,
  {
    opacity: 1,
    rotation: 180,
  },
  "-=0.9"
);

tl.to(
  ".menu",
  1.6,
  {
    scale: 1,
  },
  "-=1"
);

tl.from(".menu li", 1.6, {
  opacity: 0,
  x: -100,
  stagger: 0.4,
});

tl.reverse();

toggleBtn.onclick = function () {
  tl.reversed(!tl.reversed());
};
