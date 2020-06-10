function WheatherWidget(_cityID) {
    this.cityID = _cityID;
    this.apiUrl = "https://api.openweathermap.org/data/2.5/";
    this.apiKey = "3c966ee6b5888b4a370c2ce761f0584f";

    this.create = function() {
        let main = document.querySelector(".main");
        main.innerHTML = "<div class='wheather_widget'><div class='dd_mm_yyyy'></div><div class='one_day'></div><div class='three_days'></div></div>";
        let wheatherWidget = document.querySelector(".wheather_widget");
        let btnClose = document.createElement("input");
        btnClose.setAttribute("type", "button");
        btnClose.value = "x";
        btnClose.setAttribute("class", "btn_close");
        wheatherWidget.append(btnClose);

        btnClose.onclick = function() {
            let main = document.querySelector(".main");
            main.remove();
        }

        let dateNow = document.querySelector('.dd_mm_yyyy');
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (day < 10) {
            day = '0' + day
        };
        if (month < 10) {
            month = '0' + month
        };
        if (year < 10) {
            year = '0' + year
        };
        dateNow.innerHTML = "Сегодня: " + day + "." + month + "." + year;
    }

    this.getWeatherOneDay = function() {
        let btn = document.createElement("input");
        let oneDay = document.querySelector(".one_day");
        let loading = document.createElement('img');
        oneDay.innerHTML = "";
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "btn_3days")
        btn.value = "Погода на 3 дня";
        loading.setAttribute("class", "loading");
        loading.setAttribute("src", "loading.gif");
        oneDay.append(loading);

        btn.onclick = () => {
            this.getWeatherThreeDay();
            btn.value = "скрыть";
            btn.onclick = () => {
                let threeDays = document.querySelector(".three_days");
                threeDays.innerHTML = "";
                btn.value = "Погода на 3 дня";
                this.getWeatherOneDay();
            }
        }

        if (!this.cityID) {
            this.cityID = 625144;
        }

        fetch(this.apiUrl + "/weather?id=" + this.cityID + "&units=metric&lang=ru&appid=" + this.apiKey)
            .then(data => {
                if (data.status !== 200) {
                    console.log('Что - то пошло не так: ' + data.status);
                    return;
                }
                data.json().then(data => {
                    renderOneDay(data);
                });
            })
            .catch(error => console.error("Ошибка получение погоды. Причина: " + error));

        function renderOneDay(data) {
            let oneDay = document.querySelector(".one_day");
            let out = "";
            out += "<ul>";
            out += `<li class="city">Город: ${data.name}</li>`;
            out += `<li class="temp">${Math.round(data.main.temp)}${"&#8451"}</li>`;
            out += `<li><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"></img></li>`;
            out += `<li>${data.weather[0]["description"]}</li>`;
            out += `<li>Ветер: ${data.wind.speed} м/с</li>`;
            out += "</ul>";
            oneDay.innerHTML = out;
            oneDay.append(btn);
        }

        oneDay.onclick = (e) => {
            let li = document.querySelector(".city");
            let select = document.createElement("select");
            select.setAttribute("class", "select_city");
            select.innerHTML = "<option>Брест</option><option>Витебск</option><option>Гомель</option><option>Гродно</option><option>Минск</option><option>Могилёв</option>"
            switch (e.target.innerHTML.slice(7)) {
                case "Брест":
                    select.value = "Брест";
                    break;
                case "Витебск":
                    select.value = "Витебск";
                    break;
                case "Gomel’":
                    select.value = "Гомель";
                    break;
                case "Гродно":
                    select.value = "Гродно";
                    break;
                case "Минск":
                    select.value = "Минск";
                    break;
                case "Могилёв":
                    select.value = "Могилёв";
                    break;
            }
            if (e.target.classList[0] === "city") {
                li.innerHTML = "Город: ";
                li.append(select);
            }
            select.onblur = () => {
                let select = document.querySelector(".select_city");
                switch (select.value) {
                    case "Брест":
                        this.cityID = 629634;
                        update();
                        break;
                    case "Витебск":
                        this.cityID = 620127;
                        update();
                        break;
                    case "Гомель":
                        this.cityID = 627907;
                        update();
                    case "Гродно":
                        this.cityID = 627904;
                        update();
                        break;
                    case "Минск":
                        this.cityID = 625143;
                        update();
                        break;
                    case "Могилёв":
                        this.cityID = 625665;
                        update();
                        break;
                }
            }
            let it = this;

            function update() {
                it.getWeatherOneDay();
                let threeDays = document.querySelector(".three_days");
                threeDays.innerHTML = "";
                btn.value = "Погода на 3 дня";
            }
        }
    }


    this.getWeatherThreeDay = function() {
        if (!this.cityID) {
            this.cityID = 625144;
        }
        let threeDays = document.querySelector(".three_days");
        let loading = document.createElement('img');
        loading.setAttribute("class", "loading");
        loading.setAttribute("src", "loading.gif");
        threeDays.append(loading);
        fetch(this.apiUrl + "/forecast?id=" + this.cityID + "&units=metric&lang=ru&appid=" + this.apiKey)
            .then(data => {
                if (data.status !== 200) {
                    console.log('Что - то пошло не так: ' + data.status);
                    return;
                }
                data.json().then(data => {
                    let weatherThreeDaysAhead = [];
                    data.list.forEach(element => {
                        if (element.dt_txt[11] + element.dt_txt[12] == 12) {
                            if (weatherThreeDaysAhead.length < 3) {
                                weatherThreeDaysAhead.push(element);
                            }
                        }
                    });
                    renderThreeDays(weatherThreeDaysAhead)
                });
            })
            .catch(error => console.error("Ошибка получение погоды. Причина: " + error));

        function renderThreeDays(data) {
            let threeDays = document.querySelector(".three_days");
            let out = "";
            data.forEach(element => {
                out += "<div class='future'>";
                out += "<ul>";
                out += `<li>${element.dt_txt[8]+element.dt_txt[9]}/${element.dt_txt[5]+element.dt_txt[6]}</li>`;
                out += `<li>${Math.round(element.main.temp)}${"&#8451"}</li>`;
                out += `<li>${element.weather[0].description}</li>`;
                out += `<li><img src="http://openweathermap.org/img/w/${element.weather[0].icon}.png"></img></li>`;
                out += `<li>Ветер: ${Math.round(element.wind.speed)} м/с</li>`;
                out += "</ul>";
                out += "</div>";
            })
            threeDays.innerHTML = out;
        }
    }

    this.getWeather = function() {
        this.create();
        this.getWeatherOneDay();
    }
}