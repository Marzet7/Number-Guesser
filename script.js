let correct;
const msg = document.querySelector("#msg")
let count = 0;

let history = window.localStorage.getItem("history");
if (history === null) {
    history = [];
}
else {
    history = JSON.parse(window.localStorage.getItem("history"));
}

const gameScreen = document.querySelector("#game-screen");
const startScreen = document.querySelector("#start-screen");

document.querySelector("#start").addEventListener("click", start);
document.querySelector("#guess").addEventListener("click", guess);
document.querySelector("#reset").addEventListener("click", reset);

loadHistory();

function guess() {
    const number = document.querySelector("#number").value

    if (number == correct) {
        msg.innerText = "Correct"
        addToHistory();
        document.querySelector("#reset").style = "display: inline;";
    }
    else if (number > correct) {
        msg.innerText = "Too high"
    }
    else {
        msg.innerText = "Too low"
    }

    count++;
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

function addToHistory() {
    history.push(`${new Date().toLocaleDateString()} | ${count} attempts`);
    loadHistory()
    window.localStorage.setItem("history", JSON.stringify(history))
}


function loadHistory() {
    const tab = document.querySelector("#history-table");

    tab.innerHTML = ""

    const frag = document.createDocumentFragment()

    for (let i = 0; i < history.length; i++) {
        const tr = document.createElement("tr");
        tr.innerText = history[i];
        frag.appendChild(tr);
    }

    tab.appendChild(frag);
}