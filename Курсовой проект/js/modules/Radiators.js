export const Radiators = {
    id: "Radiators",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="middle">
        
        <div class="content content_v2 radiators">
            <h2>Теплообменники</h2>
            <div class="wrapper_preview">
                <a href="#" class="preview"><img src="..//img/radiators/ro.png" alt="Серия RO"><span class="info">Серия
                        RO</span></a>
                <a href="#" class="preview"><img src="..//img/radiators/serie-ral.png" alt="Серия RAL"
                        style="margin-bottom: 11px;"><span class="info">Серия RAL</span></a>
                <a href="#" class="preview"><img src="..//img/radiators/seriera.jpg" alt="Серия RA"><span
                        class="info">Серия RA</span></a>
                <a href="#" class="preview"><img src="..//img/radiators/serierc.jpg" alt="Серия RC"><span
                        class="info">Серия RC</span></a>
                <a href="#" class="preview"><img src="..//img/radiators/serierf.jpg" alt="Серия RF"><span
                        class="info">Серия RF</span></a>
                <a href="#" class="preview"><img src="..//img/radiators/serierp.jpg" alt="Серия RP"><span
                        class="info">Серия RF</span></a>
                <a href="#" class="preview"><img src="..//img/radiators/seriers.jpg" alt="Серия RS"
                        style="margin-bottom: 11px;"><span class="info">Серия RS</span></a>
            </div>
            <p> С начала 80-х IRA Radiatori Engineering разрабатывает, производит и продает теплообменники для различных
                промышленных и сельскохозяйственных применений. IRA Radiatori Engineering разрабатывает и производит
                широкий спектр теплообменников, разнообразных по применению, производительности и размерам.</p>
        </div>
        <div class="clear">
        </div>
    </div>
        </section>
      `;
    }
};