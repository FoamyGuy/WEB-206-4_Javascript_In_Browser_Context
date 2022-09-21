
let $cat = document.querySelector(".cat-img");
let $hat = document.querySelector(".hat-img");
let angle = Math.PI / 2;


function animate(time, lastTime){
    if (lastTime != null){
        angle += (time - lastTime) * 0.001
        //angle += .002

    }
    $cat.style.top = (Math.sin(angle) * 20) + "px";
    $cat.style.left = (Math.cos(angle) * 200) + "px";

    $hat.style.top = (Math.sin(angle + Math.PI) * 20) + "px";
    $hat.style.left = (Math.cos(angle + Math.PI) * 200) + "px";


    requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate);