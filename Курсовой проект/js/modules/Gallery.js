export const Gallery = {
    id: "gallery",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="content">
        <h2 style="text-align: center;">Галерея работ</h2>

        <div class="gallery">
            <a href="img/gallery/big_gidro/1_big.jpg" data-fancybox="gal" class="photo">
                <img src="img/gallery/small_gidro/1.jpg" alt="Гидростанция. Передвижная"
                    title="Гидростанция. Передвижная" />
            </a>
            <a href="img/gallery/big_gidro/2_big.jpg" data-fancybox="gal" class="photo">
                <img src="img/gallery/small_gidro/2.jpg" alt="Фильтровальная установка"
                    title="Фильтровальная установка" />
            </a>
            <a href="img/gallery/big_gidro/3_big.jpg" data-fancybox="gal" class="photo">
                <img src="img/gallery/small_gidro/3.jpg" alt="Гидростанция. Бак из алюминия"
                    title="Гидростанция. Бак из алюминия" />
            </a>
            <a href="img/gallery/big_gidro/4_big.jpg" data-fancybox="gal"  class="photo">
                <img src="img/gallery/small_gidro/4.jpg" alt="Минигидростанция" title="Минигидростанция" />
            </a>
            <a href="img/gallery/big_gidro/5_big.jpg" data-fancybox="gal"  class="photo">
                <img src="img/gallery/small_gidro/5.jpg" alt="Гидростанция. Бак 500литров"
                    title="Гидростанция. Бак 500литров" />
            </a>
            <a href="img/gallery/big_gidro/6_big.jpg" data-fancybox="gal" class="photo">
                <img src="img/gallery/small_gidro/6.jpg" alt="Минигидростанция. Производство"
                    title="Минигидростанция. Производство" />
            </a>
            <a href="img/gallery/big_gidro/7_big.jpg" data-fancybox="gal" class="photo">
                <img src="img/gallery/small_gidro/7.jpg" alt="Гидростанция. Argo-Hytos"
                    title="Гидростанция. Argo-Hytos" />
            </a>
            <a href="img/gallery/big_gidro/8_big.jpg" data-fancybox="gal" class="photo">
                <img src="img/gallery/small_gidro/8.jpg" alt="Гидростанция. Горизонтальная силовая установка"
                    title="Гидростанция. Горизонтальная силовая установка" />
            </a>
            <a href="img/gallery/big_gidro/9_big.jpg" data-fancybox="gal" class="photo">
                <img src="img/gallery/small_gidro/9.jpg" alt="Гидростанция. Насос трибл"
                    title="Гидростанция. Насос трибл" />
            </a>
            <a href="img/gallery/big_gidro/10_big.jpg" data-fancybox="gal" class="photo">
                <img src="img/gallery/small_gidro/10.jpg" alt="Гидростанция. Замер производительности"
                    title="Гидростанция. Замер производительности" />
            </a>
            <a href="img/gallery/big_gidro/11_big.jpg" data-fancybox="gal" class="photo">
                <img src="img/gallery/small_gidro/11.jpg" alt="Гидростанция. Учебный стенд"
                    title="Гидростанция. Учебный стенд" />
            </a>
            <a href="img/gallery/big_gidro/12_big.jpg" data-fancybox="gal"  class="photo">
                <img src="img/gallery/small_gidro/12.jpg" alt="Гидростанция. Учебный стенд"
                    title="Гидростанция. Учебный стенд" />
            </a>
        </div>
    </div>
    </section>`;
    },
};