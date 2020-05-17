window.onload = start;

function start() {
    let month = prompt("Введите номер месяца");
    let year = prompt("Введите год");
    createCalendar(year, month);
};

function createCalendar(myYear, myMonth) {
    let date = new Date(myYear, myMonth - 1);
    let month = date.getMonth();
    let year = date.getFullYear();
    let numberOfDaysInAMonth = new Date(year, month + 1, 0).getDate();

    let calendar = document.getElementById("calendar");
    calendar.innerHTML = "";

    let monthData = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let table = document.createElement("table");
    let headerTable = "<tr><th><button id='btnLeftYear'><<</button></th><th><button id='btnLeftMonth'><</button></th><th colspan='3'><div id='mmYY'></div></th><th><button id='btnRightMonth'>></button></th></th><th><button id='btnRightYear'>>></button></th></tr> <tr><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>";

    calendar.appendChild(table);

    let count = 0;
    let out = "";
    let numberOfDaysInALastMonth = new Date(year, month, 0).getDate();
    let dayLastMonth = numberOfDaysInALastMonth - (date.getDay() - 2);
    if (date.getDay() != 0) {
        for (let i = 1; i < date.getDay(); i++) {
            out += `<td class="white">${dayLastMonth++}</td>`;
            count++;
        }
    } else {
        dayLastMonth = dayLastMonth - 7;
        for (let i = 0; i < 6; i++) {
            out += `<td class="white">${dayLastMonth++}</td>`;
            count++;
        }
    }

    for (let i = 1; i <= numberOfDaysInAMonth; i++) {
        if (!count == 0 && count % 7 == 0) {
            out += "</tr><tr>";
        }
        out += `<td>${i}</td>`;
        count++;
        let dayNextMonth = 1;
        while (i == numberOfDaysInAMonth && count % 7 !== 0) {
            out += `<td class="white">${dayNextMonth++}</td>`;
            count++;
        }
    }
    out = headerTable + "<tr>" + out + "</tr>";
    table.innerHTML = out;

    let btnLeftYear = document.getElementById('btnLeftYear');
    let btnLeftMonth = document.getElementById('btnLeftMonth');
    let btnRightMonth = document.getElementById('btnRightMonth');
    let btnRightYear = document.getElementById('btnRightYear');
    let mmYY = document.getElementById('mmYY');

    mmYY.innerHTML = (monthData[month] + " " + year + " года");

    btnLeftYear.onclick = function() {
        createCalendar(year - 1, month + 1);
    }

    btnLeftMonth.onclick = function() {
        createCalendar(year, month);
    }

    btnRightYear.onclick = function() {
        createCalendar(year + 1, month + 1);
    }

    btnRightMonth.onclick = function() {
        createCalendar(year, month + 2);
    }
};