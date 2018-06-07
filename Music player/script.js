alert('hello, I hope that you will enjoy this small project, the play, and the pause button work, the rest is mostly for deco, everything is optimized for desktop,and lap-top, so if you are on phone request desktop site on your chrome browser')

//Setting up the animation to react on the play button
const animation = document.querySelector("#roll");
const scndAnimation = document.querySelector("#scndroll")
const noEqualizer = document.querySelector('img[alt="beginner-Phase"]');
const equalizer = document.querySelector('img[alt="radio-menu"]');
const playBtn = document.querySelector("#play");

const music = new Audio();
music.src = "https://www.soundjay.com/free-music/sounds/iron-man-01.mp3";



playBtn.addEventListener("mousedown", playClick);

function playClick(){
    animation.style.animationName = "spin";
    scndAnimation.style.animationName = "spin";
    equalizer.style.display = "inline";
    noEqualizer.style.display = "none";
    
}


//Setting up the stop button

const pauseBtn = document.querySelector("#pause");

pauseBtn.addEventListener("mousedown", pauseClick);

function pauseClick(){
    animation.style.animationName = "none";
    scndAnimation.style.animationName = "none"
    equalizer.style.display = "none";
    noEqualizer.style.display = "inline";
}


