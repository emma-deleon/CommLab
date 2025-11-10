
// -------test changeInnerText()-------
// let firstButton = document.querySelector('#firstButton');
// changeInnerText(firstButton);

function clickedButton() {
    let b = document.createElement("button");
    b.innerText = "Start the Engine";
    b.style.marginRight = "5px";
    b.style.marginTop = "5px";
    document.body.append(b);

    b.onclick = function () { changeInnerText(b); };

    let selectBox = document.querySelector(".box");
    // colorize(selectBox);
    console.log(selectBox);

    let allBoxes = document.querySelectorAll(".box")
    console.log(allBoxes);

    allBoxes.forEach(colorize);
}

function changeInnerText(ele) {
    ele.innerText = "choo choo !";
    ele.style.color = "rgb(72, 16, 10)";
    ele.style.backgroundColor = "#d18da6ff";
}

function colorize(ele) {
    ele.style.backgroundColor = "#611430ff"
    ele.classList.toggle("circle");
}

