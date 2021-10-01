class LoginForm {
    constructor(selector, userServices) {
        this.selector = selector;
        this.userServices = userServices;
        this.onLogin = () => {}; //обработчик успешного логина. который можно переопределить
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
    login() {
        let user = new User(
            this.loginInput.value,
            this.passwordInput.value,
        )
        this.userServices.login(user).then(response => {
            if(response.status === 'error') this.loginError(response.error);
            else this.successLogin(response); //token = response
        })
    }

    loginError(text) {
        alert(text);
    }
    successLogin(response) {
        sessionStorage.setItem('userName', this.loginInput.value);

        let token = response.token; //token
        console.log('token: '+token);
        sessionStorage.setItem('token', token);
        this.onLogin();
        this.clearForm();
    }
    clearForm() {
        this.loginInput.value = '';
        this.passwordInput.value = '';
    }
}