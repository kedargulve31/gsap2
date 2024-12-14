var t1 = gsap.timeline();
var menuicon = document.querySelector('.header i');
var closeicon = document.querySelector('.menu .links i');


t1.paua
t1.to('.menu', {
      right: 0,
      duration: 0.8,
      ease: 'power1.inOut',
});

t1.fromTo('.menu .links a', {
      x: 100,
      opacity: 0,
}, {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      ease: 'power1.inOut',
});

t1.fromTo('.menu .links button', {
      y: 100,
      opacity: 0,
}, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power1.inOut',
});

t1.fromTo('.menu .links i', {
      scale: 0.5,
      opacity: 0,
}, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'power1.inOut',
});

menuicon.addEventListener('click', () => {
      t1.play();
});

closeicon.addEventListener('click', () => {
      t1.reverse();
});
