class ExitBook {
    constructor(selector, AboutContact, registerForm) {
        this.selector = selector;
        this.aboutContact = AboutContact;
        this.registerForm = registerForm;
        this.doc = $(document);
        this.doc.ready(() => {
            this.init();
        });
    }
    init() {
        this.container = $(this.selector);
        let unauthorizedScreen = new UnauthorizedScreenComponent('.unauthorized-screen');
        let loginScreen = new LoginScreenComponent('.contactBook');

    }
    exit() {
        this.container.on('click', () => {
            this.aboutContact.hiddenBlockExitLogOut();
            loginScreen.hidden(true);
            unauthorizedScreen.show(true);
            sessionStorage.setItem('token', '');
            this.registerForm.hidden();
        })
    }
}