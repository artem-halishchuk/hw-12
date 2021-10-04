class ExitBook {
    constructor(selector, AboutContact, registerForm) {
        this.selector = selector;
        this.aboutContact = AboutContact;
        this.registerForm = registerForm;
        document.addEventListener('DOMContentLoaded', () => {
            this.init();
        });
    }
    init() {
        this.container = document.querySelector(this.selector);
        let unauthorizedScreen = new UnauthorizedScreenComponent('.unauthorized-screen');
        let loginScreen = new LoginScreenComponent('.contactBook');

    }
    exit() {
        this.container.addEventListener('click', () => {
            this.aboutContact.hiddenBlockExit();
            loginScreen.hidden(true);
            unauthorizedScreen.show(true);
            sessionStorage.setItem('token', '');
            this.registerForm.hidden();

        })
    }
}