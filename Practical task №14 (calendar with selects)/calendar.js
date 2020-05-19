window.onload = createHeader;

function createHeader() {
    let header = document.getElementById("header");
    let selectMonths = document.createElement("select");
    let selectMonthsStatus = false;
    let selectYearsStatus = false;
    let selectYears = document.createElement("select");
    header.append(selectMonths);
    header.append(selectYears);

    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let years = [];
    for (let i = 1980; i <= 2020; i++) {
        years.push(i);
    }
    let optionMonth = "<option>Выберите месяц</option>";
    for (let i = 0; i < months.length; i++) {
        optionMonth += `<option>${months[i]}</option>`;
    }
    selectMonths.innerHTML = optionMonth;

    let optionYear = "<option>Выберите год</option>";
    for (let i = 0; i < years.length; i++) {
        optionYear += `<option>${years[i]}</option>`;
    }
    selectYears.innerHTML = optionYear;

    let buttonAdd = document.createElement("button");
    buttonAdd.setAttribute("disabled", "true");
    buttonAdd.innerHTML = "Создать";
    header.append(buttonAdd);

    selectMonths.onchange = function(e) {
        if (e.target.value !== "Выберите месяц") {
            selectMonthsStatus = true;
        } else {
            selectMonthsStatus = false;
        }
        if (selectMonthsStatus && selectYearsStatus) {
            buttonAdd.removeAttribute("disabled");
        } else {
            buttonAdd.setAttribute("disabled", "true");
        }
    }
    selectYears.onchange = function(e) {
        if (e.target.value !== "Выберите год") {
            selectYearsStatus = true;
        } else {
            selectYearsStatus = false
        }
        if (selectMonthsStatus && selectYearsStatus) {
            buttonAdd.removeAttribute("disabled");
        } else {
            buttonAdd.setAttribute("disabled", "true");
        }
    }

    buttonAdd.onclick = function() {
        let myYear = selectYears.value;
        let myMonth;
        months.forEach(function(elem, i) {
            if (elem === selectMonths.value)
                myMonth = i + 1;
        })
        createCalendar(myYear, myMonth);
        buttonRemove.removeAttribute("disabled");
    }

    let buttonRemove = document.createElement("button");
    buttonRemove.innerHTML = "Удалить";
    header.append(buttonRemove);
    buttonRemove.setAttribute("disabled", "true");
    buttonRemove.onclick = function() {
        document.querySelector("#calendars .calendar:first-child").remove();
        if (!document.querySelector("#calendars .calendar")) {
            buttonRemove.setAttribute("disabled", "true");
        }
    }
}

function createCalendar(myYear, myMonth) {

    let uni = Math.floor(Math.random() * 100000);
    let calendars = document.getElementById("calendars");
    let calendar = document.createElement("div");
    let table = document.createElement("table");
    calendar.appendChild(table);
    calendars.append(calendar);
    calendar.setAttribute("id", `uni${uni}`);
    calendar.setAttribute("class", "calendar");
    View(myYear, myMonth);

    function View(myYear, myMonth) {
        table.innerHTML = "";
        let date = new Date(myYear, myMonth - 1);
        let month = date.getMonth();
        let year = date.getFullYear();
        let numberOfDaysInAMonth = new Date(year, month + 1, 0).getDate();
        let monthData = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        let headerTable = "<tr><th><button class='btnLeftYear'><<</button></th><th><button class='btnLeftMonth'><</button></th><th colspan='3'><div class='mmYY'></div></th><th><button class='btnRightMonth'>></button></th></th><th><button class='btnRightYear'>>></button></th></tr> <tr><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>";

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

        let btnLeftYear = document.querySelector(`#uni${uni} .btnLeftYear`);
        let btnLeftMonth = document.querySelector(`#uni${uni} .btnLeftMonth`);
        let btnRightMonth = document.querySelector(`#uni${uni} .btnRightMonth`);
        let btnRightYear = document.querySelector(`#uni${uni} .btnRightYear`);
        let mmYY = document.querySelector(`#uni${uni} .mmYY`);

        mmYY.innerHTML = (monthData[month] + " " + year + " года");

        btnLeftYear.onclick = function() {
            View(year - 1, month + 1);
        }

        btnLeftMonth.onclick = function() {
            View(year, month);
        }

        btnRightYear.onclick = function() {
            View(year + 1, month + 1);
        }

        btnRightMonth.onclick = function() {
            View(year, month + 2);
        }

        calendar.onclick = function(e) {
            if (Number(e.target.innerHTML)) {
                if (document.querySelector(`#uni${uni} .active`)) {
                    document.querySelector(`#uni${uni} .active`).classList.remove("active");
                    e.target.className = "active";
                } else {
                    e.target.className = "active";
                }
            }
        }
    }
};