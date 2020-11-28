export const ProductionPowerPack = {
    id: "ProductionPowerPack",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="middle">

        <div class="content content_v2 production_power_pack">
            <h2>Производство гидростанций</h2>
            <div class="wrapper_preview">
                <a href="#" class="preview"><img src="..//img/production_power_pack/min-150x150.png"
                        alt="Минигидростанции"><span class="info">Минигидростанции</span></a>
                <a href="#" class="preview"><img src="..//img/production_power_pack/standart-150x150.jpg"
                        alt="Стандартные гидростанции"><span class="info">Стандартные гидростанции</span></a>
                <a href="#" class="preview"><img src="..//img/production_power_pack/special-150x150.jpg"
                        alt="Специальные гидравлические станции"><span class="info">Специальные гидравлические
                        станции</span></a>
                <a href="gallery.html" class="preview"><img src="..//img/production_power_pack/487_big-150x150.jpg"
                        alt="Реализованные проекты"><span class="info">Реализованные проекты</span></a>
            </div>
            <p> C 2012 на базе БПИ было запущено производство гидростанций. За неполные четыре года мы
                спроектировали, произвели и поставили нашим клиентам более 800 гидростанций.</p>
            <p> В подразделении имеется выездная бригада по ремонту гидростанций и обслуживанию гидротехники, что
                позволяет проводить ремонтные работы и обслуживание гидравлических станций и крупногабаритных механизмов
                непосредственно на территории заказчика. Филиалы нашей компании расположены в 19 городах Республики
                Беларусь (Витебск, Брест, Гродно, Гомель, Могилев, Молодечно, Барановичи, Мозырь, Пинск, Бобруйск,
                Полоцк, Солигорск ), что позволяет в максимально короткие сроки осуществлять доставку необходимых
                запасных частей нашим клиентам. БПИ будет радо видеть и Ваше предприятие среди наших
                клиентов и партнеров.
            </p>
            <h3>Маслостанция. Основные конструктивные элементы.</h3>
            <div class="gidrostancia"><img src="..//img/production_power_pack/gidrostancia.jpg" alt="гидростанция">
                <ul>
                    <li>Гидробак</li>
                    <li>Насос шестеренный</li>
                    <li>Электродвигатель</li>
                    <li>Панель с гидравлической аппаратурой</li>
                    <li>Входной фильтр</li>
                    <li>Выходной фильтр</li>
                    <li>Визуальный уровнемер</li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
    </div>
        </section>
      `;
    }
};