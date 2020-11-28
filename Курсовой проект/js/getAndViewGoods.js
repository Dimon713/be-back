function GetAndViewGoods(url, block, item) {
  this.url = url;
  this.block = block;
  this.cartOrder = {};
  if (JSON.parse(localStorage.getItem("cartOrder"))) {
    this.cartOrder = JSON.parse(localStorage.getItem("cartOrder"));
  }
  this.goods = {};

  if (JSON.parse(localStorage.getItem("allGoods"))) {
    this.allGoods = JSON.parse(localStorage.getItem("allGoods"));
  } else {
    this.allGoods = {};
  }

  fetch(this.url)
    .then((data) => {
      if (data.status !== 200) {
        console.log("Что - то пошло не так: " + data.status);
        return;
      }
      data.json().then((data) => {
        data = data["feed"]["entry"];
        this.goods = this.filterGetJSON(data);
        localStorage.setItem(`goods${item}`, JSON.stringify(this.goods));
        for (let key of Object.keys(this.goods)) {
          if (!this.allGoods.hasOwnProperty(key))
            this.allGoods[key] = this.goods[key];
        }
        localStorage.setItem("allGoods", JSON.stringify(this.allGoods));
        console.log(data);
        console.log(this.goods);
        console.log(this.allGoods);
        showGoods(this.goods);
      });
    })
    .catch((error) => console.error("Ошибка! Причина: " + error));

  this.addToCartOrder = function (id) {
    if (this.cartOrder[id]) {
      this.cartOrder[id]++;
    } else {
      this.cartOrder[id] = 1;
    }
    localStorage.setItem("cartOrder", JSON.stringify(this.cartOrder));
    import("./listenCart.js").then((module) => module.listenCart()); //что за шляпа?
  };

  this.filterGetJSON = function (element) {
    let object = {};
    for (let i = 0; i < element.length; i++) {
      let tempObject = {};
      tempObject["articul"] = element[i]["gsx$articul"]["$t"];
      tempObject["name"] = element[i]["gsx$name"]["$t"];
      tempObject["img"] = element[i]["gsx$img"]["$t"];
      tempObject["price"] = element[i]["gsx$price"]["$t"];
      object[element[i]["gsx$id"]["$t"]] = tempObject;
    }
    return object;
  };

  document.addEventListener("click", (event) => {
    if (event.target.attributes.name) {
      if (event.target.attributes.name.value === "add-to-cart") {
        this.addToCartOrder(event.target.attributes["data-id"].value);
      }
    }
  });
}

function emulateClick(target) {
  var click = new CustomEvent("click");
  target.dispatchEvent(click);
}

function showGoods(data) {
  let out = "";
  for (let key in data) {
    out += `<ol id=${key} class="preview position">`;
    out += `<li><input type="button" name="delete-cart" data-id="${key}" value="x" class="btn_close edit" style="display:none"></li>`;
    out += `<li><h5>${data[key]["name"]}</h5><i class="far fa-edit edit" style="display:none"></i></li>`;
    out += `<li style="height:150px; margin:20px auto 25px auto"><img src="${data[key]["img"]}"><i class="far fa-edit edit img" style="display:none;"></i></li>`;
    out += `<li><h6>Цена: ${data[key]["price"]}BYN</h6><i class="far fa-edit edit" style="display:none"></i></li>`;
    out += `<li class="price_chart" name="price_chart" data-id="${key}">График цен</li>`;
    out += `<li><button type="button" name="add-to-cart" data-id="${key}"> Купить</button></li>`;
    out += "</ol>";
  }

  let goods = document.querySelector(".wrapper_preview");
  goods.innerHTML = out;
  setTimeout(function () {
    emulateClick(goods);
  }, 10);
}

document.addEventListener("click", function (e) {
  if (
    e.target.attributes.name &&
    e.target.attributes.name.value == "price_chart"
  ) {
    // console.log(e.target.attributes["data-id"].value);
    modalWindow();
  }
});

import { modalWindow } from "./modalWindow.js";

export { GetAndViewGoods, showGoods };
