let myButton = document.querySelector("#myButton");
let reset = document.querySelector("#reset");
let myRange = document.querySelector("#myRange");
let myOutput = document.querySelector("#myOutput");

function buttonClicked(eventInfo) {
    document.body.style.backgroundColor = "rgb(156, 156, 233)";
    eventInfo.target.remove();

}

myButton.addEventListener("click", buttonClicked);

// calling anonymous function
// myButton.addEventListener("click", function() {
//     document.body.style.backgroundColor = "rgb(156, 156, 233)";
// });

// reset.addEventListener("click", function() {
//     document.body.style.backgroundColor = "rgb(238, 185, 185)";
// });

function inputChanged(eventInfo) {
    console.log("Input Changed! :", eventInfo.target.value);
    myOutput.innerText = eventInfo.target.value;
}

myRange.addEventListener("input", inputChanged); // any change
// myRange.addEventListener("change", inputChanged); // on mouse release