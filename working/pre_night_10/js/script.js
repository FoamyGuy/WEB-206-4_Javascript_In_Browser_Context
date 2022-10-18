fetch("example/data.txt", {body:"send data to server", method:"POST"}).then(response => {
    console.log(response.status);
    // → 200
    console.log(response.headers.get("Content-Type"));
    // → text/plain

    response.text().then(function (data) {
        console.log(data);
    });
});


fetch ("https://opentdb.com/api.php?amount=10").then(response =>{
  console.log(response.status);
  console.log(response.headers.get("Content-Type"));
  response.json().then(function (data) {
        console.log(data);
    });
});


/*
setTimeout(function(){
  document.querySelector("#your_div_id").style.backgroundColor = "#0000FF";
}, 5000);
*/
