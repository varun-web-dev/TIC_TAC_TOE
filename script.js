let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");

let turnO = true;

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Enable all boxes and clear content
function enableButtons() {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
    turnO = true;
}

// Disable all boxes
function disableButtons() {
    boxes.forEach(box => {
        box.disabled = true;
    });
}

function name(){

}
// Show winner message
function showWinner(winner) {
    msg.innerText = `Congratulations, winner is player ${winner}`;
    msgContainer.classList.remove("hide");
    disableButtons();
    name()
}


// Check if a player has won
function checkWinner() {
    for (let pattern of winningPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                
                console.log("winner", pos1);
                
                showWinner(pos1);
               
                return;
            }
        }
    }
}

// Add click event to all boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;
        box.innerText = turnO ? "X" : "O";
        box.disabled = true;
        turnO = !turnO;
        checkWinner();
    });
});

// Reset game for reset & new buttons
function resetGame() {
    enableButtons();
    msgContainer.classList.add("hide");
}

// Attach event listeners
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

