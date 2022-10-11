/*
let simpleLevel = new Level(simpleLevelPlan);
console.log(`${simpleLevel.width} by ${simpleLevel.height}`);

console.log(simpleLevel);

for(let i = 0; i < simpleLevel.rows.length; i++){
    let curRow = simpleLevel.rows[i];

    let rowString = ""
    curRow.forEach(function(cell){
        //console.log(cell);
        rowString += cell + " "
    });
    console.log(rowString);
}
*/

let simpleLevel = new Level(simpleLevelPlan);
runGame(GAME_LEVELS, DOMDisplay);


//runLevel(simpleLevel, DOMDisplay)

//let display = new DOMDisplay(document.body, simpleLevel);
//display.syncState(State.start(simpleLevel));