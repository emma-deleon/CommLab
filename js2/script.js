
// defining variables

let container = document.querySelector("#container");

let mainButton = document.querySelector(".main-button");

    // create element in js space
let headline = document.createElement("h5");
headline.innerText = "Welcome to my page !"; // creating h5 content

        // put in body
    // document.body.append(headline);

        // put in container
    // container.append(headline);



// defining fuctions
function moveText() {
    container.append(headline);

    document.querySelector(".notWanted").remove();
}

function removeText() {
    document.body.append(headline);
}

function moveBox(container) {
    container.classList.toggle("move");

    // random between 0-0.99
    let r1 = Math.random();

    // random between 0-99.99
    let r2 = Math.random() * 100;

    // custom min-max (10-19.99)
    let r3 = 10 + Math.random()*10

    // round r3 down
    let r4 = Math.floor(r3);

    console.log(r1, r2, r3, r4);

    document.querySelector(".notWanted").style.fontSize = r2+"px";
}
