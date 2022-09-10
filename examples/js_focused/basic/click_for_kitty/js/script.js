let clicks = 0;
let $kitty_btn = document.getElementById("kitty_btn");
let $kitty_img = document.getElementById("kitty_img");

$kitty_btn.addEventListener("click", function(){
    console.log("click");
    clicks += 1;
    if (clicks >= 2){
        $kitty_btn.innerText = "A few more times"
    }

    if (clicks >= 5){
        $kitty_img.classList.remove("hidden");
        $kitty_btn.innerText = "🐈 Kitty!!!"
    }
});