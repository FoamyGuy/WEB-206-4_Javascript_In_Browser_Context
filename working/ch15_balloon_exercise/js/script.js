const $balloon = document.querySelector("#balloon");
let curSize = 100;


function changeBalloonSize(event){
    if (event.key == "ArrowUp"){
        console.log("up");
        curSize = curSize + 25;
        $balloon.style.fontSize = curSize + "%";

        if(curSize >= 500){
            $balloon.innerText = "💥";
            removeEventListener("keydown", changeBalloonSize);
        }
        //console.log(curSize)
    }else if(event.key == "ArrowDown"){
        console.log("down");
        curSize -= 25;
        $balloon.style.fontSize = curSize + "%";
    }
}


addEventListener("keydown", changeBalloonSize)