export const HydraulicsAccessories = {
    id: "HydraulicsAccessories",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="middle">
       
        <div class="content content_v2 sales hydraulics_accessories">
            <h2>Аксессуары для гидравлики</h2>
            <div class="wrapper_preview">
                <a href="#" class="preview"><img src="..//img/hydraulics_accessories/329_LR-150x150.jpg"
                        alt="Баки"><span class="info">Баки</span></a>
                <a href="#" class="preview"><img src="..//img/hydraulics_accessories/LS-150x150.png"
                        alt="Колокола"><span class="info">Колокола</span></a>
                <a href="#" class="preview"><img
                        src="..//img/hydraulics_accessories/mufta-dlya-soedineniya-nasosa-s-elektrodvigatelem-2-150x150.jpg"
                        alt="Полумуфты"><span class="info">Полумуфты</span></a>
                <a href="#" class="preview"><img src="..//img/hydraulics_accessories/R-132-150x150.png"
                        alt="Упругий элемент"><span class="info">Упругий элемент</span></a>
                <a href="#" class="preview"><img src="..//img/hydraulics_accessories/yr-150x150.png"
                        alt="Уровнемеры"><span class="info">Уровнемеры</span></a>
                <a href="#" class="preview"><img src="..//img/hydraulics_accessories/zaliv-150x150.jpg"
                        alt="Заливные горловины"><span class="info">Заливные горловины</span></a>
            </div>
            <p> Мы поставляем в комплексе гидравлические аксессуары без которых гидросистема не может быть завершена -
                заливные горловины для бака, сапуны и воздушные фильтры с заливной горловиной, указатели уровня
                визуальные и электрические, индикаторы уровня, тестовые точки для монометров, прижимы для трубопроводов,
                фланцы, муфты, колокола, фитинги и много другое.</p>
        </div>

        <div class="clear">
        </div>
    </div>
        </section>
      `;
    }
};