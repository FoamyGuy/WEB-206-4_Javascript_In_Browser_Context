/*
make a <button> element on the page

make an <img> element on the page, with a class called "hidden"

in css make rule for the .hidden class that sets display to none

make a variable to hold the current number of clicks

make a click listener on the <button>
    increment the current of clicks variable

    check if current clicks is > 3
        change the text on the button to indicate only a few more clicks needed

    check if current clicks is > 5
        change the text on the button to say hooray kitty!! and include emoji
        remove the hidden class from the <img> element

 */

function make_button(text) {
    // create a button element
    const $btn = document.createElement("button");

    // set its text to text argument
    $btn.innerText = text;

    return $btn;
}

function make_img(source, imgClass) {
    // create a image element
    const $newImg = document.createElement("img");

    // set its text to text argument
    $newImg.src = source;

    $newImg.classList.add(imgClass);

    return $newImg;
}


const $kittyBtn = make_button("Click Here");

// add it to the page
document.body.append($kittyBtn);

const $kittyImg = make_img("img/cat.jpg", "hidden");
document.body.append($kittyImg);

let numClicks = 0;
function hideOrShowKitty(){
    numClicks++;
    console.log(numClicks);

    if (numClicks >= 20) {
        numClicks = 0;
        $kittyImg.classList.add("hidden");
        $kittyBtn.innerText = "Click Here";

    } else if (numClicks >= 5) {
        $kittyBtn.innerText = "🐈 Hooray Kitty!";
        $kittyImg.classList.remove("hidden");
    } else if (numClicks >= 3) {
        $kittyBtn.innerText = "A few more times";
    }
}

$kittyBtn.addEventListener("click", hideOrShowKitty);
