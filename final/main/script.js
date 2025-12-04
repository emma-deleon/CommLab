// sound effects 
// var clickSound = document.querySelector("#click");
var mDownSound = document.querySelector("#mDown");
var mUpSound = document.querySelector("#mUp");
var errorSound = document.querySelector("#error");
var newEleSound = document.querySelector("#newEle");
var bgm = document.querySelector("#bgm");

let errorItem = document.querySelectorAll(".error");

// clickSound.volume = .3;
mDownSound.volume = .1;
mUpSound.volume = .3;
newEleSound.volume = .55;
errorSound.volume = .25;
bgm.volume = 0;


document.body.addEventListener("pointerdown", function() {
    mDownSound.currentTime = 0;
    mDownSound.play();
});

document.body.addEventListener("pointerup" , function() {
    mUpSound.currentTime = 0;
    mUpSound.play();
});

errorItem.forEach(e => {
    e.addEventListener("pointerdown", function() {
        errorSound.currentTime = 0;
        errorSound.play();
    })
});


// volume controls
let volumeIcon = document.querySelector(".volumeIcon");

volumeIcon.addEventListener("click", adjustVolume);


let count = 0;
function adjustVolume() {
    count +=1;
    if (count == 1) {
        bgm.play();
        bgm.loop = true;
    }

    if (count%4 == 0){
        document.querySelector(".volumeIcon").src = "../imgs/muted.svg"
        bgm.volume = 0;
        bgm.pause();
    } else if (count%4 == 1) {
        document.querySelector(".volumeIcon").src = "../imgs/vol-1.svg"
        bgm.volume = .1;
        bgm.play();
    } else if (count%4 == 2) {
        document.querySelector(".volumeIcon").src = "../imgs/vol-2.svg"
        bgm.volume = .2;
    } else if (count%4 == 3) {
        document.querySelector(".volumeIcon").src = "../imgs/vol-3.svg"
        bgm.volume = .3;
    }
}


let desktop = document.querySelector("#desktop");

let zCounter = 4;

function activateWindow(win) {
    win.style.zIndex = ++zCounter;

    // Remove active from all windows
    document.querySelectorAll('.window').forEach(ele => {
        ele.classList.remove("active");
    });

    // Make this one active + visible
    win.classList.add("active");
    win.style.display = "flex";
}

desktop.addEventListener("click", function (tab) {
    const clickedElement = tab.target.closest(".window");
    if (!clickedElement) return;
    activateWindow(clickedElement);
});

let startBtn = document.querySelector(".start-button");
let strawBtn = document.querySelector("#straw-button");
let stickBtn = document.querySelector("#stick-button");
let brickBtn = document.querySelector("#brick-button");
let divider = document.querySelector("#divider");

let startWin = document.querySelector("#one");
let strawWin = document.querySelector("#two");
let stickWin = document.querySelector("#three");
let brickWin = document.querySelector("#four");

startBtn.addEventListener("click", () => activateWindow(startWin));
strawBtn.addEventListener("click", () => activateWindow(strawWin));
stickBtn.addEventListener("click", () => activateWindow(stickWin));
brickBtn.addEventListener("click", () => activateWindow(brickWin));



let currentDate = document.querySelector(".date");
let currentTime = document.querySelector(".time");

function getTheTime() {
    let now = new Date();

    let date = now.toLocaleString('en-US', {
        weekday: 'short',   
        month: 'short',     
        day: '2-digit',     
    }).replace(/,/g, '').trim();

    let time = now.toLocaleString('en-US', {
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false
    });

    currentDate.innerText = date;
    currentTime.innerText = time;
}

setInterval(getTheTime, 100);
