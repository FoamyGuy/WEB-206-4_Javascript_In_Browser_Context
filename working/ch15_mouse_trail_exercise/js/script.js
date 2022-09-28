const count = 30;
let trailList = [];
let nextToMove = 0;


for (let i = 0; i < count; i++) {
    let $newTrail = document.createElement("div");
    $newTrail.classList.add("trail");
    $newTrail.style.backgroundColor = `hsl(${(360/count) * i}, 100%, 50%)`
    trailList.push($newTrail);
    document.body.append($newTrail);
}

window.addEventListener("blur", function(){
    console.log("body blur");
    for (let i = 0; i < count; i++){
        trailList[i].style.display = "none";
    }
})

addEventListener("mousemove", function (event) {
    console.log(`x: ${event.pageX} y: ${event.pageY}`);
    trailList[nextToMove].style.top = event.pageY + "px";
    trailList[nextToMove].style.left = event.pageX + "px";
    trailList[nextToMove].style.display = "block";

    //trailList[nextToMove].style.backgroundColor = `hsl(${(event.pageY)}, 100%, 50%)`
    nextToMove++;
    if(nextToMove >= count){
        nextToMove = 0;
    }

});