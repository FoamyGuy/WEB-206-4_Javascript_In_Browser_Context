const $word_container = document.querySelector(".color-word-container");
const letters = "abcdefghijklmnopqrstuvwxyz"

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function wheel(pos) {
    // Input a value 0 to 255 to get a color value.
    // The colours are a transition r - g - b - back to r.
    if (pos < 0 || pos > 255) {
        return rgbToHex(0, 0, 0);
    }

    if (pos < 85) {
        return rgbToHex(parseInt(255 - pos * 3), parseInt(pos * 3), 0)
    }
    if (pos < 170) {
        pos -= 85
        return rgbToHex(0, parseInt(255 - pos * 3), parseInt(pos * 3))
    }

    pos -= 170
    return rgbToHex(parseInt(pos * 3), 0, parseInt(255 - (pos * 3)))
}

function scale(number, inMin, inMax, outMin, outMax) {
    return parseInt((number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin);
}


function getColor(key) {
    // 97 - 122
    console.log(key);

    if (letters.includes(key.toLowerCase())) {
        console.log("letter");
        const charCode = key.charCodeAt(0);
        const mappedColorValue = scale(charCode, 97, 122, 0, 255)
        //const colorString = "#" + mappedColorValue.toString(16).padStart(6, "0");
        const colorString = wheel(mappedColorValue);
        console.log(colorString);
        return colorString;
    }

    if (key === " " || key === "Enter") {
        return "#ffffff"
    }

    return "#00ff00"

}

document.addEventListener("keyup", function (event) {
    console.log(event.key);

    if (event.key.length !== 2) { // filter out f keys
        let $new_color_letter = document.createElement("div");
        $new_color_letter.classList.add("color-letter");
        const color = getColor(event.key)
        $new_color_letter.style.backgroundColor = color;
        $new_color_letter.style.color = color;

        if (letters.includes(event.key)) {
            $new_color_letter.innerText = event.key;
        }
        if (event.key === "Enter") {
            $new_color_letter.style.flexBasis = "100%";
        }

        //$iframe.contentWindow.scrollTo(0, 100);
        document.querySelector(".color-word-container").append($new_color_letter);
    }
});