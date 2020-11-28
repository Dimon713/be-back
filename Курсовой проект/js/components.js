const Header = {
    render: () => {
        return `
        <header>
        <div class="header_slider">
            <div class="slider">
                <div><img src="img/header_slider/hydraulic-power-pack-slide_1200_300_80.jpg" alt="slider_power-pack">
                </div>
                <div><img src="img/header_slider/hydraulic-accumulators-slide_1200_300_80.jpg" alt="slider_accumulators"></div>
                <div><img src="img/header_slider/hydraulic-hose-slide_1200_300_80.jpg" alt="slider_hose"></div>
            </div>
        </div>

        <div class="header_left_section">

            <div class="header_logo">
                <h1><a href="#main">БПИ</a></h1>
            </div>

            <div class="header__activity_company">
                <h3>Промышленная гидравлика</h3>
                <p>Инжиниринг, сервис, продажи</p>
            </div>

            <div class="header__working_hours">
                <p><strong>Время работы:</strong></p>
                <p>8 <sup>00</sup>&ndash;16 <sup>45</sup> </p>
                <p>Суббота, воскресенье: выходной</p>
            </div>

            <div class="header__address_company">
                <p>г. Минск, ул. Бехтерева, 5</p>

                <p><a href="tel:+375172222222">+375 17 <strong>222-22-22</strong>
                        <img src="img/index/t-gor.png" alt="t-gor"></a>
                </p>

                <p><a href="tel:+375297777777">+375 29 <strong>777-77-77</strong>
                        <img src="img/index/t-mts2.png" alt="t-mts"></a>
                </p>

                <p><a href="tel:+375446666666">+375 44 <strong>666-66-66</strong>
                        <img src="img/index/t-vel2.png" alt="t-vel"></a>
                </p>
                <p><strong><a href="mailto:hydro@bpi.by" style="color:black">hydro@bpi.by</a></strong>
                    <img src="img/index/email.png" alt="email">
                </p>
            </div>
        </div>
    </header>
    `
    }
};

const Nav = {
    render: () => {
        return `
        <nav class="nav-hor" id="nav">
        <ul class="mainmenu__list">
            <li><a class="mainmenu__link" href="#main">На главную</a></li>
            <li class="drop_down"><a><span>Услуги и товары</span></a>
                <ul class="menu">
                    <li><a>Инжиниринг</a>  
                        <ul>
                            <li><a href="#engineering_hydraulic_systems">Проектирование гидросистем</a>
                            </li>
                            <li><a href="#engineering_power_pack">Проектирование гидростанций</a></li>
                            <li><a href="#production_power_pack">Производство гидростанций</a></li>
                        </ul>
                    </li>

                    <li><a>Сервис гидравлики</a>
                        <ul>
                            <li><a href="#hydraulics_diagnostics">Диагностика и ремонт</a></li>
                            <li><a href="#service_center">Сервисный центр</a></li>
                            <li><a href="#hydrofication">Гидрофикация</a></li>
                        </ul>
                    </li>

                    <li><a>Продажа</a>
                        <ul>
                            <li><a href="#pump_motor">Гидронасосы, гидромоторы</a></li>
                            <li><a href="#valve">Гидроклапаны</a></li>
                            <li><a href="#directional_valve">Гидрораспределители</a></li>
                            <li><a href="#hydraulics_accessories">Аксессуары для гидравлики</a></li>
                            <li><a href="#accumulator">Гидроаккумуляторы</a></li>
                            <li><a href="#radiators">Теплообменники</a></li>
                            <li><a href="#filters">Фильтры</a></li>
                        </ul>
                    </li>
                </ul>

            </li>
            <li><a class="mainmenu__link" href="#about">О компании</a></li>
            <li><a class="mainmenu__link" href="#gallery">Галерея</a></li>
            <li><a class="mainmenu__link" href="#suppliers">Поставщики</a></li>
            <li><a class="mainmenu__link" href="#contacts">Контакты</a></li>
            <li><a class="mainmenu__link" href="#shopping_cart">Корзина<span id="pieses_goods" style="display:none"></span></a></li>
        </ul>
        <a href="javascript:void(0);" class="icon" onclick="openMenu()"> <i class="fa fa-bars"></i></a>
    </nav>
        `
    }
}

const Content = {
    render: () => {
        return `<div class="middle" id="middle"></div>`;
    }
};

const Footer = {
    render: () => {
        return `
        <footer>
        <p>2020
        <a id="signin-button">&copy;</a>
        <a href="https://docs.google.com/spreadsheets/d/1O-3EId-cgt_W8keu3oAdDINPjUf-QvYzNhwoBiDaNLg/edit?usp=sharing" target="_blank">ОOО</a> &laquo;БПИ&raquo;
    </p>
    </footer>`
    }
};