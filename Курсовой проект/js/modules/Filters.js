export const Filters = {
    id: "Filters",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="middle">
       
        <div class="content content_v2 filters">
            <h2>Фильтры</h2>
            <div class="wrapper_preview">
                <a href="#" class="preview"><img src="..//img/filters/str-150x150.png" alt="Фильтра всасывающие"><span
                        class="info">Фильтра всасывающие</span></a>
                <a href="#" class="preview"><img src="..//img/filters/620-625-650-150x150.jpg"
                        alt="Фильтры спин-он"><span class="info">Фильтры спин-он</span></a>
                <a href="#" class="preview"><img src="..//img/filters/Beznazvaniya-150x150.jpg"
                        alt="Фильтр напорный "><span class="info">Фильтр напорный</span></a>
                <a href="#" class="preview"><img src="..//img/filters/filtr-150x150.jpg" alt="Фильтр сливной"><span
                        class="info">Фильтр сливной</span></a>
                <a href="#" class="preview"><img src="..//img/filters/86-150x150.jpg"
                        alt="Фильтровальная установка"><span class="info">Фильтровальная установка</span></a>
            </div>
            <p> Мы предлагаем со склада и под заказ фильтрэлементы оригинальные и альтернативные Hydac, Pall, Bosch
                Rexroth, EPE, Internormenn, Parker, Purolator, MP Filtry, Sofima, Stauff, UFI, OMT, Donaldson,
                Fleetguart, FAI, Sauer Danfoss, Mann Hummel, Mahle, Moog, WIX и др.</p>
        </div>
        <div class="clear">
        </div>
    </div>
        </section>
      `;
    }
};