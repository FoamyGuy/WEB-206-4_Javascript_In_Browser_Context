var $add_btn = document.querySelector("#add-btn");
var $item_input = document.querySelector("#item-input");
var $list = document.querySelector("#list");

function create_li(item_str){
  var $new_li = document.createElement("li");
  $new_li.innerHTML = item_str;
  $new_li.addEventListener("click", function(){
    $new_li.classList.toggle("strike-through");
  });

  $new_li.classList.add("item");


  return $new_li;
}

$add_btn.addEventListener("click", function(){
  var $line_rule = document.createElement("hr");
  $line_rule.classList.add("line-rule");
  $list.appendChild($line_rule);
  $list.appendChild(create_li($item_input.value));
});




