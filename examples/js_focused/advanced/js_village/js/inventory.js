INVENTORY = {
  "_items": {},
  "add_items": function (items) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (this._items.hasOwnProperty(item["item"])) {
        //console.log("already in _items dict");
        this._items[item["item"]] += item["count"];
      } else {
        //console.log("adding to _items dict");
        this._items[item["item"]] = item["count"];
      }
    }
    INVENTORY.refresh_ui();

  },
  "remove_items": function (items) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (this._items.hasOwnProperty(item["item"])) {
        this._items[item["item"]] -= item["count"];
      }
    }
    INVENTORY.refresh_ui();
  },
  "can_afford": function (costs) {
    for (let i = 0; i < costs.length; i++) {
      if (!this._items.hasOwnProperty(costs[i]["item"])) {
        return false;
      } else {
        if (this._items[costs[i]["item"]] < costs[i]["count"]) {
          return false
        }
      }
    }
    return true;
  },
  "refresh_ui": function(){

    $(".inventory").empty();
    let $new_ul = $("<ul>");
    //console.log("inside refresh ui");
    for (let i = 0; i < Object.keys(this._items).length; i++){

      let item = Object.keys(this._items)[i];
      //console.log("making ", item);
      let $new_li = $("<li>");
      $new_li.text(`${this._items[item]}x  ${item}`);
      $new_ul.append($new_li);
    }
    $(".inventory").append($new_ul);
  }
};