const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
        //reject("bar");
    }, 300);
});

/*
myPromise
    .then(function (value) { // fulfill function
            console.log(`A Fulfilled ${value}`);
            return value;
        },
        function () { // reject function
            console.log("A Rejected")
        })
    .then(function (value) { // fulfill function
            console.log(`B Fulfilled ${value}`)
        },
        function () { // reject function
            console.log("B Rejected")
        })
    .then(function (value) { // fulfill function
            console.log(`C Fulfilled ${value}`)
        },
        function () { // reject function
            console.log("C Rejected")
        });*/


/*
myPromise
    .then(function (value) { // fulfill function
        console.log(`A Fulfilled ${value}`);
        return value;
    })
    .then(function (value) { // fulfill function
        console.log(`B Fulfilled ${value}`)
    })
    .then(function (value) { // fulfill function
        console.log(`C Fulfilled ${value}`)
    })
    .catch(function(value){
        console.log("rejected: ");
        console.log(value);
    });*/

function double_return(val){
    const anotherVal = 9
    return {val, anotherVal};
}

console.log(double_return(7));

// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
    setTimeout(() => {
        const randomInt = Date.now();
        const value = randomInt % 10;
        if (value < THRESHOLD_A) {
            resolve(value);
        } else {
            reject(`Too large: ${value}`);
        }
    }, 500);
}

function determineParity(value) {
    const isOdd = value % 2 === 1;
    return {value, isOdd};
}

function troubleWithGetNumber(reason) {
    const err = new Error("Trouble getting number", {cause: reason});
    console.error(err);
    throw err;
}

function promiseGetWord(parityInfo) {
    return new Promise((resolve, reject) => {
        const {value, isOdd} = parityInfo;
        if (value >= THRESHOLD_A - 1) {
            reject(`Still too large: ${value}`);
        } else {
            parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
            resolve(parityInfo);
        }
    });
}

new Promise(tetheredGetNumber)
    .then(determineParity, troubleWithGetNumber)
    .then(promiseGetWord)
    .then((info) => {
        console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
        console.log(info)
        return info;
    })
    .catch((reason) => {
        if (reason.cause) {
            console.error("Had previously handled error");
        } else {
            console.error(`Trouble with promiseGetWord(): ${reason}`);
        }
    })
    .finally((info) => {
        console.log("All done");
        console.log(info);
    });