export const DirectionalValve = {
    id: "DirectionalValve",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="middle">
        
        <div class="content content_v2 sales directional_valve">
            <h2>Гидрораспределители</h2>
            <div class="wrapper_preview">
                <a href="#" class="preview"><img src="..//img/directional_valve/p3555-150x150.png"
                        alt="Распределители моноблочные"><span class="info">Распределители моноблочные</span></a>
                <a href="#" class="preview"><img src="..//img/directional_valve/pc70-150x150.png"
                        alt="Распределители секционные"><span class="info">Распределители секционные</span></a>
                <a href="#" class="preview"><img src="..//img/directional_valve/RPE3-06-150x150.jpg"
                        alt="Распределители модульные"><span class="info">Распределители модульные</span></a>
                <a href="#" class="preview"><img
                        src="..//img/directional_valve/-gidravlicheskij-s-elektromagnitnim-upravleniem-DVS6-62-e1506106068917-150x150.jpg"
                        alt="Диверторы"><span class="info">Диверторы</span></a>
                <a href="#" class="preview"><img
                        src="..//img/directional_valve/482663fea4cd259bc4aa4f5c27515a87-150x150.png" alt="Катушки"><span
                        class="info">Катушки</span></a>
                <a href="#" class="preview"><img src="..//img/directional_valve/proporc-150x150.png"
                        alt="Клапана пропорциональные"><span class="info">Клапана пропорциональные</span></a>
            </div>
            <p> Гидрораспределители служат для управления запуском, остановом и изменением направления потока рабочей
                жидкости под давлением.</p>
        </div>
        <div class="clear">
        </div>
    </div>
        </section>
      `;
    }
};