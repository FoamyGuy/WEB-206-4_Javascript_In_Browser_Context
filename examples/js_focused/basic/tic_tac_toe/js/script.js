let currentTurn = "X";

const $topLeft = document.querySelector("#top-left");
const $topCenter = document.querySelector("#top-center");
const $topRight = document.querySelector("#top-right");

const $middleLeft = document.querySelector("#middle-left");
const $middleCenter = document.querySelector("#middle-center");
const $middleRight = document.querySelector("#middle-right");

const $bottomLeft = document.querySelector("#bottom-left");
const $bottomCenter = document.querySelector("#bottom-center");
const $bottomRight = document.querySelector("#bottom-right");

function checkForWinner() {
    // check rows
    if ($topLeft.innerText !== "" &
        $topLeft.innerText === $topCenter.innerText && $topLeft.innerText === $topRight.innerText) {
        $topLeft.classList.add("winner");
        $topCenter.classList.add("winner");
        $topRight.classList.add("winner");
        return $topLeft.innerText;
    }
    if ($middleLeft.innerText !== "" &
        $middleLeft.innerText === $middleCenter.innerText && $middleLeft.innerText === $middleRight.innerText) {
        $middleLeft.classList.add("winner");
        $middleCenter.classList.add("winner");
        $middleRight.classList.add("winner");
        return $middleLeft.innerText;
    }
    if ($bottomLeft.innerText !== "" &
        $bottomLeft.innerText === $bottomCenter.innerText && $bottomLeft.innerText === $bottomRight.innerText) {
        $bottomLeft.classList.add("winner");
        $bottomCenter.classList.add("winner");
        $bottomRight.classList.add("winner");
        return $bottomLeft.innerText;
    }

    // check columns
    if ($topLeft.innerText !== "" &
        $topLeft.innerText === $middleLeft.innerText && $topLeft.innerText === $bottomLeft.innerText) {
        $topLeft.classList.add("winner");
        $middleLeft.classList.add("winner");
        $bottomLeft.classList.add("winner");
        return $topLeft.innerText;
    }
    if ($topCenter.innerText !== "" &
        $topCenter.innerText === $middleCenter.innerText && $topCenter.innerText === $bottomCenter.innerText) {
        $topCenter.classList.add("winner");
        $middleCenter.classList.add("winner");
        $bottomCenter.classList.add("winner");
        return $topCenter.innerText;
    }
    if ($topRight.innerText !== "" &
        $topRight.innerText === $middleRight.innerText && $topRight.innerText === $bottomRight.innerText) {
        $topRight.classList.add("winner");
        $middleRight.classList.add("winner");
        $bottomRight.classList.add("winner");
        return $topRight.innerText;
    }

    // check diagonals

    if ($topLeft.innerText !== "" &
        $topLeft.innerText === $middleCenter.innerText && $topLeft.innerText === $bottomRight.innerText) {
        $topLeft.classList.add("winner");
        $middleCenter.classList.add("winner");
        $bottomRight.classList.add("winner");
        return $topLeft.innerText;

    }
    if ($topRight.innerText !== "" &
        $topRight.innerText === $middleCenter.innerText && $topRight.innerText === $bottomLeft.innerText) {
        $topRight.classList.add("winner");
        $middleCenter.classList.add("winner");
        $bottomLeft.classList.add("winner");
        return $topRight.innerText;

    }
    return null
}

document.querySelectorAll(".space").forEach(function (element) {
    element.addEventListener("click", function (event) {
        console.log("clicked");
        this.innerText = currentTurn;
        currentTurn = currentTurn === "X" ? "O" : "X";

        let winner = checkForWinner()
        if (winner != null) {
            console.log(`Winner is ${winner}`);
        }
    });
});