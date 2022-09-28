const count = 30;
let nextToMove = 0;
let trailItems = [];

for (let i = 0; i < count; i++) {
    let $newTrailItem = document.createElement("div");
    $newTrailItem.classList.add("trail-item");
    let curColor = parseInt((360 / count) * i)
    $newTrailItem.style.backgroundColor = `hsl(${curColor}, 80%, 50%)`;
    document.body.append($newTrailItem);
    trailItems.push($newTrailItem);
}

console.log(trailItems);

trailItems[0].style.top = 100;
trailItems[0].style.left = 100;

window.addEventListener("mousemove", function (event) {
    // console.log("move");
    // console.log(event.clientX);
    // console.log(event.clientY);
    trailItems[nextToMove].style.left = event.clientX + "px";
    trailItems[nextToMove].style.top = event.clientY + "px";
    nextToMove += 1;
    if (nextToMove >= count) {
        nextToMove = 0;
    }
})