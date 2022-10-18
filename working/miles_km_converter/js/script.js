let $kmInput = document.querySelector("#kmInput");
let $milesInput = document.querySelector("#milesInput");
let $convertBtn = document.querySelector("#convertBtn");

function convertKmToMiles(km) {
    return km / 1.609;
}

function convertMilesToKm(miles) {
    return miles * 1.609;
}

function convertKmToMilesFromEvent(event) {
     $milesInput.value = event.target.value / 1.609;
}

function convertMilesToKmFromEvent(event) {
    $kmInput.value = event.target.value * 1.609;
}

$convertBtn.addEventListener("click", function (event) {
    if ($kmInput.value && !$milesInput.value) {
        // convert from km to miles
        $milesInput.value = convertKmToMiles($kmInput.value);
    } else if ($milesInput.value && !$kmInput.value) {
        // convert from miles to km
        $kmInput.value = convertMilesToKm($milesInput.value);
    } else {
        console.log("no conversion");
    }
});

$kmInput.addEventListener("input", convertKmToMilesFromEvent);
$milesInput.addEventListener("input", convertMilesToKmFromEvent);

/*function handleConversionInput(event){
    if (event.target === $kmInput ){
        console.log("km input");
        $milesInput.value = convertKmToMiles($kmInput.value);
    }else if (event.target === $milesInput){
        console.log("miles input");
        $kmInput.value = convertMilesToKm($milesInput.value);
    }
}*/



/*
$kmInput.addEventListener("input", handleConversionInput);
$milesInput.addEventListener("input", handleConversionInput);
*/


/*
$kmInput.addEventListener("input", function (event) {
    //console.log($kmInput.value);
    $milesInput.value = convertKmToMiles($kmInput.value);
});

$milesInput.addEventListener("input", function (event) {
    $kmInput.value = convertMilesToKm($milesInput.value);
});

*/

