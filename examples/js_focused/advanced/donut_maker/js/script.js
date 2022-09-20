const DONUT_BASES = ["img/base_0.svg", "img/base_1_v2.svg", "img/base_2.svg"];

const DONUT_ICINGS = [
    "img/icing_0.svg", "img/icing_1.svg", "img/icing_2.svg",
    "img/icing_3.svg", "img/icing_4.svg", "img/icing_5.svg",
    "img/icing_6.svg", "img/icing_7.svg", "img/icing_8.svg",
    "img/icing_9.svg"
];
const DONUT_TOPPINGS = ["img/toppings_0.svg", "img/toppings_1.svg", "img/toppings_2.svg",
    "img/toppings_3.svg", "img/toppings_4.svg"];

const DONUT_FINISHINGS = ["img/drizzle_0.svg", "img/drizzle_1.svg", "img/stripes_0.svg",
    "img/stripes_1.svg"];

const $outputDonut = document.querySelector(".output-donut");

const $donutBaseOutputImg = document.createElement("img");
$donutBaseOutputImg.classList.add("output-base");
$outputDonut.append($donutBaseOutputImg);

const $donutIcingOutputImg = document.createElement("img");
$donutIcingOutputImg.classList.add("output-icing");
$outputDonut.append($donutIcingOutputImg);

const $donutToppingsOutputImg = document.createElement("img");
$donutToppingsOutputImg.classList.add("output-toppings");
$outputDonut.append($donutToppingsOutputImg);

const $donutFinishingsOutputImg = document.createElement("img");
$donutFinishingsOutputImg.classList.add("output-finishings");
$outputDonut.append($donutFinishingsOutputImg);


function createMenuSection(title, choiceList) {
    const $menuSectionDiv = document.createElement("div");

    const $sectionHeader = document.createElement("label");
    $sectionHeader.innerText = title;
    $sectionHeader.classList.add("menu-header")
    $menuSectionDiv.append($sectionHeader);
    for (let curChoiceImg of choiceList) {
        const $newBaseChoice = document.createElement("img");
        $newBaseChoice.src = curChoiceImg;
        $newBaseChoice.classList.add("menu-item");
        $newBaseChoice.classList.add("menu-bases");
        $newBaseChoice.setAttribute("data-choice-type", title);

        $newBaseChoice.addEventListener("click", clickChoice)

        $menuSectionDiv.append($newBaseChoice);
    }
    return $menuSectionDiv;
}


function createMenu() {
    const $menuDiv = document.createElement("div");

    $menuDiv.append(createMenuSection("Bases", DONUT_BASES));
    $menuDiv.append(createMenuSection("Icings", DONUT_ICINGS));
    $menuDiv.append(createMenuSection("Toppings", DONUT_TOPPINGS));
    $menuDiv.append(createMenuSection("Finishings", DONUT_FINISHINGS));

    return $menuDiv;
}

function clickChoice($eventObj) {
    const $chosenItem = $eventObj.target;

    if ($chosenItem.getAttribute("data-choice-type") === "Bases") {

        $donutBaseOutputImg.src = $chosenItem.src;
    } else if ($chosenItem.getAttribute("data-choice-type") === "Icings") {
        if ($donutIcingOutputImg.src !== $chosenItem.src){
            $donutIcingOutputImg.src = $chosenItem.src;
        }else{
            $donutIcingOutputImg.src = "";
        }

    } else if ($chosenItem.getAttribute("data-choice-type") === "Toppings") {
         if ($donutToppingsOutputImg.src !== $chosenItem.src){
            $donutToppingsOutputImg.src = $chosenItem.src;
        }else{
            $donutToppingsOutputImg.src = "";
        }

    } else if ($chosenItem.getAttribute("data-choice-type") === "Finishings") {
         if ($donutFinishingsOutputImg.src !== $chosenItem.src){
            $donutFinishingsOutputImg.src = $chosenItem.src;
        }else{
            $donutFinishingsOutputImg.src = "";
        }
    }
}

document.querySelector(".menu").append(createMenu());