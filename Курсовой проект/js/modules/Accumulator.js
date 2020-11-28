export const Accumulator = {
    id: "Accumulator",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="middle">
       
        <div class="content content_v2 accumulator">
            <h2>Аккумуляторы</h2>
            <div class="wrapper_preview">
                <a href="#" class="preview"><img src="..//img/accumulator/product272-150x150.jpg" alt="Мембранные"><span
                        class="info">Мембранные</span></a>
                <a href="#" class="preview"><img
                        src="..//img/accumulator/952004863_w0_h0_csm_pic0000000__7fd836734d-150x150.jpg"
                        alt="Баллонные"><span class="info">Баллонные</span></a>
                <a href="#" class="preview"><img
                        src="..//img/accumulator/p18uilh8hakp944k1lnc1s7i15j7a_1407228350-150x150.jpg"
                        alt="Поршневые"><span class="info">Поршневые</span></a>
                <a href="#" class="preview"><img src="..//img/accumulator/3a-150x150.jpg" alt="Акссесуары"><span
                        class="info">Акссесуары</span></a>
            </div>
            <p> Гидроаккумуляторы -это устройства, которые сохраняют энергию в виде жидкости, находящейся под давлением.
                Эта энергия-вид потенциальной энергии несжимаемой жидкости, удерживаемой под давлением внешним
                источником от некоторой динамической нагрузки. Эта динамическая сила может возникнуть от трех различных
                источников: силы тяжести, механической пружины или сжатых газов. Сохраненная потенциальная энергия в
                аккумуляторе является вторичным источником гидравлической энергии, способным выполнять работу, как это
                требуется системе.</p>
        </div>

        <div class="clear">
        </div>
    </div>
        </section>
      `;
    }
};