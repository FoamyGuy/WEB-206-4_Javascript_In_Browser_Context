
//const $iframe = document.querySelector("#letter_iframe");

document.addEventListener("keyup", function (event) {
    console.log(event.key);
    let $new_iframe = document.createElement("iframe");

    $new_iframe.src = "img_search.html?q=" + event.key;
    //$iframe.contentWindow.scrollTo(0, 100);
    document.querySelector("#iframes_container").append($new_iframe)
});