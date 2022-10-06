window.addEventListener("click", function () {
    let circle = document.querySelector("circle");
    circle.setAttribute("fill", "hsl(100, 50%, 80%)");
});

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

// rectangle

// context.fillStyle = "red";
// context.strokeStyle = "red";
// context.lineWidth = 10;
// context.strokeRect(10, 10, 100, 50);


// Paths

// context.strokeStyle = "red";
// context.beginPath();
// for (let y = 10; y < 100; y += 10) {
//    context.moveTo(10, y);
//    context.lineTo(90, y);
// }
// context.stroke();


//  More Path

// context.fillStyle = "blue";
// context.strokeStyle = "blue";
// context.beginPath();
// context.moveTo(50, 10);
// context.lineTo(10, 70);
// context.lineTo(90, 70);
// context.closePath();
// context.stroke();


// custom polygon function

/*
example values:

points = [[0,0], [10, 10], ...]
location = [120, 90]
color = "red"
fill = True

 */
// function drawPolygon(points, location, color, fill){
//    context.fillStyle = color;
//    context.strokeStyle = color;
//    context.beginPath();
//    context.moveTo(location[0], location[1]);
//    for(let i = 0; i < points.length; i++){
//       const curPoint = points[i];
//       context.lineTo(curPoint[0], curPoint[1]);
//    }
//    context.closePath();
//    if(fill === true){
//       context.fill();
//    }else{
//       context.stroke();
//    }
// }
//
// const points = [[0,0], [100, 40], [50, 100]];
// drawPolygon(points, [0,0], "green", true);


// quadratic curves
// context.strokeStyle = "white";
// context.beginPath();
// context.moveTo(10, 90);
// // control=(60, 10) goal=(90,90)
// context.quadraticCurveTo(60, 10, 90, 90);
// context.lineTo(60,10);
// context.closePath();
// context.stroke();


// bezier curve
// context.strokeStyle = "white";
// context.beginPath();
// context.moveTo(10, 90);
// // control1=(10,10) control2=(90, 10) goal=(50, 90)
// context.bezierCurveTo(10, 10, 90, 10, 50, 90);
// context.lineTo(90, 10);
// context.lineTo(10,10);
// context.closePath();
// context.stroke();


// arc
// context.strokeStyle = "white";
// context.beginPath();
// //context.arc(50, 50, 40, 0, 7);
// context.arc(50, 50, 40, 0, 0.5 * Math.PI);
// context.stroke();


// pie chart

// const results = [
//     {name: "Satisfied", count: 200, color: "lightblue"},
//     {name: "Neutral", count: 563, color: "lightgreen"},
//     {name: "Unsatisfied", count: 510, color: "pink"},
//     {name: "No comment", count: 175, color: "silver"}
// ];
//
//
// let total = results.reduce((sum, {count}) => {
//     return  sum + count
// }, 0);
// // start at the top
// let currentAngle = -0.5 * Math.PI;
// for (let result of results){
//     let sliceAngle = (result.count / total) * 2 * Math.PI;
//     context.beginPath();
//
//     context.arc(100, 100, 100,
//         currentAngle, currentAngle + sliceAngle)
//
//     currentAngle += sliceAngle;
//     context.lineTo(100, 100);
//     context.fillStyle = result.color;
//     context.fill();
// }


// context.font = "bold 28px Georgia";
// context.fillStyle = "fuchsia";
// context.fillText("I can draw text, too!", 10, 50);


// many cats
// let img = document.createElement("img");
// img.src = "img/small-cat.jpg";
// img.addEventListener("load", () => {
//    for(let x = 10; x < 200; x+= 30){
//        context.drawImage(img, x, 10);
//    }
// });


// running player

let img = document.createElement("img");
img.src = "img/player.png";
let spriteW = 24, spriteH = 30;

function flipHorizontally(context, around) {
    context.translate(around, 0);
    context.scale(-1, 1);
    context.translate(-around, 0);
}

img.addEventListener("load", () => {
    let cycle = 0;
    flipHorizontally(context, 50 + spriteW / 2);
    setInterval(() => {
        context.clearRect(0, 0, spriteW, spriteH);


        context.drawImage(img,
            cycle * spriteW, 0, spriteW, spriteH,
            0, 0, spriteW, spriteH);
        cycle = (cycle + 1) % 8;
    }, 120);
});


// transformation