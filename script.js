let correct;
const msg = document.querySelector("#msg")

const gameScreen = document.querySelector("#game-screen");
const startScreen = document.querySelector("#start-screen");

document.querySelector("#start").addEventListener("click", start);
document.querySelector("#guess").addEventListener("click", guess);
document.querySelector("#reset").addEventListener("click", reset);

function guess() {
    const number = document.querySelector("#number").value

    if (number == correct) {
        msg.innerText = "Correct"
    }
    else if (number > correct) {
        msg.innerText = "Too high"
    }
    else [
        msg.innerText = "Too low"
    ]
}


function reset() {
    correct = Math.floor(Math.random() * 100);
    msg.innerText = "";
    number = 0;
}

function start() {
    let diff = document.querySelector("#diff").value
    correct = Math.floor(Math.random()*diff);

    gameScreen.style = "display: block;";
    startScreen.style = "display: none;";
    
}