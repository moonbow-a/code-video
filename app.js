const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();


//Scenes
let scene = new ScrollMagic.Scene({
    duration: 16000, // спочатку визначити скільки триває відео, якщо 9 секунд = 9000 
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//Text Anomation

const textAnim = gsap.fromTo(text, 3, {opacity: 1}, {opacity:0});

let scene2 = new ScrollMagic.Scene({

    duration: 8000,
    triggerElement: intro,
    triggerHook: 0

})
.setTween(textAnim)
.addTo(controller);

//Video Animation

let accelamount = 0.1; //час пройденного відео після зуринки scroll
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;  
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
}, 43.3 // визначаємо скільки потрібно для smooth вигляду
); 

