class HashStorage {
    constructor() {
        this._dataBase = {};
    }

    addValue = function(key, value) {
        this._dataBase[key] = value;
    }

    getValue = function(key) {
        return this._dataBase[key];
    }

    deleteKey = function(key) {
        if (key in this._dataBase) {
            delete this._dataBase[key];
            return true;
        } else {
            return false;
        }
    }

    getKeys = function() {
        return Object.keys(this._dataBase);
    }
}

let coctailsStorage = new HashStorage();

window.onload = function() {
    let buttonAddKey = document.getElementById("addValue");
    let buttonGetValue = document.getElementById("getValue");
    let buttonDeleteKey = document.getElementById("deleteValue");
    let buttonGetAllKeys = document.getElementById("getKeys");

    buttonAddKey.onclick = function() {
        let value = {};
        let nameOfDrink = prompt("Введите название напитка:");
        coctailsStorage.addValue(nameOfDrink, {});

        let alcoholic = prompt("Алкогольный?");
        value["alcoholic"] = alcoholic;

        let ingredients = [];
        let ingredient;
        do {
            ingredient = prompt("Какие ингредиенты необходимы и в каких пропорциях:");
            if (ingredient) {
                ingredients.push(ingredient);
            }
            value["ingredients"] = ingredients;
        }
        while (ingredient);

        let recipe = prompt("Рецепт его приготовления :");
        value["recipe"] = recipe;
        coctailsStorage.addValue(nameOfDrink, value);
    };

    buttonGetValue.onclick = function() {
        let drink = prompt("Введите название напитка:");
        let data = coctailsStorage._dataBase;
        if (data[drink]) {
            view(drink, data[drink]["alcoholic"], data[drink]["ingredients"], data[drink]["recipe"]);
        } else {
            alert('Такой коктейль не найден');
        }
    }

    buttonDeleteKey.onclick = function() {
        let nameOfDrink = prompt("Введите название напитка:");
        if (coctailsStorage.deleteKey(nameOfDrink)) {
            alert(`Рецепт ${nameOfDrink} удален!`);
        } else {
            alert(`Рецепт ${nameOfDrink} не найден!`);
        }
    }

    buttonGetAllKeys.onclick = function() {
        let allkeys = document.getElementById("allKeys");
        let arrAllKey = coctailsStorage.getKeys();
        let out = '';
        out += "<p>";
        out += "<b>Список коктейлей:</b> ";
        arrAllKey.forEach(function(item) {
            out += item + " ";
        });
        out += "</p>";
        allkeys.innerHTML = out;
    }

    function view(nameOfDrink, alcoholic, ingredients, recipe) {
        let view = document.getElementById("view");
        let i = document.getElementsByClassName("drink");
        let out = '';
        out += "<p class=drink>";
        out += `${i.length+1}. Коктейль <b>"${nameOfDrink}"</b> (алкогольный: ${alcoholic})`;
        out += "</p>";
        out += "<p>Необходимые ингредиенты:</p>";
        for (let i = 0; i < ingredients.length; i++) {
            out += "<p>";
            out += ingredients[i];
            out += "</p>";
        }
        out += "<p>Рецепт приготовления:</p>";
        out += "<p>"
        out += recipe;
        out += "</p>"
        view.innerHTML += out;
    }
}