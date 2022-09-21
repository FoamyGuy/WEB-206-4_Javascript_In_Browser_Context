const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

const $div = document.getElementById("mountains");
console.log($div);
//$div.innerText = "Hello JS div"

const $table = document.createElement("table");

let firstMountain = MOUNTAINS[0];
let headerTitles = Object.getOwnPropertyNames(firstMountain);

//console.log(headerTitles);

let $headerRow = document.createElement("tr");


for(let i = 0; i < headerTitles.length; i++){
    console.log(headerTitles[i]);
    let $curHeader = document.createElement("th");
    $curHeader.innerText = headerTitles[i];
    $headerRow.append($curHeader);
}
console.log($headerRow);
$table.append($headerRow);


//for(let mountain of MOUNTAINS){
for(let i = 0; i < MOUNTAINS.length; i++){
    let $curRow = document.createElement("tr");
    let curMountain = MOUNTAINS[i];
    // for (let j of Object.getOwnPropertyNames(mountain)){
    for(let j = 0; j < headerTitles.length; j++){
        let $curTD = document.createElement("td");
        $curTD.innerText = curMountain[headerTitles[j]]
        if (typeof curMountain[headerTitles[j]] === "number"){
            $curTD.classList.add("right-align");
        }

        //$curTD.innerText = curMountain[j]
        $curRow.append($curTD);
    }
    $table.append($curRow);
}

//$div.append($headerRow);
//$table.innerHTML = $table.innerHTML + $headerRow.outerHTML

$div.append($table);