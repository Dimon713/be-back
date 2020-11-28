export function ValidForm() {
    let form = document.forms.form_cart;
    form.oninput = (event) => validate(event.target);
    let user = form.user;
    let email = form.email;
    let tel = form.tel;

    function validate(field) {
        switch (field.type) {
            case "email":
                if (field.value.indexOf('@') === -1 || field.value.indexOf('.') === -1) {
                    field.classList.add('err');
                    errMessage(field, 1);
                    return false;
                } else {
                    field.classList.remove('err');
                    errMessage(field, 2);
                    return true;
                }
            case "text":
            case "tel":
                if (!field.value) {
                    field.classList.add('err');
                    errMessage(field, 1);
                    return false;
                } else {
                    field.classList.remove('err');
                    errMessage(field, 2)
                    return true;
                }
        }
    }

    let allMessage = {
        user: [
            'userErr', 'Введите ФИО', '',
        ],
        email: [
            'emailErr', 'Введите почту для связи', '',
        ],
        tel: [
            'telErr', 'Введите номер телефона', '',
        ],
    }

    function errMessage(field, number) {
        document.querySelector(`.${allMessage[`${field.id}`][0]}`).textContent = `${allMessage[`${field.id}`][number]}`;
    }

    this.validateAll = function () {
        let allField = [user, email, tel];
        let count = 0;
        allField.forEach(item => {
            if (!validate(item)) {
                count++;
            }
        });
        if (document.querySelector('.err')) {
            document.querySelector('.err').focus();
        }
        if (count) {
            return false;
        } else {
            return true;
        }
    };
}