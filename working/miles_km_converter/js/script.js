let $kmInput = document.querySelector("#kmInput");
let $milesInput = document.querySelector("#milesInput");
let $convertBtn = document.querySelector("#convertBtn");

function convertKmToMiles(km){
    return km / 1.609;
}

function convertMilesToKm(miles){
    return miles * 1.609;
}

$convertBtn.addEventListener("click", function(event){
    if($kmInput.value && !$milesInput.value){
        // convert from km to miles
        $milesInput.value = convertKmToMiles($kmInput.value);
    }else if ($milesInput.value && !$kmInput.value){
        // convert from miles to km
        $kmInput.value = convertMilesToKm($milesInput.value);
    }else{
        console.log("no conversion");
    }
});