myList = [1, 32, 18, 9, 5]

function double(val){
    return val * 2
}

newList = myList.map(double);
console.log(newList);


function wrapInLi(value){
    let newLi = document.createElement("li");
    newLi.innerText = value
    return newLi;
}

let listItems = myList.map(wrapInLi);

let newUl = document.createElement("ul");
listItems.forEach(function(li){
    newUl.append(li);
});

document.body.append(newUl);
