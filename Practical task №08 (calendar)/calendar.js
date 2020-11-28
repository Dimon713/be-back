window.onload = createCalendar;

function createCalendar() {
    let month = prompt("Введите номер месяца");
    let year = prompt("Введите год");

    let date = new Date(year, month - 1);
    let numberOfDaysInAMonth = new Date(year, month, 0).getDate();

    let calendar = document.getElementById("calendar");

    let mmYY = document.createElement("div");
    mmYY.setAttribute("class", "mmYY");
    calendar.appendChild(mmYY);
    let monthData = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    mmYY.innerHTML = (monthData[month - 1] + " " + year + " года");

    let table = document.createElement("table");
    calendar.appendChild(table);
    let th = "<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>";

    let count = 0;
    let out = "";
    if (date.getDay() != 0) {
        for (let i = 1; i < date.getDay(); i++) {
            out += `<td></td>`;
            count++;
        }
    } else {
        for (let i = 0; i < 6; i++) {
            out += `<td></td>`;
            count++;
        }
    }

    for (let i = 1; i <= numberOfDaysInAMonth; i++) {
        if (count !== 0 && count % 7 == 0) {
            out += "</tr><tr>";
        }
        out += `<td>${i}</td>`;
        count++;
        while (i == numberOfDaysInAMonth && count % 7 !== 0) {
            out += "<td></td>";
            count++;
        }
    }
    our = "<tr>" + out + "</tr>";
    out = th + out;
    table.innerHTML = out;
};