$date = document.getElementById("date");

var today = new Date();

// Get the month name word
var month = today.toLocaleString("en-us", { month: "long" });

var day = today.get





$date.innerHTML = moment().format('MMMM Do YYYY');