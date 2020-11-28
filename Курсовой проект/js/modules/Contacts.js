export const Contacts = {
    id: "contacts",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="content contacts">
        <h2>Контакты</h2>
        <div class="wrapper_contacts">
            <div class="main_office">
                <h3>Головной офис</h3>
                <p>220026, г.Минск ул. Бехтерева, 5</p>
                <p>Телефоны:</p>
                <p>+375 17 222-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><a href="mailto:hydro@bpi.by">hydro@bpi.by </a><img src="..//img/index/email.png" alt="email">
                </p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="map">
                <div class="map_desktop">
                <div style="position:relative;overflow:hidden;"><a href="https://yandex.by/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс.Карты</a><a href="https://yandex.by/maps/?from=api-maps&ll=28.619122%2C53.327270&mode=usermaps&origin=jsapi_2_1_76&um=constructor%3A48b4f276b95f02eaf24988110802732eb866d8db85119aceda749b720515c833&utm_medium=mapframe&utm_source=maps&z=6" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — поиск мест и адресов, городской транспорт</a><iframe src="https://yandex.by/map-widget/v1/-/CCQhQJFcdD" width="450" height="400" frameborder="1" allowfullscreen="true" style="position:relative; border:none;"></iframe></div>
                </div>

                <div class="map_mob">
                <div style="position:relative;overflow:hidden;"><a href="https://yandex.by/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс.Карты</a><a href="https://yandex.by/maps/?from=api-maps&ll=28.619122%2C53.327270&mode=usermaps&origin=jsapi_2_1_76&um=constructor%3A48b4f276b95f02eaf24988110802732eb866d8db85119aceda749b720515c833&utm_medium=mapframe&utm_source=maps&z=6" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — поиск мест и адресов, городской транспорт</a><iframe src="https://yandex.by/map-widget/v1/-/CCQhQJFcdD" width="320" height="400" frameborder="1" allowfullscreen="true" style="position:relative; border:none;"></iframe></div>
                </div>
            </div>

            <div class="branch">
                <h3>Брест</h3>
                <p>224001 г. Брест, ул. О.Кошевого, 3</p>
                <p>Телефоны:</p>
                <p>+375 162 45-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>

            <div class="branch">
                <h3>Витебск</h3>
                <p>210038 г. Витебск, ул. Терешковой, 10</p>
                <p>Телефоны:</p>
                <p>+375 212 67-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Гомель</h3>
                <p>246067, г. Гомель, ул. Борисенко, 4, корп. 2</p>
                <p>Телефоны:</p>
                <p>+375 232 43-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>

            <div class="branch">
                <h3>Гродно</h3>
                <p>230001, г.Гродно, ул. Сокольская, 53</p>
                <p>Телефоны:</p>
                <p>+375 152 53-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Могилев</h3>
                <p>212008, г. Могилев, 4-й переулок Мечникова, 3</p>
                <p>Телефоны:</p>
                <p>+375 222 72-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>

            <div class="branch">
                <h3>Барановичи</h3>
                <p>225413, г. Барановичи, ул. Слонимское шоссе, 52</p>
                <p>Телефоны:</p>
                <p>+375 163 41-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Солигорск</h3>
                <p>Солигорский район, д.Кулаки, ул. Центральная, 55а</p>
                <p>Телефоны:</p>
                <p>+375 174 22-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Бобруйск</h3>
                <p>213800, г. Бобруйск, военный городок №2, "Ленгородок", пом. 2/247</p>
                <p>Телефоны:</p>
                <p>+375 225 22-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Борисов</h3>
                <p>222120, г. Борисов, ул. Демина, 6ж</p>
                <p>Телефоны:</p>
                <p>+375 177 942-955 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Жлобин</h3>
                <p>247210, г.Жлобин, ул. Шоссейная, 136</p>
                <p>Телефоны:</p>
                <p>+375 2334 222-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Кричев</h3>
                <p>213500, г.Кричев ул. Бирюзова д.12</p>
                <p>Телефоны:</p>
                <p>+375 2241 22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Лида</h3>
                <p>231300, г. Лида, ул. Химиков, 5А корп.2</p>
                <p>Телефоны:</p>
                <p>+375 154 22-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Мозырь</h3>
                <p>247760 г.Мозырь, ул. Иваненко, 8А</p>
                <p>Телефоны:</p>
                <p>+375 236 36-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Молодечно</h3>
                <p>222310, г.Молодечно, ул. Виленская, 35</p>
                <p>Телефоны:</p>
                <p>+375 176 72-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Орша</h3>
                <p>211391, г.Орша, ул. Белинского, 4</p>
                <p>Телефоны:</p>
                <p>+375 2161 5-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Пинск</h3>
                <p>225710, г.Пинск, ул. Индустриальная, 4Е</p>
                <p>Телефоны:</p>
                <p>+375 165 22-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Полоцк</h3>
                <p>211401, г.Полоцк, проезд Октябрьский, 9</p>
                <p>Телефоны:</p>
                <p>+375 214 70-22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="branch">
                <h3>Слоним</h3>
                <p>231795, г.Слоним ул. Советская, 58 В</p>
                <p>Телефоны:</p>
                <p>+375 1562 22-22 <img src="..//img/index/t-gor.png" alt="t-gor"></p>
                <p>+375 29 777-77-77 <img src="..//img/index/t-mts2.png" alt="t-mts"></p>
                <p>+375 44 666-66-66 <img src="..//img/index/t-vel2.png" alt="t-vel"></p>
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>
            <div class="wpapper_feedback">
                <h2>Отправить запрос</h2>
                <p>Отправьте запрос, используя предложенную ниже форму:</p>
                <form action="#" name="feedback" class="feedback">
                    <div class="feedback-group ">

                        <label class="feedback-label">
                            <span>Имя:</span>
                            <input class="feedback-input" type="text" placeholder="Введите Ваше имя">
                            <i class="far fa-user"></i>
                        </label>

                        <label class="feedback-label">
                            <span>Email:</span>
                            <input class="feedback-input" type="email" placeholder="Введите адрес Вашей почты">
                            <i class="far fa-envelope"></i>
                        </label>

                        <label class="feedback-label">
                            <span>Телефон:</span>
                            <input class="feedback-input" type="tel" placeholder="Введите номер телефона">
                            <i class="fas fa-mobile-alt"></i>
                        </label>

                        <label class="feedback-label">
                            <span>Филиал:</span>
                            <i class="fas fa-house-damage"></i>
                            <select class="feedback-input">
                                <option value="1">Минск</option>
                                <option value="2">Брест</option>
                                <option value="3">Витебск</option>
                                <option value="4">Гомель</option>
                                <option value="5">Гродно</option>
                                <option value="6">Могилев</option>
                                <option value="7">Барановичи</option>
                                <option value="8">Солигорск</option>
                                <option value="9">Бобруйск</option>
                                <option value="10">Борисов</option>
                                <option value="11">Жлобин</option>
                                <option value="12">Кричев</option>
                                <option value="13">Лида</option>
                                <option value="14">Мозырь</option>
                                <option value="15">Молодечно</option>
                                <option value="16">Орша</option>
                                <option value="17">Пинск</option>
                                <option value="18">Полоцк</option>
                                <option value="19">Слоним</option>
                            </select>
                        </label>
                        <label class="feedback-label">
                            <span>Сообщение:</span>
                            <textarea class="feedback-textarea" placeholder="Здравствуйте, БПИ! 
меня интересует... 
хочу купить, но хотел бы уточнить...
( оставьте запрос в удобной для вас форме )"></textarea>
                            <i class="fas fa-pen-alt"></i>
                        </label>
                        <label class="feedback-label">
                            <input class="feedback-button" type="submit">
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
        </section>
      `;
    },
};