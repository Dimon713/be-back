export const About = {
    id: "about",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="content about">
        <h2>О нас</h2>
        <img src="..//img/about/about1.jpg" alt="О нас" class="img_about">
        <ul>
            <li>На рынке с 1992 года</li>
            <li>более 400 сотрудников высокого профессионального уровня </li>
            <li>крупнейший в Беларуси склад запчастей и деталей- более 15000 наименований</li>
            <li>собственный кострукторский отдел</li>
            <li>собственный сервисный отдел</li>
            <li>25 выездный бригад</li>
            <li>Гарантия на продаваемую продукцию и запчасти от 12 месяцев</li>
            <li>Гарантия на выполненные работы по ремонту гидравлики</li>
            <li>Прямые поставки с заводов из Европы, Украины и России</li>
            <li>Гибкая система скидок постоянным клиентам</li>
            <li>19 филиалов в следующих городах Республики Беларусь: </li>
        </ul>
        <div class="wrap_map">
        <div style="position:relative;overflow:hidden;"><a href="https://yandex.by/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс.Карты</a><a href="https://yandex.by/maps/?from=api-maps&ll=28.619122%2C53.327270&mode=usermaps&origin=jsapi_2_1_76&um=constructor%3A48b4f276b95f02eaf24988110802732eb866d8db85119aceda749b720515c833&utm_medium=mapframe&utm_source=maps&z=6" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — поиск мест и адресов, городской транспорт</a><iframe src="https://yandex.by/map-widget/v1/-/CCQhQJFcdD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative; border:none;"></iframe></div>
        </div>

    </div>
    <div class="clear">
    </div>
        </section>
      `;
    },
};