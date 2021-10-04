class RegisterForm {
    constructor(selector, userServices) {
        this.selector = selector;
        this.userServices = userServices;
        this.onRegister = () => {}; //обработчик успешной регистр. который можно переопределить
        document.addEventListener('DOMContentLoaded', () => {
            this.init();
            this.binds();
        });
    }
    init() {
        this.container = document.querySelector(this.selector);
        this.loginInput = this.container.querySelector('#register_user_login');
        this.passwordInput = this.container.querySelector('#register_user_password');
        this.bornInput = this.container.querySelector('#register_user_born');
        this.button = this.container.querySelector('.register-form .btn_success');
        this.buttonClosed = this.container.querySelector('.register-form .btn_closed');
        this.hiddenHandler();
    }
    binds() {
        this.button.addEventListener('click', () => this.register());
    }
    register() {
        let user = new User(
            //важен порядок
            this.loginInput.value,
            this.passwordInput.value,
            this.bornInput.value,
        )
        this.userServices.register(user).then(response => {
            if(response.status === 'error') this.registerError(response.error);
            else this.successRegister();
        });
    }
    registerError(text) {
        alert(text);
    }
    successRegister() {
        this.clearForm();
        this.onRegister();
    }
    clearForm() {
        this.loginInput.value = '';
        this.bornInput.value = '';
        this.passwordInput.value = '';
    }
    show() {
        this.container.style.display = 'block';
    }
    hidden() {
        this.container.style.display = 'none';
    }
    hiddenHandler(handler) {
        this.buttonClosed.addEventListener('click', () => this.container.style.display = 'none');
    }




}