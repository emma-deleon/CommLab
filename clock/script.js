
const starContainer = document.querySelector("#star-container");
const containerWidth = starContainer.clientWidth;
const containerHeight = starContainer.clientHeight;

console.log("width: " + containerWidth);
console.log("height: " + containerHeight);


// audio
let secondSound = document.querySelector("#secondBlip");
let minuteSound = document.querySelector("#minuteWoosh");
let hourSound = document.querySelector("#hourUp");
let bgAudio = document.querySelector("#background-music");
let bgAudioButton = document.querySelector("#bg-audio-button");
let sfxButton = document.querySelector("#sound-effects-button");

// moon positions
let pos12 = document.querySelector(".pos12");
let pos1 = document.querySelector(".pos1");
let pos2 = document.querySelector(".pos2");
let pos3 = document.querySelector(".pos3");
let pos4 = document.querySelector(".pos4");
let pos5 = document.querySelector(".pos5");
let pos6 = document.querySelector(".pos6");
let pos7 = document.querySelector(".pos7");
let pos8 = document.querySelector(".pos8");
let pos9 = document.querySelector(".pos9");
let pos10 = document.querySelector(".pos10");
let pos11 = document.querySelector(".pos11");

// for minute movement
const centerX = containerWidth / 2;
const centerY = containerHeight / 2;
const rocketSize = 45; // take into account img size when finding center of circle motion
const pathRadius = 140;

const minutesRocket = document.querySelector("#minutes-rocket");




// audio buttions 
let buttonPressCount = 0;
bgAudio.loop = true;

secondSound.volume = .2; //.2
minuteSound.volume = .4; // .4
hourSound.volume = .4; // .4

bgAudioButton.addEventListener("click", function () {
    buttonPressCount += 1;
    if (buttonPressCount == 1) {
        bgAudio.play();
        bgAudio.volume = 1;
    }

    if (buttonPressCount % 2 == 0) {
        bgAudio.volume = 0;
    }
    else {
        bgAudio.volume = 1;
    }
})

sfxPressCount = 0

sfxButton.addEventListener("click", function () {
    sfxPressCount += 1;

    if (sfxPressCount % 2 == 0) {
        secondSound.volume = 0; 
        minuteSound.volume = 0; 
        hourSound.volume = 0;
    }
    else {
        secondSound.volume = .2; 
        minuteSound.volume = .4; 
        hourSound.volume = .4; 
    }
})






let currentStarCount = 0;

function getTheTime() {

    let now = new Date(); // return the current date + time

    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59


    // console.log(h, m, s);


    // -------------- hours --------------
    toggleHourVisibility(h);

    function toggleHourVisibility(h) {

        // all moons are placed with display:none

        let elementToShow;

        if (h === 0 || h === 12) {
            elementToShow = pos12;
        }
        else if (h === 1 || h === 13) {
            elementToShow = pos1;
        }
        else if (h === 2 || h === 14) {
            elementToShow = pos2;
        }
        else if (h === 3 || h === 15) {
            elementToShow = pos3;
        }
        else if (h === 4 || h === 16) {
            elementToShow = pos4;
        }
        else if (h === 5 || h === 17) {
            elementToShow = pos5;
        }
        else if (h === 6 || h === 18) {
            elementToShow = pos6;
        }
        else if (h === 7 || h === 19) {
            elementToShow = pos7;
        }
        else if (h === 8 || h === 20) {
            elementToShow = pos8;
        }
        else if (h === 9 || h === 21) {
            elementToShow = pos9;
        }
        else if (h === 10 || h === 22) {
            elementToShow = pos10;
        }
        else if (h === 11 || h === 23) {
            elementToShow = pos11;
        }

        hideElement(pos1);
        hideElement(pos2);
        hideElement(pos3);
        hideElement(pos4);
        hideElement(pos5);
        hideElement(pos6);
        hideElement(pos7);
        hideElement(pos8);
        hideElement(pos9);
        hideElement(pos10);
        hideElement(pos11);
        hideElement(pos12);

        showElement(elementToShow);
    }

    function showElement(ele) {
        ele.style.display = "block";
    }

    function hideElement(ele) {
        ele.style.display = "none";
    }

    if (s == 0 && m == 0) {
        hourSound.play();
    }

    // -----------------------------------



    // -------------- minutes --------------
    moveMinutes();
    function moveMinutes() {
        const degrees = (s * 6) - 90; // 1 min = 6 deg (360/60); -90 to start at 0/12 position
        const radians = degrees * (Math.PI / 180);

        const x = centerX + pathRadius * Math.cos(radians);
        const y = centerY + pathRadius * Math.sin(radians);

        // off-center oval instead of perfect circle
        minutesRocket.style.left = (x - rocketSize / 2.7) + "px"; // -rocketSize to center dot
        minutesRocket.style.top = (y - rocketSize / 2.) + "px";
        minutesRocket.style.transform = "rotate(" + degrees + "deg)";
        // minuteSound.play();

        if (s == 0) {
            minuteSound.play();
        }

    }


    // -------------------------------------




    // -------------- seconds --------------
    if (s == 0) {
        starContainer.innerHTML = '';
        currentStarCount = 0;
    }
    else if (s > currentStarCount) {
        const starsToAdd = s - currentStarCount;
        currentStarCount = s;

        repeat(starsToAdd, function () {
            chooseStar = Math.floor(Math.random() * 6) + 1;
            let img = document.createElement('img');

            img.style.width = "32px";
            img.style.position = "absolute";
            img.style.opacity = Math.random() + .7;

            let maxTop = containerHeight - 32;
            let maxLeft = containerWidth - 32;


            let randTop = Math.random() * maxTop;
            let randLeft = Math.random() * maxLeft;

            img.style.top = randTop + "px";
            img.style.left = randLeft + "px";

            if (chooseStar <= 3) {
                img.src = "imgs/star-" + chooseStar + "-loop.gif";
            } else {
                img.src = "imgs/static-star-" + (chooseStar - 3) + ".png";
            }
            starContainer.append(img);
            secondSound.play()
        })
    }
    // -------------------------------------

}

setInterval(getTheTime, 1000);


function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
