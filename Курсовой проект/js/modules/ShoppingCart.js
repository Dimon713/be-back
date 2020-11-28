export const ShoppingCart = {
    id: "shopping_cart",
    title: `OOО "БПИ" гидравлическое оборудование - поставки, cервис, ремонт в Беларуси`,
    render: (className = "container", ...rest) => {
        return `
        <section class="${className}">
        <div class="content cart">
            <ul class="cartView"></ul>
            <div class="wpapper_feedback">
                <h2 style="text-align:center">Форма заказа</h2>
                <p style="text-align:center">Для заказа заполните форму и нажмите отправить:</p>
                <form id="form_cart" name="feedback" class="feedback">
                    <div class="feedback-group ">

                        <label class="feedback-label">
                            <span>Имя:</span>
                            <input class="feedback-input" type="text" id="user" placeholder="Введите Ваше имя">
                            <div class="err-message userErr"></div>
                            <i class="far fa-user"></i>
                        </label>

                        <label class="feedback-label">
                            <span>Email:</span>
                            <input class="feedback-input" type="email" id="email"
                                placeholder="Введите адрес Вашей почты">
                                <div class="err-message emailErr"></div>
                            <i class="far fa-envelope"></i>
                        </label>

                        <label class="feedback-label">
                            <span>Телефон:</span>
                            <input class="feedback-input" type="tel" id="tel"
                                placeholder="Введите номер телефона">
                                <div class="err-message telErr"></div>
                            <i class="fas fa-mobile-alt"></i>
                        </label>
                        <label class="feedback-label">
                            <span>Комментарий:</span>
                            <textarea class="feedback-textarea" id="customer-text" placeholder="Здравствуйте, БПИ!"></textarea>
                            <i class="fas fa-pen-alt"></i>
                        </label>
                        <label class="feedback-label">
                            <input class="feedback-button" type="submit" id="buy" name="buy" onclick="return false">
                        </label>
                    </div>
                </form>
    </div>
        </section>
      `;
    },
    init: () => {
        import ("../cart.js")
        .then(module => {
                module.showCart();
                module.initClick();
            })
            .catch(err => err)
    }
};