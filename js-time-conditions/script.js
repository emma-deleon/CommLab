let myText = document.querySelector("#myText");
let output = document.querySelector("#output");



// challenge 1: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:

function outputText(e) {

    // print output
    let text = e.target.value;
    output.innerText = text;

    // spin the textbox
    let eChanged = e.target;
    // spin(eChanged);

    if (text == "spin") {
        spin(eChanged);
        e.target.value = "";
        output.innerText = "";
    }
}

myText.addEventListener("input", outputText);




// function to spin an element 
function spin(element){
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate(360deg)"
}



// -------- PART 2
let myButton = document.querySelector("#myButton");

let count = 0;

myButton.addEventListener("click", function(e) {
    count += 1;
    console.log(count);

    if(count >= 5) {
        document.body.style.background = "linear-gradient(180deg,rgba(65, 155, 191, 1) 7%, rgba(98, 191, 137, 1) 52%, rgba(197, 217, 118, 1) 73%, rgba(242, 229, 109, 1) 89%)";
        supersize(e.target);

    
        function removeButton(){
            e.target.remove();
            clearInterval(messageInterval)
            messageBoard.innerHTML = "";
        }

        setTimeout(removeButton, 500);

        // e.target.remove();

    }
})






let messageBoard = document.querySelector("#messageBoard");


let messageInterval = setInterval(function() {
    clicksLeft = 5 - count;
    addMessage("click button " + clicksLeft + " more times");
}, 300)






// function to add text to the div with id "messageboard"
function addMessage(messagetext){
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element){
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

