let strawImgs = document.querySelectorAll(".strawSelect");
let stickImgs = document.querySelectorAll(".stickSelect");
let brickImgs = document.querySelectorAll(".brickSelect");

highlightImg(strawImgs);
highlightImg(stickImgs);
highlightImg(brickImgs);

function highlightImg(allImgs) {
    for (let img of allImgs) {
        img.addEventListener("mouseenter", () => {
            img.dataset.originalSrc = img.src; // save original image into "originalSrc"
            img.src = img.src.replace(".gif", "-blue.gif"); // replace current img with highlighted version
        });

        img.addEventListener("mouseleave", () => {
            img.src = img.dataset.originalSrc; // replace the current img with the original
        });
    }
}




let strawHint = document.querySelector(".straw-hint");

let strawStraw = document.querySelector(".straw-straw");
let strawStick = document.querySelector(".straw-stick");
let strawBrick = document.querySelector(".straw-brick");

let straw1 = document.querySelector(".straw-1");
let straw2 = document.querySelector(".straw-2");

let strawBtnTxt = document.querySelector(".straw-button-text");

let strawTitle = document.querySelector(".straw-title");

strawStraw.addEventListener("mouseenter", () => {
    strawHint.innerHTML = "<i>Straw seems like it would be easy to build with</i>";
    });

strawStraw.addEventListener("mouseleave", () => {
    strawHint.innerHTML = "<i>What should I use to build my house?</i>";
    });

strawStick.addEventListener("mouseenter", () => {
    strawHint.innerHTML = "<i>Sticks are too heavy</i>";
    });

strawStick.addEventListener("mouseleave", () => {
    strawHint.innerHTML = "<i>What should I use to build my house?</i>";
    });

strawBrick.addEventListener("mouseenter", () => {
    strawHint.innerHTML = "<i>Bricks are wayyy too much work</i>";
    });

strawBrick.addEventListener("mouseleave", () => {
    strawHint.innerHTML = "<i>What should I use to build my house?</i>";
    });


strawStraw.addEventListener("click", () => {
    straw1.innerHTML = "";
    straw2.style.display = "block";
    strawHint.innerHTML = "<p><span class='darker'><b>hint!</b> :</span> <span class='darker'><u>click</u></span> on the house to build it. once it is built, <span class='darker'>'<u>double click</u>'</span> to move on.</p>";
    strawTitle.innerText = "STRAW";
    strawBtnTxt.innerText = "STRAW";
    newEleSound.currentTime = 0;
    newEleSound.play();
    });



let stickHint = document.querySelector(".stick-hint");

let stickStraw = document.querySelector(".stick-straw");
let stickStick = document.querySelector(".stick-stick");
let stickBrick = document.querySelector(".stick-brick");

let stick1 = document.querySelector(".stick-1");
let stick2 = document.querySelector(".stick-2");

let stickBtnTxt = document.querySelector(".stick-button-text");

let stickTitle = document.querySelector(".stick-title");

stickStraw.addEventListener("mouseenter", () => {
    stickHint.innerHTML = "<i>Straw looks too weak</i>";
    });

stickStraw.addEventListener("mouseleave", () => {
    stickHint.innerHTML = "<i>What should I use to build my house?</i>";
    });

stickStick.addEventListener("mouseenter", () => {
    stickHint.innerHTML = "<i>Sticks are sturdy and light</i>";
    });

stickStick.addEventListener("mouseleave", () => {
    stickHint.innerHTML = "<i>What should I use to build my house?</i>";
    });

stickBrick.addEventListener("mouseenter", () => {
    stickHint.innerHTML = "<i>Bricks will take too much time</i>";
    });

stickBrick.addEventListener("mouseleave", () => {
    stickHint.innerHTML = "<i>What should I use to build my house?</i>";
    });

stickStick.addEventListener("click", () => {
    stick1.innerHTML = "";
    stick2.style.display = "block";
    stickHint.innerHTML = "<p><span class='darker'><b>hint!</b> :</span> <span class='darker'><u>click</u></span> on the house to build it. once it is built, <span class='darker'>'<u>double click</u>'</span> to move on.</p>";
    stickTitle.innerText = "STICK";
    stickBtnTxt.innerText = "STICK";
    newEleSound.currentTime = 0;
    newEleSound.play();
    });



let brickHint = document.querySelector(".brick-hint");

let brickStraw = document.querySelector(".brick-straw");
let brickStick = document.querySelector(".brick-stick");
let brickBrick = document.querySelector(".brick-brick");

let brick1 = document.querySelector(".brick-1");
let brick2 = document.querySelector(".brick-2");

let brickBtnTxt = document.querySelector(".brick-button-text");

let brickTitle = document.querySelector(".brick-title");

brickStraw.addEventListener("mouseenter", () => {
    brickHint.innerHTML = "<i>Straw will just fall over</i>";
    });

brickStraw.addEventListener("mouseleave", () => {
    brickHint.innerHTML = "<i>What should I use to build my house?</i>";
    });

brickStick.addEventListener("mouseenter", () => {
    brickHint.innerHTML = "<i>Sticks don't look strong enough</i>";
    });

brickStick.addEventListener("mouseleave", () => {
    brickHint.innerHTML = "<i>What should I use to build my house?</i>";
    });

brickBrick.addEventListener("mouseenter", () => {
    brickHint.innerHTML = "<i>Bricks are perfect</i>";
    });

brickBrick.addEventListener("mouseleave", () => {
    brickHint.innerHTML = "<i>What should I use to build my house?</i>";
    });

brickBrick.addEventListener("click", () => {
    brick1.innerHTML = "";
    brick2.style.display = "flex";
    brickHint.innerHTML = "<p><span class='darker'><b>hint!</b> :</span> <span class='darker'><u>click</u></span> on the house to build it. once it is built, <span class='darker'>'<u>double click</u>'</span> to move on.</p>";
    brickTitle.innerText = "BRICK";
    brickBtnTxt.innerText = "BRICK";
    newEleSound.currentTime = 0;
    newEleSound.play();
    });
