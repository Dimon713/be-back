export const PumpMotor = {
    id: "PumpMotor",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="middle">
        
        <div class="content content_v2 pump_motor">
            <h2>Гидронасосы и гидромоторы</h2>
            <div class="wrapper_preview">
                <a href="#gear_pump_hydra_pack" class="preview"><img src="..//img/pump_motor/Bezimyannij-150x150.png"
                        alt="Шестеренный насос"><span class="info">Шестеренный насос</span></a>
                <a href="#axial_pump_hydra_pack" class="preview"><img src="..//img/pump_motor/828917111_w640_h640_a2fo_br6x_main__to_rgb.big-150x150.jpg"
                        alt="аксиальный насос"><span class="info">Аксиально-поршневой насос</span></a>
                <a href="#" class="preview"><img src="..//img/pump_motor/1287738212_series-vqh-150x150.jpg"
                        alt="пластинчатый насос"><span class="info">Пластинчатый насос</span></a>
                <a href="#" class="preview"><img src="..//img/pump_motor/77-150x150.jpeg" alt="радиальный насос"><span
                        class="info">Радиально-поршневой насос</span></a>
                <a href="#" class="preview"><img src="..//img/pump_motor/768c9e5dcb76faec556a6cbe70e663ed-150x150.jpg"
                        alt="героторный мотор"><span class="info">Героторный гидромотор</span></a>
                <a href="#" class="preview"><img src="..//img/pump_motor/ruchnoj-150x150.png" alt="ручной насос"><span
                        class="info">Ручной насос</span></a>
            </div>
            <p> БПИ предлагает гидравлические насосы и моторы со склада и под заказ различных видов и производителей.
            </p>
            <ul>
                <li>Шестеренные по европейского стандарту Gr0, Gr1, Gr2, Gr3</li>
                <li>Шестеренные многосекционные, специальные</li>
                <li>Аксиально-поршневые нерегулируемые и регулируемые</li>
                <li>Пластинчатые и радиально-поршневые</li>
                <li>Героторные</li>
                <li>Ручные насосы</li>
            </ul>
            <p>Если не удается найти интересующее Вас изделие, позвоните в наш офис и наши инженеры подскажут где именно
                находится интересующий Вас раздел каталога.</p>
            <h3>Подбор гидравлического насоса</h3>
            <p>Также мы можем провести подбор аналога и замену гидравлического оборудования других производителей.
                Просто отправьте нам заявку с кодом изделия Вашего производителя, которое Вы хотели бы заменить, и наши
                инженеры оперативно свяжутся с Вами и предложат замену из нашей номенклатуры.</p>

        </div>
        <div class="clear">
        </div>
    </div>
        </section>
      `;
    }
};