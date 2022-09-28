
const $input = document.querySelector("input");

window.addEventListener("load", function(){
    $input.value = Math.random() * 99999;
});

document.querySelectorAll(".auto-select-input").forEach(function($curElement){
    $curElement.addEventListener("focus", function(){
       $curElement.select();
    });
});

let squareWorker = new Worker("js/squareworker.js");
squareWorker.addEventListener("message", function(event){
   console.log("The worker responded: ", event.data);
});


squareWorker.postMessage(10);
squareWorker.postMessage(24);

let fireworkTimer = setTimeout(function(){
    console.log("BOOM!");
}, 1000);

if (Math.random() < 0.5){
    console.log("Dud firework no boom");
    clearTimeout(fireworkTimer);
}


let ticks = 0;
let clock = setInterval(function(){
    ticks++
    console.log("tick", ticks);
    if (ticks >= 10){
        clearInterval(clock);
        console.log("stop.")
    }

}, 200);


let $textarea = document.querySelector("textarea");
let timeout;

$textarea.addEventListener("keydown", function(event){
    console.log("down: ", event.key);
});
$textarea.addEventListener("keyup", function(event){
    console.log("up: ", event.key);
});


$textarea.addEventListener("input", function(event){
    console.log("input: ", event.data);
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        console.log("search for possible entries from: ", $textarea.value);
    }, 500);
});

let scheduled = null;
window.addEventListener("mousemove", function(event){
    if(!scheduled){
        console.log(this);
        setTimeout(function(){
            //document.body.textContent = `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
            console.log(`Mouse at ${scheduled.pageX}, ${scheduled.pageY}`);
            scheduled = null;
        }, 250);
    }
    scheduled = event;
});