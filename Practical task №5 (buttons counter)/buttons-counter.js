let buttonOne = document.getElementById("one");
let buttonTwo = document.getElementById("two");
let buttonThree = document.getElementById("three");

function makeCounter() {
    let count = 0;
    return function(e) {
        count++;
        e.target.innerHTML = count;
    }
}

let counterForButtonOne = makeCounter();
let counterForButtonTwo = makeCounter();
let counterForButtonThree = makeCounter();

buttonOne.onclick = counterForButtonOne;
buttonTwo.onclick = counterForButtonTwo;
buttonThree.onclick = counterForButtonThree;

// <button id="one" onclick="counterForButtonOne()">0</button> <--Такой вариант не работал, событие не передавалось. Уточнить.