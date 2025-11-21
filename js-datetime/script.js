let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");

let mySound = document.querySelector("#mySound");

function getTheTime(){
    let now = new Date(); // return the current date + time

    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59


    console.log( h, m, s );


    // SECONDS
    // clear divs in seconds
    secondsContainer.innerHTML = "";

    repeat(s, function() {
      let sdiv = document.createElement("div");
      secondsContainer.append(sdiv);
    })

    minutesContainer.innerHTML = "";

    repeat(m, function() {
      let mdiv = document.createElement("div");
      minutesContainer.append(mdiv);
    })

    hoursContainer.innerHTML = "";

    repeat(h, function() {
      let hdiv = document.createElement("div");
      hoursContainer.append(hdiv);
    })

    mySound.play()
    
}

setInterval(getTheTime, 1000);

// getTheTime();









// Leon's Helper function:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}