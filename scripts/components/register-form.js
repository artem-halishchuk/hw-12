class RegisterForm {
    constructor(selector, userServices) {
        this.selector = selector;
        this.userServices = userServices;
        this.onRegister = () => {}; //обработчик успешной регистр. который можно переопределить
        this.doc = $(document);
        this.doc.ready(() => {
            this.init();
            this.binds();
        });
    }
    init() {
        this.container = $(this.selector);
        this.loginInput = $('#register_user_login');
        this.passwordInput = $('#register_user_password');
        this.bornInput = $('#register_user_born');
        this.button = $('.register-form .btn_success');
        this.buttonClosed = $('.register-form .btn_closed');
        this.popUp = $('.popup-register');
        this.hiddenHandler();
    }
    binds() {
        this.button.on('click', () => this.register());
    }
    register() {
        let user = new User(
            //важен порядок
            this.loginInput.val(),
            this.passwordInput.val(),
            this.bornInput.val(),
        )
        this.userServices.register(user).then(response => {
            if(response.status === 'error') this.registerError(response.error);
            else this.successRegister();
        });
    }
    registerError(text) {
        this.popUp.find('p').html(text);
        this.showPopUp();
    }
    successRegister() {
        this.clearForm();
        this.hidden();
        this.onRegister();
        this.popUp.find('p').html('Учетная запись создана');
        this.showPopUp();
    }
    clearForm() {
        this.loginInput.value = '';
        this.bornInput.value = '';
        this.passwordInput.value = '';
    }
    show() {
        this.container.css({'display': 'block'});
    }
    hidden() {
        this.container.css({'display': 'none'});

    }
    hiddenHandler() {
        this.buttonClosed.on('click', () => {
            this.container.css({'display': 'none'});
        });
    }
    showPopUp() {
        this.popUp.addClass("animationPopUp");
        setTimeout(() => {
            this.popUp.removeClass("animationPopUp");
        }, 2000);
    }
}