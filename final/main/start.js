// testing 

// let test = document.querySelector("#button");

// test.addEventListener("click", changeColor);

// let count = 0;
// function changeColor() {
//     count +=1;
//     if (count%2 == 0){
//         document.body.style.backgroundColor = "cadetblue";
//     }
//     else {
//         document.body.style.backgroundColor = "black";
//     }
// }

// -------------------------------------------------------------


// drag and drop pig
// from:https://www.w3schools.com/html/html5_draganddrop.asp
function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


//moving pig
let pigPositionRange = document.querySelector("#pigPosition");
let drawPig = document.querySelector("#walkPig");

pigPositionRange.addEventListener("input", movePig);

function movePig(e){
    drawPig.style.transform = "translateX(" + (+e.target.value+110) + "px)";
    // console.log(+e.target.value+100); //convert value to number with + and then add
}

let nextArrow = document.querySelector("#next-arrow");
startBtn.addEventListener("click", function () {
  nextArrow.style.display = "flex";
  goNext();
})

let resetSlider = false;

function goNext() {
    let selectedPig = document.querySelector("#walkPig");

    function checkPositions() {
        const pigPos = selectedPig.getBoundingClientRect();
        const arrowPos = nextArrow.getBoundingClientRect();

        // check if  arrow is visible before checking collision
        if (nextArrow.style.display !== 'none') {
            
            if (
                pigPos.right >= (arrowPos.left + 25)
            ) { 

                const pig1 = selectedPig.querySelector('#pig1');
                const pig2 = selectedPig.querySelector('#pig2');
                const pig3 = selectedPig.querySelector('#pig3');
                
                // Straw Pig
                if (pig1) {
                    strawBtn.style.display = "flex";
                    divider.style.display = "flex";
                    
                    activateWindow(strawWin); 
                    newEleSound.currentTime = 0;
                    newEleSound.play();
                    
                    pig1.remove(); 
                    // nextArrow.style.display = "none"
                    // delay(nextArrow);

                    resetSlider = true;
                    pigPositionRange.addEventListener("pointerup", tryResetSlider);

                    // console.log("Straw Pig selected");

                // Stick Pig
                } else if (pig2) {
                    stickBtn.style.display = "flex";
                    divider.style.display = "flex";
                    
                    activateWindow(stickWin);
                    newEleSound.currentTime = 0;
                    newEleSound.play();
                    
                    pig2.remove();
                    // nextArrow.style.display = "none"
                    // delay(nextArrow);

                    resetSlider = true;
                    pigPositionRange.addEventListener("pointerup", tryResetSlider);
                    
                    
                    
                    // console.log("Stick Pig selected");
                    
                 // Brick Pig
                } else if (pig3) {
                    brickBtn.style.display = "flex";
                    divider.style.display = "flex";
                    
                    activateWindow(brickWin);
                    
                    pig3.remove();
                    newEleSound.currentTime = 0;
                    newEleSound.play();
                    // nextArrow.style.display = "none"
                    // delay(nextArrow);

                    resetSlider = true;
                    pigPositionRange.addEventListener("pointerup", tryResetSlider);
                    
                    
                    
                    // console.log("Brick Pig selected");
                }
            } 
        }

        // Loop by calling function again
        requestAnimationFrame(checkPositions);
    }

    // Start the loop
    checkPositions();
}

// function delay(ele) {
//     setTimeout(() => ele.style.display = "flex", 3000);
// }

function tryResetSlider() {
    if (resetSlider) {
        pigPositionRange.value = -110;
        movePig({ target: pigPositionRange });
        resetSlider = false;
    }
}
