import {
    amountGoodsInCart
} from "./amountGoodsInCart.js";

import {
    ValidForm
} from "./validForm.js";

function showCart() {
    let allGoods = JSON.parse(localStorage.getItem('allGoods'));
    let cartOrder = JSON.parse(localStorage.getItem('cartOrder'));
    let ul = document.querySelector('.cartView');
    ul.innerHTML = ' ';
    let sum = 0;
    if (cartOrder === null || !Object.keys(cartOrder).length > 0) {
        ul.innerHTML = "<p style='text-align:center'>Корзина пуста!</p>"
    } else {
        let headerLi = '<li>';
        headerLi += '<div><p>Товар</p></div>';
        headerLi += '<div><p>Количество</p></div>';
        headerLi += '<div><p>Цена</p></div>';
        headerLi += '</li>';
        ul.innerHTML += headerLi;
        for (let key in cartOrder) {
            let li = '<li>';
            li += '<div>';
            li += `<img src=${allGoods[key]['img']}>`;
            li += `<p>${allGoods[key]['name']}</p>`;
            li += '</div>';
            li += '<div>';
            li += `<button type='button' name="minus-goods" data="${key}"> - </button>`;
            li += `<p>${cartOrder[key]}шт.</p>`;
            li += `<button type='button' name="plus-goods" data="${key}"> + </button>`;
            li += '</div>';
            li += '<div>';
            li += `<p>${allGoods[key]['price'] * cartOrder[key]}BYN</p>`;
            li += `<button type='button' name="delete-goods" data="${key}"> x </button>`;
            li += '</div>';
            li += '</li>';
            sum += allGoods[key]['price'] * cartOrder[key];
            ul.innerHTML += li;
        }
        ul.innerHTML += `<li><p class="total">Итого: ${sum} BYN</p></li>`;
    }
}

function initClick() {
    let allGoods = JSON.parse(localStorage.getItem('allGoods'));
    let cartOrder = JSON.parse(localStorage.getItem('cartOrder'));
    document.addEventListener("click", function(event) {
        if (event.target.attributes.name) {
            if (event.target.attributes.name.value === 'delete-goods') {
                delete cartOrder[event.target.attributes.data.value];
                localStorage.setItem('cartOrder', JSON.stringify(cartOrder));
                showCart();
                amountGoodsInCart();
            } else if (event.target.attributes.name.value === 'plus-goods') {
                cartOrder[event.target.attributes.data.value]++;
                localStorage.setItem('cartOrder', JSON.stringify(cartOrder));
                showCart();
                amountGoodsInCart();
            } else if (event.target.attributes.name.value === 'minus-goods') {
                if (!(cartOrder[event.target.attributes.data.value] - 1)) {
                    delete cartOrder[event.target.attributes.data.value];
                } else {
                    cartOrder[event.target.attributes.data.value]--;
                }
                localStorage.setItem('cartOrder', JSON.stringify(cartOrder));
                showCart();
                amountGoodsInCart();
            }
        }
    })

    let form = document.forms.form_cart;
    form.addEventListener("click", function(event) {
        if (event.target.attributes.name.value === 'buy') {
            if (JSON.parse(localStorage.getItem('cartOrder')) && (Object.keys(JSON.parse(localStorage.getItem('cartOrder')))).length) {
                let validForm = new ValidForm();
                if (validForm.validateAll()) {
                    let data = {
                        name: document.getElementById('user').value,
                        email: document.getElementById('email').value,
                        tel: document.getElementById('tel').value,
                        text: document.getElementById('customer-text').value,
                        cart: emailArr(),
                    };
                    fetch('../mail/mail.php', {
                            method: 'POST',
                            body: JSON.stringify(data)
                        })
                        .then(function(res) {
                            if (res) {
                                alert('Заказ отправлен');
                            } else {
                                alert('Ошибка заказа');
                            }
                        })
                }
            } else {
                alert("Корзина пуста!")
            }
        }
    })

    function emailArr() {
        let emailArr = {};
        for (let key in cartOrder) {
            let temp = {};
            temp.name = allGoods[key]['name'];
            temp.pieces = cartOrder[key];
            temp.price = allGoods[key]['price'];
            temp.articul = allGoods[key]['articul'];
            emailArr[key] = temp;
        }
        return emailArr;
    }
}

export {
    showCart,
    initClick,
};