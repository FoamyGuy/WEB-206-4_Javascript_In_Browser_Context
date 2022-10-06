let $redCircle = document.querySelector(".red-circle");
let movingRight = true;

$redCircle.setAttribute("fill", "#770000");

document.querySelector("svg").setAttribute("width", document.body.clientWidth);

/*setInterval(function () {
    let newX

    if (movingRight) {
        if (parseInt($redCircle.getAttribute("cx")) < document.body.clientWidth) {
            newX = parseInt($redCircle.getAttribute("cx")) + 10;
        } else {
            newX = parseInt($redCircle.getAttribute("cx")) - 10;
            movingRight = false;
        }
    }else {  // moving left
        if (parseInt($redCircle.getAttribute("cx")) > 10) {
            newX = parseInt($redCircle.getAttribute("cx")) - 10;

        } else {
            newX = parseInt($redCircle.getAttribute("cx")) + 10;
            movingRight = true;

        }
    }


    $redCircle.setAttribute("cx", newX);
}, 100);*/


let cx = document.querySelector("canvas").getContext("2d");
cx.strokeStyle = 'white';
cx.beginPath();
for (let y = 10; y < 100; y += 10) {
    cx.moveTo(10, y);
    cx.lineTo(90, y);
}
cx.stroke();


cx.beginPath();
cx.moveTo(10, 90);
// control=(60,10) goal=(90,90)

/*cx.quadraticCurveTo(60, 10, 90, 90);
cx.lineTo(60, 10);
cx.closePath();
cx.stroke();*/

cx.bezierCurveTo(10, 10, 90, 10, 50, 90);
cx.lineTo(90, 10);
cx.lineTo(10, 10);
cx.closePath();
cx.stroke();


cx.beginPath();
// center=(50,50) radius=40 angle=0 to 7
cx.arc(50, 50, 40, 0, 7);
// center=(150,50) radius=40 angle=0 to ½π
cx.arc(150, 50, 40, 0, 0.5 * Math.PI);
cx.stroke();


const results = [
    {name: "Satisfied", count: 1043, color: "lightblue"},
    {name: "Neutral", count: 563, color: "lightgreen"},
    {name: "Unsatisfied", count: 510, color: "pink"},
    {name: "No comment", count: 175, color: "silver"}
];

let total = results
    .reduce((sum, {count}) => sum + count, 0);
// Start at the top
let currentAngle = -0.5 * Math.PI;
for (let result of results) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    // center=100,100, radius=100
    // from current angle, clockwise by slice's angle
    cx.arc(100, 100, 100,
        currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx.lineTo(100, 100);
    cx.fillStyle = result.color;
    cx.fill();
}


let img = document.createElement("img");
img.src = "img/player.png";
let spriteW = 24, spriteH = 30;
img.addEventListener("load", () => {
    let cycle = 0;
    setInterval(() => {
        cx.clearRect(0, 0, spriteW, spriteH);
        cx.drawImage(img,
            // source rectangle
            cycle * spriteW, 0, spriteW, spriteH,
            // destination rectangle
            0, 0, spriteW, spriteH);
        cycle = (cycle + 1) % 8;
    }, 120);
});
