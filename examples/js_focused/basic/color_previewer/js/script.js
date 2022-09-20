const $colorInput = document.querySelector("#color-input");
const $submitBtn = document.querySelector("#submit-btn");
const $body = document.body

$submitBtn.addEventListener("click", function(){
    $body.style.backgroundColor = $colorInput.value;
});
