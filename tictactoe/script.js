const boxs = document.querySelectorAll(".box")
const statusTxt = document.getElementById("status")
const btn = document.getElementById("restart")
let x = "<img  src='./images/x.png'>"
let o = "<img  src='./images/o.jpeg'>"
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = x;
let player = "X";
let running = false;
init();

function init() {
    boxs.forEach(box => box.addEventListener("click", boxClick));
    btn.addEventListener("click", restart);
    statusTxt.textContent = `${player} Your Turn..`
    running = true

}
function boxClick() {
    const index = this.dataset.index;
    // console.log(index);
    if (options[index] != "" || !running) {
        return;
    }
    updateBox(this, index)
   return checkWinner();
}
function updateBox(box, index) {
    options[index] = player
    // console.log(box);
    box.innerHTML = currentPlayer;
}
function changePlayer() {
    player = (player == "X") ? "O" : "X";
    currentPlayer = (currentPlayer == x) ? o : x;
    statusTxt.textContent = `${player} Your Turn..`
}
function checkWinner() {
    let iswon = false;
    for (let i = 0; i < win.length; i++) {
        const condition = win[i]
        const box1 = options[condition[0]];
        const box2 = options[condition[1]];
        const box3 = options[condition[2]];
        if (box1 == "" || box2 == "" || box3 == "") {
            continue;
        }
        // console.log(box1);
        // console.log(box2);
        // console.log(box3);
        if (box1 == box2 && box2 == box3) {
            iswon = true;
            boxs[condition[0]];
            boxs[condition[1]];
            boxs[condition[2]];
        }
    }
    // console.log(iswon);
    if (iswon) {
        statusTxt.textContent = `${player} won...`;
        running = false
    } else if (!options.includes("")) {
        statusTxt.textContent = `Game Tie..!`
        running = false
    } else {
        changePlayer()
    }

}
function restart() {
    options = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = x;
    player = "X";
    running = true;
    statusTxt.textContent = `${player} Your turn`;

    boxs.forEach(box => {
        box.innerHTML = "";
        box.classList.remove("win")
    })
}