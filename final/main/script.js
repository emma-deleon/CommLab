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

// page 2: 
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
    drawPig.style.transform = "translateX(" + e.target.value + "px)";
}

// detect collision
goNext();
function goNext() {
    let selectedPig = document.querySelector("#walkPig");
    let arrow = document.querySelector("#next-arrow");

    function checkPositions() {
        const pigPos = selectedPig.getBoundingClientRect();
        const arrowPos = arrow.getBoundingClientRect();

        if (
            pigPos.right >= arrowPos.left && 
            pigPos.left <= arrowPos.right

        
        ) {
            // console.log("colliding");
            arrow.remove();
            window.location.href = 'page-2.html';
            pigPositionRange.reset();

            } 

            else {
                // console.log("NOT colliding");
            }
    requestAnimationFrame(checkPositions);
    }

    // loop by calling function again
    checkPositions();
}
