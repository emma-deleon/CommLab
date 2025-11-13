// ------------- summon button -------------
function summon() {
    console.log("Summon Button clicked");

    let summonButton = document.querySelector(".summon");
    summonButton.classList.add("clicked");

    let mainContent = document.querySelector("#main-content");

    function createRed() {
        let red = document.createElement("div");
        red.className = "red";
        red.style.width = "200px";
        red.style.height = "200px";
        red.style.backgroundColor = "rgb(206, 0, 151, .5)";
        mainContent.append(red);
        console.log("Red Div created");
    }

    function createBlue() {
        let blue = document.createElement("div");
        blue.className = "blue";
        blue.style.width = "200px";
        blue.style.height = "200px";
        blue.style.backgroundColor = "rgb(0, 23, 196, .5)"
        mainContent.append(blue);
        console.log("Blue Div created");
    }

    createRed()
    createBlue()
}


// ------------- collide button -------------

    // add animation classes
function collide() {
    let red = document.querySelector(".red");
    let blue = document.querySelector(".blue");

    red.classList.add("move-right");
    blue.classList.add("move-left");
    console.log("Movement Classes Added");
}

    // detect collision
        // (obtain positions of objects and compare)
function detectCollision() {
    let red = document.querySelector(".red");
    let blue = document.querySelector(".blue");

    function checkPositions() {

        // get latest positions
            // credits:
                // https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
                // https://medium.com/@ryan_forrester_/getting-element-position-in-javascript-a-complete-guide-d4aa2a54f14f
        const redPos = red.getBoundingClientRect();
        const bluePos = blue.getBoundingClientRect();

        let isColliding = document.querySelector("#is-colliding");

        // collision info from: https://youtu.be/_MyPLZSGS3s?si=YiVAD9iQen5Y_uRi
        if (
            //detection on x-axis
            redPos.right >= bluePos.left && 
            redPos.left <= bluePos.right

            //detection on y-axis
            // && redPos.bottom >= bluePos.top && 
            // redPos.top <= bluePos.bottom
        
        ) {
            isColliding.innerText = "True";
            isColliding.style.color = "green";
            isColliding.style.fontWeight = "900";
            console.log("colliding");

            } 

            else {
                isColliding.innerText = "False";
                isColliding.style.color = "red";
                isColliding.style.fontWeight = "900";
                console.log("NOT colliding");
            }
    // updates animation and gets position again
        // info from: https://www.w3schools.com/jsref/met_win_requestanimationframe.asp
    requestAnimationFrame(checkPositions);
    }

    // loop by calling function again
    checkPositions();


    // view positions once (comment out checkPositions() first):

    // const redPos = red.getBoundingClientRect();
    // const bluePos = blue.getBoundingClientRect();

    // console.log({
    //     r-top: redPos.top,          // Distance from viewport top
    //     r-left: redPos.left,        // Distance from viewport left
    //     r-bottom: redPos.bottom,    // Distance from viewport top to element bottom
    //     r-right: redPos.right,      // Distance from viewport left to element right
    //     r-width: redPos.width,      // Element's width including padding
    //     r-height: redPos.height     // Element's height including padding
    // });

    // console.log({
    //     b-top: bluePos.top,          // Distance from viewport top
    //     b-left: bluePos.left,        // Distance from viewport left
    //     b-bottom: bluePos.bottom,    // Distance from viewport top to element bottom
    //     b-right: bluePos.right,      // Distance from viewport left to element right
    //     b-width: bluePos.width,      // Element's width including padding
    //     b-height: bluePos.height     // Element's height including padding
    // });

    let collideButton = document.querySelector(".col-x");
    collideButton.classList.add("clicked");
}