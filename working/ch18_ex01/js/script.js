URL = 'https://eloquentjavascript.net/author'

fetch(URL, {
    headers: {"Accept": "application/json"}
}).then(responseObj =>{
    return responseObj.text();
}).then(responseTxt =>{
   console.log(responseTxt);
});