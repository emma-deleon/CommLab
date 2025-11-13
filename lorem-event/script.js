
// for one span
// let s = document.querySelector("span");
// console.log(s);

// s.addEventListener("mouseover", move);

function move(e) {
    console.log(e.target);
    let ele = e.target;
    ele.style.color = "rgba(165, 10, 10, 1)";
    console.log("mouse over");

    let randX = -50 + Math.random()*100;
    let randY = -50 + Math.random()*100;

    ele.style.transform = "translate(" + randX + "px, " + randY + "px)";
}



// for all spans
let allS = document.querySelectorAll("span");

allS.forEach(function (ele) {ele.addEventListener("mouseover", move);});




