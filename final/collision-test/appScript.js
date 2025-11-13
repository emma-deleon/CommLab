let isVisible = document.querySelectorAll(".visibility");

function toggleVisibiliy(ele) {
    ele.style.display = "block";
}

function collideX() {
    isVisible.forEach(toggleVisibiliy);
    let startButton = document.querySelector(".startX");
    startButton.classList.add("clicked");

    let otherButton = document.querySelector(".startXY");
    otherButton.classList.add("grey");

    let textBox = document.querySelector("#collision-bool-container");
    textBox.style.width = "120px"

    let text = document.querySelector(".highlight");
    text.innerText = "Hover to Move";
    text.style.color = "blue";

    let hunter = document.querySelector(".hunter");
    let prey = document.querySelector(".prey");

    hunter.classList.add("chase");
    prey.classList.add("run");
    console.log("Movement Classes Added");

}

function collideXY() {
    isVisible.forEach(toggleVisibiliy);

    let startButton = document.querySelector(".startXY");
    startButton.classList.add("clicked");

    let otherButton = document.querySelector(".startX");
    otherButton.classList.add("grey");

    let textBox = document.querySelector("#collision-bool-container");
    textBox.style.width = "120px"

    let text = document.querySelector(".highlight");
    text.innerText = "Hover to Move";
    text.style.color = "blue";

    let hunter = document.querySelector(".hunter");
    let prey = document.querySelector(".prey");

    hunter.classList.add("zig-zag-h");
    prey.classList.add("zig-zag-p");
    console.log("Movement Classes Added");
}

    // detect collision
function detectCollision() {

    function checkPositions() {
        let hunter = document.querySelector(".hunter");
        let prey = document.querySelector(".prey");

        const hunterPos = hunter.getBoundingClientRect();
        const preyPos = prey.getBoundingClientRect();


        if (
            //detection on x-axis
            hunterPos.right > preyPos.left && 
            hunterPos.left <= preyPos.right

            //detection on y-axis
            && hunterPos.bottom >= preyPos.top && 
            hunterPos.top <= preyPos.bottom
        
        ) {
            console.log("collided");
            alert("You got caught!");
            hunter.remove();
            } 

    requestAnimationFrame(checkPositions);
    }

    checkPositions();
}