/*
console.log("document:");
console.log(document);

console.log("documentElement:");
console.log(document.documentElement);

console.log("head:");
console.log(document.head);

console.log("body:");
console.log(document.body);

document.head.insertAdjacentHTML("beforeend", '<style>*{outline: 2px solid blue;}</style>');


console.log(`nodeType: ${document.body.nodeType}`);
console.log(document.body.childNodes[4]);
console.log(`nodeType: ${document.body.childNodes[4].nodeType}`);*/


/*
const $fruitList = document.getElementById("fruit-list");
console.log($fruitList.firstChild);
console.log($fruitList.firstElementChild);
$fruitList.firstElementChild.classList.add("important");
//$fruitList.children[1].classList.add("important");
$fruitList.children[$fruitList.children.length-1].classList.add("last");
$fruitList.firstElementChild.nextElementSibling.classList.add("second");
*/

/*function talksAbout(node, string) {
    console.log("cur node: ")
    console.log(node);
    if (node.nodeType == Node.ELEMENT_NODE) {

        for (let child of node.childNodes) {
            if (talksAbout(child, string)) {
                return true;
            } else {
                // do nothing / look at the next child
            }

        }
        return false;
    } else if (node.nodeType == Node.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}


let testString = "Quick brown fox";
console.log(testString.indexOf("apple"));
console.log(talksAbout(document.body, "Book"));*/


let $myList = document.querySelector("#my-list");
console.log("my list:");
console.log($myList);
/*let $newListItem = document.createElement("li");
$newListItem.innerText = "Dynamic item";
$myList.append($newListItem);*/

for (let i = 1; i <= 100; i++) {

    //console.log(i % 3 );

    let $newListItem = document.createElement("li");
    // check if divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        $newListItem.innerText = `${i}: fizzbuzz`;
        console.log(`${i}: fizzbuzz`);

        $newListItem.classList.add("fizz", "buzz");
        //$newListItem.classList.add("buzz");
        // check if divisible by 3
    } else if (i % 3 === 0) {
        $newListItem.innerText = `${i}: fizz`;
        console.log(`${i}: fizz`);
        $newListItem.classList.add("fizz");

        // check if divisible by 5
    } else if (i % 5 === 0) {
        $newListItem.innerText = `${i}: buzz`;
        console.log(`${i}: buzz`);
        $newListItem.classList.add("buzz");

        // else, not divisible by 3 or 5
    } else {
        $newListItem.innerText = `${i}`;
        console.log(i);
    }
    $myList.append($newListItem);

}