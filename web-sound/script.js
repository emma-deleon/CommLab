let mySound = document.querySelector("#mySound");

let playButton = document.querySelector("#playButton");
let pauseButton = document.querySelector("#pauseButton");
let speedButton = document.querySelector("#speedUp");
let slowButton = document.querySelector("#slowDown");

playButton.addEventListener("click", function() {
    mySound.loop = true;
    mySound.play()
})

pauseButton.addEventListener("click", function() {
    mySound.pause()
})

count = 1;
speedButton.addEventListener("click", function() {
    count *= 1.1;
    console.log(count);
    mySound.playbackRate = count;
})

slowButton.addEventListener("click", function() {
    count /= 1.1;
    console.log(count);
    mySound.playbackRate = count;
})
