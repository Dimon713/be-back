import {
    showGoods as showGoodsSetApi,
    showGoods
} from "./getAndViewGoods.js"
export function handleClientLoad(spreadsheetId, item) {
    let showGoods = showGoodsSetApi;

    gapi.load('client:auth2', function initClient() {
        let API_KEY = 'AIzaSyAyusiypz_hXWbTBBgpL_GKtWw2WW98xH4';
        let CLIENT_ID = '251344779521-3m95r1vhpl3b6k6576hggb7ie5ckualb.apps.googleusercontent.com';
        let SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

        gapi.client.init({
                'apiKey': API_KEY,
                'clientId': CLIENT_ID,
                'scope': SCOPE,
                'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
            }).then(function() {
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
                updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            })
            .catch(function(error) {});
    });

    function updateSignInStatus(isSignedIn) {
        if (isSignedIn && document.querySelector('.wrapper_preview')) {
            let adminPanel = document.querySelector("#admin_panel");
            adminPanel.setAttribute("class", "visible");
            let div = document.querySelector('.wrapper_preview');

            div.onclick = function(e) {
                let input = document.createElement("input");
                input.setAttribute("class", "edit_input")
                let path = e.path || (e.composedPath && e.composedPath());
                if (e.target.localName === "h5") {
                    let id = e.target.parentNode;
                    let h5 = id.querySelector("h5");
                    input.value = h5.innerHTML;
                    h5.innerHTML = "";
                    h5.append(input);
                    input.focus();
                }
                if (e.target.localName === "img") {
                    input.value = e.target.src;
                    e.target.outerHTML = "";
                    path[1].append(input);
                    input.focus();
                }
                if (e.target.localName === "h6") {
                    let id = e.target.parentNode;
                    let h6 = id.querySelector("h6");
                    input.value = h6.innerHTML;
                    h6.innerHTML = "";
                    h6.append(input);
                    input.focus();
                }
                if (e.target.attributes.name) {
                    if (e.target.attributes.name.value === 'delete-cart') {
                        deleteCart(e.target.attributes['data-id'].value, item, spreadsheetId)
                    }
                }

                input.onblur = function() {
                    let goods = JSON.parse(localStorage.getItem(`goods${item}`));
                    let id = path[2].id;
                    if (e.target.localName === "h5") {
                        goods[id]["name"] = input.value;
                        localStorage.setItem(`goods${item}`, JSON.stringify(goods));
                        showGoods(goods);
                        makeApiCall(spreadsheetId, item);
                    }
                    if (e.target.localName === "img") {
                        goods[id].img = input.value;
                        localStorage.setItem(`goods${item}`, JSON.stringify(goods));
                        showGoods(goods);
                        makeApiCall(spreadsheetId, item);
                    }
                    if (e.target.localName === "h6") {
                        goods[id]["price"] = input.value;
                        localStorage.setItem(`goods${item}`, JSON.stringify(goods));
                        showGoods(goods);
                        makeApiCall(spreadsheetId, item);
                    }
                }
                addEdit();
            }
            addEdit();
        }
    }
}

function makeApiCall(spreadsheetId, item) {
    let goods = JSON.parse(localStorage.getItem(`goods${item}`));
    let arrValues = function(data) {
        let values = [
            [
                "id",
                "articul",
                "name",
                "img",
                "price",
            ]
        ]
        for (let key in data) {
            let arr = [key];
            for (let j = 1; j < values[0].length; j++) {
                arr.push(data[key][values[0][j]])
            }
            values.push(arr);
        }
        console.log(values);
        return values;
    }

    let params = {
        spreadsheetId: spreadsheetId,
        range: 'sheet1',
        valueInputOption: 'RAW',
    };

    let valueRangeBody = {
        "values": arrValues(goods)
    };

    let request = gapi.client.sheets.spreadsheets.values.update(params, valueRangeBody);
    request.then(function(response) {
        console.log(response.result);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function addEdit() {
    let edit = document.querySelectorAll(".edit");
    for (let i = 0; i < edit.length; i++) {
        edit[i].setAttribute("style", "display:inline");
    }
}

function deleteCart(id, item, spreadsheetId) {
    let goods = JSON.parse(localStorage.getItem(`goods${item}`));
    delete goods[id];
    localStorage.setItem(`goods${item}`, JSON.stringify(goods));
    showGoods(goods);
    makeApiCallDeleteCart(spreadsheetId, item);
}

export function addGoods(spreadsheetId, item) {
    let goods = JSON.parse(localStorage.getItem(`goods${item}`));
    let keys = Object.keys(goods);
    let maxId = 0;
    let maxArticul = 0;
    keys.forEach(function(element) {
        maxId = element >= maxId ? element : maxId;
        maxArticul = goods[`${element}`]["articul"] >= maxArticul ? goods[`${element}`]["articul"] : maxArticul;
    })

    goods[Number(maxId) + 1] = {
        "articul": String(Number(maxArticul) + 1),
        "comments": "",
        "img": "https://dimon713.ru/img/gear_pump_hydra_pack/Bezimyannij-150x150.png",
        "name": "Продукт",
        "price": "0",
        "show": ""
    };

    localStorage.setItem(`goods${item}`, JSON.stringify(goods));
    showGoods(goods);
    makeApiCall(spreadsheetId, item);
}

function authWithEmailAndPassword(email, password) {
    const apiKey = "AIzaSyCVopFFw0OoQTg9a4_32_H3vWW-WZChMvc";
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((data) => {
        console.log(data.ok);
        if (data.ok) {
            handleSignInClick();
        } else {
            fetch("https://dimon713-efd99.firebaseio.com/adminContent/email.json")
                .then((obj) => obj.json())
                .then((data) => {
                    if (data != email) {
                        console.log("Нет доступа!")
                    } else {
                        console.log("Неверный пароль!")
                    }
                })
        }
    })
}

function makeApiCallDeleteCart(spreadsheetId, item) {

    let params = {
        spreadsheetId: spreadsheetId,
        range: 'sheet1'
    };

    let batchClearValuesRequestBody = {};

    let request = gapi.client.sheets.spreadsheets.values.clear(params, batchClearValuesRequestBody);
    request.then(function(response) {
        console.log(response.result);
        makeApiCall(spreadsheetId, item);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}