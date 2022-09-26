let startTime = -1
let curTime = 0
let running = false

let $startBtn = document.querySelector("#start-btn");
let $lapBtn = document.querySelector("#lap-btn");
let $timeDisplay = document.querySelector("#time");


$startBtn.addEventListener("click", function (evt) {
    startTime = Date.now();
    running = true;
});


function updateDisplay() {
    //console.log("updating display");
    if (running) {
        let msTime = Date.now() - startTime;

        let totalSecTime = msTime / 1000;
        let minTime = Math.floor(totalSecTime / 60);
        let secTime = totalSecTime - minTime * 60;
        $timeDisplay.innerHTML = `${minTime} : ${secTime}`;
    }
}

setInterval(updateDisplay, 100);


window.addEventListener("click", function () {
    console.log("Window Click");
});

const $btnContainer = document.querySelector("#test-btn-container");
const $testBtn = document.querySelector("#test-btn");

$testBtn.addEventListener("click", function (evt) {
    console.log("Button Click");
    evt.stopPropagation();
});

$btnContainer.addEventListener("click", function (evt) {
    console.log("Container Click");
});

let $multiBtnContainer = document.querySelector("#multi-btn-container");

$multiBtnContainer.addEventListener("click", function (evt) {
    if (evt.target.id === "first-btn") {
        console.log("1st");
    } else if (evt.target.id === "second-btn") {
        console.log("2nd");
    } else if (evt.target.id === "third-btn") {
        console.log("3rd");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.shiftKey) {
        console.log("shift down");
    }
    if (evt.key === "v") {
        console.log("v key down");
        document.body.style.backgroundColor = "violet";
    } else if (evt.key === "V") {
        console.log("v key down");
        document.body.style.backgroundColor = "darkviolet";
    }
});

window.addEventListener("keyup", function (evt) {

    document.body.style.backgroundColor = "white";

});

window.addEventListener("dblclick", function (evt) {
    console.log("double click");
});

let lastX; // Tracks the last observed mouse X position
let bar = document.querySelector("#bar");
bar.addEventListener("mousedown", event => {
    if (event.button == 0) {
        lastX = event.clientX;
        window.addEventListener("mousemove", moved);
        event.preventDefault(); // Prevent selection
    }
});

function moved(event) {
    if (event.buttons == 0) {
        window.removeEventListener("mousemove", moved);
    } else {
        let dist = event.clientX - lastX;
        let newWidth = Math.max(10, bar.offsetWidth + dist);
        bar.style.width = newWidth + "px";
        lastX = event.clientX;
    }
}

// Create some content
document.body.appendChild(document.createTextNode(
    "supercalifragilisticexpialidocious ".repeat(1000)));

let progress = document.querySelector("#progress");
window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    progress.style.width = `${(scrollY / max) * 100}%`;
});


let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");
for (let field of Array.from(fields)) {
    field.addEventListener("focus", event => {
        let text = event.target.getAttribute("data-help");
        help.textContent = text;
    });
    field.addEventListener("blur", event => {
        help.textContent = "";
    });
}