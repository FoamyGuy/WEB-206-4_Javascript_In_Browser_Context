/*
Game state format: List of Lists of booleans

e.g.
state = [
    [true, false, true, true],
    [true, false, false, true],
    [false, false, false, true],
    [true, true, true, false],
]

 */

const $generationBtn = document.querySelector("#generation-btn");
const $conwayTable = document.querySelector("#conway-table");

function displayGameState(boardState, $table) {
    $table.innerHTML = "";
    for (let row_idx = 0; row_idx < boardState.length; row_idx++) {
        let $curRow = document.createElement("tr");

        for (let col_idx = 0; col_idx < boardState[row_idx].length; col_idx++) {
            let $curCol = document.createElement("td");
            let $curColChk = document.createElement("input");
            $curColChk.type = "checkbox";
            if (boardState[row_idx][col_idx]) {
                $curColChk.setAttribute("checked", true);
            }
            $curCol.append($curColChk);
            $curRow.append($curCol);
        }
        $table.append($curRow);
    }
}

function randomState(size) {
    let state = []
    for (let i = 0; i < size; i++) {
        row = []
        for (let j = 0; j < size; j++) {
            row.push(Math.random() >= 0.5);
        }
        state.push(row);

    }

    return state;
}

function countLiveNeighbors(boardState, row, col) {
    let liveNeighbors = 0;

    for (let y = row - 1; y <= row + 1; y++) {
        for (let x = col - 1; x <= col + 1; x++) {
            //console.log(`checking (y:${y}, x:${x})`);
            // ignore the requested cell
            if (row === y && col === x) {
                continue;
            }
            // ignore rows above the grid
            if (y < 0) {
                continue;
            }
            // ignore cols left of the grid
            if (x < 0) {
                continue;
            }
            // ignore rows below the grid
            if (y >= state.length) {
                continue;
            }
            // ignore rows right the grid
            if (x >= boardState[0].length) {
                continue;
            }

            if (boardState[y][x] === true) {
                //console.log(`(y:${y}, x:${x}) is live!`);
                liveNeighbors++;
            }
        }
    }
    return liveNeighbors;

}

function processGeneration(curState) {
    let newState = [];
    for (let row_idx = 0; row_idx < curState.length; row_idx++) {
        let row = [];
        newState.push(row);
        for (let col_idx = 0; col_idx < curState[row_idx].length; col_idx++) {
            row.push(null);
            if (curState[row_idx][col_idx]) { // live cell
                let liveNeighbors = countLiveNeighbors(curState, row_idx, col_idx);
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    newState[row_idx][col_idx] = false;
                } else {
                    newState[row_idx][col_idx] = true;
                }
            } else { // dead cell
                if (countLiveNeighbors(curState, row_idx, col_idx) === 3) {
                    newState[row_idx][col_idx] = true;
                }
            }
        }
    }
    return newState;
}

function readStateFromTable($table) {
    let newState = []
    for (let y = 0; y < $table.rows.length; y++) {
        let newRow = [];
        newState.push(newRow);
        let row = $table.rows[y];
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        console.log(row.cells);
        for (let x = 0; x < row.cells.length; x++) {
            console.log(`${y}, ${x}`);
            let col = row.cells[x]
            //console.log(col.childNodes[0]);
            let colCheck = col.childNodes[0];

            console.log(colCheck.checked);
            newRow.push(colCheck.checked);
            //iterate through columns
            //columns would be accessed using the "col" variable assigned in the for loop
        }
        console.log(newRow);
    }
    return newState;
}

state = randomState(20);
console.log(state);
displayGameState(state, $conwayTable);


$generationBtn.addEventListener("click", function () {
    state = readStateFromTable($conwayTable);
    console.log(state);
    let newState = processGeneration(state);
    console.log(newState);
    displayGameState(newState, $conwayTable);
});

/*
setInterval(() =>{
    state = processGeneration(state);
    displayGameState(state, $conwayTable);
}, 1000);*/
