export function amountGoodsInCart() {
    if (JSON.parse(localStorage.getItem("cartOrder"))) {
        let cartOrder = JSON.parse(localStorage.getItem("cartOrder"));
        let piecesGoods = document.querySelector("#pieses_goods");
        if (Object.keys(cartOrder).length > 0) {
            piecesGoods.setAttribute("style", "display:inline-block");
            piecesGoods.innerHTML = Object.keys(cartOrder).length;
        } else {
            piecesGoods.setAttribute("style", "display:none");
        }
    }
}