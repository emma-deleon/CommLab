
let isVisible = document.querySelectorAll(".visibility");

function toggleVisibiliy(ele) {
    ele.style.display = "block";
}

function collideX() {
    // make elements visible
    isVisible.forEach(toggleVisibiliy);

    // active button state + grey out other button
    let startButton = document.querySelector(".startX");
    startButton.classList.add("clicked");

    let otherButton = document.querySelector(".startXY");
    otherButton.classList.add("grey");

    // change size + style of instruction text box
    let textBox = document.querySelector("#collision-bool-container");
    textBox.style.width = "120px"

    let text = document.querySelector(".highlight");
    text.innerText = "Hover to Move";
    text.style.color = "blue";

    // add movement classes to objects
    let hunter = document.querySelector(".hunter");
    let prey = document.querySelector(".prey");

    hunter.classList.add("chase");
    prey.classList.add("run");
    console.log("Movement Classes Added");

}

function collideXY() {
    // make elements visible
    isVisible.forEach(toggleVisibiliy);

    // active button state + grey out other button
    let startButton = document.querySelector(".startXY");
    startButton.classList.add("clicked");

    let otherButton = document.querySelector(".startX");
    otherButton.classList.add("grey");

    // change size + style of instruction text box
    let textBox = document.querySelector("#collision-bool-container");
    textBox.style.width = "120px"

    let text = document.querySelector(".highlight");
    text.innerText = "Hover to Move";
    text.style.color = "blue";

    // add movement classes to objects
    let hunter = document.querySelector(".hunter");
    let prey = document.querySelector(".prey");

    hunter.classList.add("zig-zag-h");
    prey.classList.add("zig-zag-p");
    console.log("Movement Classes Added");
}

// detect collision loop
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