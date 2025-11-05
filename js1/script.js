let myName = "Emma";
let temperature = 60;


let headline = document.querySelector("h1");

let button1 = document.querySelector(".button-1");

let button2 = document.querySelector(".button-2");

let buttonAClicked = document.querySelector(".button-a");

let buttonBClicked = document.querySelector(".button-b");

// below is a function call
// alert("Hi, " + myName + "! It's " + temperature + " degrees outside right now!");


// alert("Now it's " + temperature + " degrees outside!");

console.log("the page has loaded and the temperature is " + temperature);

function doManyThings(){
    console.log("button clicked")
    console.log("temperature is " + temperature)
    // alert("Hi, " + myName + "! It's " + temperature + " degrees outside right now!");
    temperature -= 1;
    buttonBClicked.innerText = "You just clicked another button!";
}

function greet(greeting){
    console.log("received: " + greeting);
    // alert(greeting);
}

function changeH1() {
    headline.innerText = "Tried it. Didn't Like it.";
    // button2.innerHTML = "click <a href="#">here</a>"
    headline.style.textDecoration = "underline";
    console.log("changed h1");
}

function changeB1() {
    button1.innerText = "Not a Greeting";
    console.log("button 1 changed")
    buttonAClicked.innerText = "You just clicked a button!";
}

function changeB2() {
    button2.innerText = "Also not a Greeting";
    console.log("button 2 changed")
}

