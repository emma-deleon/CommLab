let strawHouse = document.querySelector(".straw-house");
let stickHouse = document.querySelector(".stick-house");
let brickHouse = document.querySelector(".brick-house");

strawClickCount = 0.3;
strawHouse.addEventListener("click", () => {
    strawClickCount += 0.3;
    console.log(strawClickCount)
    strawHouse.style.opacity = strawClickCount;

    let straw3 = document.querySelector(".straw-3");
    if (strawClickCount >= 1.2) {
        strawHouse.addEventListener("dblclick", () => {
            straw2.innerHTML = "";
            straw3.style.display = "block";
            strawHint.innerHTML = "placeholder";
            newEleSound.currentTime = 0;
            newEleSound.play();
        });
    }
});



stickClickCount = 0.3;
stickHouse.addEventListener("click", () => {
    stickClickCount += 0.3;
    console.log(stickClickCount)
    stickHouse.style.opacity = stickClickCount;

    let stick3 = document.querySelector(".stick-3");
    if (stickClickCount >= 1.2) {
        stickHouse.addEventListener("dblclick", () => {
            stick2.innerHTML = "";
            stick3.style.display = "block";
            stickHint.innerHTML = "placeholder";
            newEleSound.currentTime = 0;
            newEleSound.play();
        });
    }
});

brickClickCount = 0.3;
brickHouse.addEventListener("click", () => {
    brickClickCount += 0.3;
    console.log(brickClickCount)
    brickHouse.style.opacity = brickClickCount;

    let brick3 = document.querySelector(".brick-3");
    if (brickClickCount >= 1.2) {
        brickHouse.addEventListener("dblclick", () => {
            brick2.innerHTML = "";
            brick3.style.display = "block";
            brickHint.innerHTML = "placeholder";
            newEleSound.currentTime = 0;
            newEleSound.play();
        });
    }
});

