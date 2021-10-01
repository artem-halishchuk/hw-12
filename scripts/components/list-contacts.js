class ListContacts {
    constructor(selector, getContact) {
        this.selector = selector;
        this.getContact = getContact;
        //this.onLogin = () => {}; //обработчик успешного логина. который можно переопределить
        document.addEventListener('DOMContentLoaded', () => {
            this.init();
            this.binds();
        });
    }
    init() {
        this.container = document.querySelector(this.selector);
        this.loginInput = this.container.querySelector('.login-form #login_user_login');
        this.passwordInput = this.container.querySelector('.login-form #login_user_password');
        this.button = this.container.querySelector('.login-form button');
    }
    binds() {
        this.button.addEventListener('click', () => this.login());

    }
}