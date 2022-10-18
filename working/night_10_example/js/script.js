//URL = "https://opentdb.com/api.php?amount=10"
URL = "example/data.txt"

/*fetch(URL).then(response => {
   console.log(response.status);
   console.log(response.headers.get("Content-Type"));

   response.text()
       .then(function(responseText){
      console.log(responseText);
   });
});*/

/*
fetch("example/data.txt", {method: "DELETE"}).then(resp => {
   console.log(resp.status);
});
*/

fetch("example/data.txt", {headers: {Range: "bytes=8-19"}})
    .then(resp => resp.text())
    .then(console.log);

QUESTIONS = []

function getQuestions(count, category) {
    fetch("trivia.com", {headers: {Range: "bytes=8-19"}})
        .then(resp => resp.json())
        .then(function (respData) {
            QUESTIONS = respData;
        });
}

// document.querySelector("#test-text-input").focus();
// document.querySelector("#password-text-input").focus();

document.querySelector("#test-text-input").addEventListener("input", function (event) {
    console.log(document.querySelector("#test-text-input").value);
});


let $newInput = document.createElement("input");
$newInput.autofocus = true;

document.body.append($newInput);



/*.then(function(responseText){
   console.log(responseText);
});*/