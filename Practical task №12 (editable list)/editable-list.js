function makeUl(...args) {
    let ul = document.getElementById('list');
    let out = "";
    for (let i = 0; i < args.length; i++) {
        out += `<li id="${i+1}">${args[i]}</li>`
    }
    ul.innerHTML = out;
}

let arrList = [];

let btnAdd = document.getElementById("add");
let btnRemove = document.getElementById("remove");
let inputIn = document.getElementById("in");
let ol = document.getElementById('list');

btnAdd.onclick = function() {
    let inValue = document.getElementById("in").value;
    if (inValue) {
        arrList.push(inValue);
        btnRemove.removeAttribute("disabled");
        inputIn.value = "";
        makeUl(...arrList);
    } else {
        inputIn.setAttribute("placeholder", "Введите значение");
    }
}

btnRemove.onclick = function() {
    arrList.pop();
    makeUl(...arrList);
    if (!arrList.length) {
        btnRemove.setAttribute("disabled", "true");
    }
}

ol.onclick = function(e) {
    let li = document.getElementById(`${e.target.id}`);
    let input = document.createElement("input");
    if (e.target.localName === "li") {
        input.value = e.target.innerHTML;
        e.target.innerHTML = "";
        li.append(input);
        input.focus();
    }
    input.onblur = function() {
        arrList[e.target.id - 1] = input.value;
        makeUl(...arrList);
    }
}

btnAdd.setAttribute("style", "border-radius:5px; padding:5px");
btnRemove.setAttribute("style", "border-radius:5px; padding:5px");
inputIn.setAttribute("style", "border-radius:5px; padding:5px");