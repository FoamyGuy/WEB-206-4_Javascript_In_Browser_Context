const $balloon = document.querySelector("#balloon");
let curSize = 1;


function inflateBalloon(event){
    if (event.key == "ArrowUp"){
        event.preventDefault();
        curSize += 1;
        $balloon.style.fontSize = curSize + "em";
        if (curSize > 20){
            $balloon.innerText = "💥";
            window.removeEventListener("keydown", inflateBalloon);
        }

    }
}

window.addEventListener("keydown", inflateBalloon);