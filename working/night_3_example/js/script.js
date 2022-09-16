
function replaceImages(){
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--){
        let image = images[i];
        if (image.alt){
            let text = document.createTextNode(image.alt);
            image.parentNode.replaceChild(text, image);
        }
        //fakeWait(1);
    }
}

/*
function fakeWait(seconds){
    console.log("inside fakeWait");
    let before = new Date().getTime() / 1000;
    let now = new Date().getTime() / 1000;

    console.log("inside wait b4");
    while (before + seconds < now){
        now = new Date().getTime() / 1000;
    }
    console.log("inside wait after");
}*/


function make_element(type, ...children){
    let node = document.createElement(type);
    for (let child of children){
        if (typeof child != "string"){
            node.appendChild(child);
        }else{
            node.appendChild(document.createTextNode(child));
        }
    }
    return node;

}

let $footer = make_element("footer", "—",
        make_element("strong", "Karl Popper"),
        ", preface to the second edition of ",
        make_element("em", "The Open Society and Its Enemies"),
        ", 1950");

document.getElementById("quote").appendChild($footer);