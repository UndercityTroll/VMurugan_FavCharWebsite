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
// ------------ 1st Button Page ------------
const ButtonPage1 = document.querySelector(".Portfolio");
// ------------ 2nd Button Page ------------
const ButtonPage2 = document.querySelector(".Page2");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();
const metacontroller = new ScrollMagic.Controller(); 

//-------------------------------Scenes-----------------------------------------------
// 
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

//-------------Button Page 1--------------
//button page 1 wait timer
let sceneButtonPage = new ScrollMagic.Scene({
  duration: 300,
  triggerElement: ButtonPage1,
  triggerHook: 0
})
  .setPin(ButtonPage1)
  .addTo(controller);

//-------------Button Page 2--------------
//button page 2 wait timer
let sceneButtonPagev2 = new ScrollMagic.Scene({
  duration: 300,
  triggerElement: ButtonPage2,
  triggerHook: 0
})
  .setPin(ButtonPage2)
  .addTo(controller);

//-------------2nd Page--------------

//2nd scene gif
let scene3 = new ScrollMagic.Scene({
  duration: 2500,
  triggerElement: gif2,
  triggerHook: 0
})
  .setPin(gif2)
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
let offset = 2;

scene3.on("update", e => {
  scrollpos2 = e.scrollPos / 1000;
});

setInterval(() => {
  delay2 += (scrollpos2 - delay2 - offset) * accelamount;
  videogif2.currentTime = delay2-5.7;
}, 100);