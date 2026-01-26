let correct = Math.floor(Math.random() * 100);
const msg = document.querySelector("#msg")

document.querySelector("#guess").addEventListener("click", guess)
document.querySelector("#reset").addEventListener("click", reset)

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
    msg.innerText = ""
    number = 0
}