let OVEN_TEMP = 0

const preheatOven = new Promise((resolve, reject) => {
    console.log("Preheating oven...");
    setTimeout(() => {
        OVEN_TEMP = 410;
        console.log(`Oven has reached ${OVEN_TEMP}`);
        resolve(OVEN_TEMP);
    }, 2000);
});
console.log("after declare preheatOven Promise()");


function checkPreheat(temp) {
    if (temp < 400) {
        return "Oven is not hot enough";
    } else if (temp > 450) {
        return "Oven is too hot";
    } else {
        return "Oven is ready";
    }
}

function startBakingCookies(preheatResults) {
    //console.log("inside start baking cookies");
    return new Promise((resolve, reject) => {
        console.log("inside baking cookies executor");
        if (preheatResults === "Oven is ready") {
            console.log(`Baking cookies`);
            setTimeout(function () {
                resolve(true);
            }, 2000);
        } else {
            reject(preheatResults);
        }
    });
}

function checkCookies(cookieResults) {
    //console.log("checking on cookies");
    if (cookieResults === true) {
        console.log(`Cookies are ready!!\n${"🍪🍪🍪🍪\n".repeat(3)}`);
    } else {
        console.log("No cookies :(");
        return (cookieResults);
    }
}


preheatOven
    .then(checkPreheat)
    .then(startBakingCookies)
    .then(checkCookies)
    .catch(function (problem) {
        console.log("Problem: " + problem);
    });


