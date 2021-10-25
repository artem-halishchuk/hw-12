class LoginForm {
    constructor(selector, userServices, registerForm) {
        this.selector = selector;
        this.userServices = userServices;
        this.registerForm = registerForm;
        this.onLogin = () => {}; //обработчик успешного логина. который можно переопределить
        this.doc = $(document);
        this.doc.ready(() => {
            this.init();
            this.binds();
        });
    }
    init() {
        this.container = $(this.selector);
        this.loginInput = $('.login-form #login_user_login');
        this.passwordInput = $('.login-form #login_user_password');
        this.button = $('.login-form button');
        this.buttonShowRegister = $('.btn_register_show');
        this.popUp = $('.popup-register');
        this.showRegister();
    }
    binds() {
        this.button.on('click', e => {
            if($(e.target).attr('class') !== 'btn btn_success') return;
            this.login();
        });

    }
    login() {
        let user = new User(
            this.loginInput.val(),
            this.passwordInput.val(),
        )
        if(this.loginInput.val() === '' || this.passwordInput.val() === '') {
            //alert('Заполните все для взода.');
            this.showPopUp();
            return;
        }
        else {
            this.userServices.login(user)
                .then(response => {
                    if(response.status === 'error') this.loginError(response.error);
                    else this.successLogin(response); //token = response
                })
        }

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
        this.loginInput.val('');
        this.passwordInput.val('');
    }
    showRegister() {
        this.buttonShowRegister.on('click', () => this.registerForm.show());
    }
    showPopUp() {
        //this.popUp.childNodes[1].innerHTML = 'Заполните все поля для входа';
        this.popUp.find('p').html('Заполните все поля для входа');
        this.popUp.addClass("animationPopUp");
        setTimeout(() => {
            this.popUp.removeClass("animationPopUp");
        }, 2000);
    }
}