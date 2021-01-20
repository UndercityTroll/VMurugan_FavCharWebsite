//  ----------- 1st Gif -----------
const intro = document.querySelector(".intro");
const videoIntro = intro.querySelector("video");
const textIntro = intro.querySelector("h1");
// ------------ 1st text page ----------
const section = document.querySelector("section");
const end = section.querySelector("h1");
// ------------ 2nd Gif ------------
const gif2 = document.querySelector(".video2");
const videogif2 = gif2.querySelector("video");
const textgif2 = gif2.querySelector("h1");


//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//-------------------------------Scenes-----------------------------------------------

//-------------1st Page--------------

//1st scene gif
let scene = new ScrollMagic.Scene({
  duration: 4250,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//1st text page
const textAnim = TweenMax.fromTo(textIntro, 1, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//-------------2nd Page--------------

//2nd scene gif
let scene3 = new ScrollMagic.Scene({
  duration: 9490,
  triggerElement: gif2,
  triggerHook: 0
})
  .setPin(gif2)
  .addTo(controller);

//2nd text page
const textAnim2 = TweenMax.fromTo(textgif2, 1, { opacity: 1 }, { opacity: 0 });

let scene4 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: gif2,
  triggerHook: 0
})
  .setTween(textAnim2)
  .addTo(controller);

// --------------- VIDEO ----------------
//------Video 1st GIF Animation
let accelamount = 0.2;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  videoIntro.currentTime = delay;
}, 83.33);

//-----Video 2nd Gif Animation
let scrollpos2 = 5.7;
let delay2 = 0;

scene3.on("update", e => {
  scrollpos2 = e.scrollPos / 1000;
});

setInterval(() => {
  delay2 += (scrollpos2 - delay2) * accelamount;
  videogif2.currentTime = delay2-5.7;
}, 100);