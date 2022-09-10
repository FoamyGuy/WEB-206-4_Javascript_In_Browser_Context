const RED = 0;
const YELLOW = 1;
const GREEN = 2;

const GREEN_TIME = 7; // seconds
const YELLOW_TIME = 3; // seconds
const RED_TIME = 10; // seconds

const $red_light = document.querySelector(".red-stoplight");
const $yellow_light = document.querySelector(".yellow-stoplight");
const $green_light = document.querySelector(".green-stoplight");

let current_light = RED;

function turn_on_light($light) {
    $light.classList.remove("off");
    $light.classList.add("on");
}

function turn_off_light($light) {
    $light.classList.remove("on");
    $light.classList.add("off");
}

function display_current_light() {
    if (current_light === RED) {
        turn_off_light($yellow_light);
        turn_off_light($green_light);
        turn_on_light($red_light);

        setTimeout(function () {
            current_light = GREEN;
            display_current_light();
        }, RED_TIME * 1000);
    } else if (current_light === YELLOW) {
        turn_off_light($red_light);
        turn_off_light($green_light);
        turn_on_light($yellow_light);
        setTimeout(function () {
            current_light = RED;
            display_current_light();
        }, YELLOW_TIME * 1000);
    } else if (current_light === GREEN) {
        turn_off_light($yellow_light);
        turn_off_light($red_light);
        turn_on_light($green_light);
        setTimeout(function () {
            current_light = YELLOW;
            display_current_light();
        }, GREEN_TIME * 1000);
    }
}


display_current_light();
