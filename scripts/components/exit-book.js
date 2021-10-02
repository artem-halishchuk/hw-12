class ExitBook {
    constructor(selector) {
        this.selector = selector;
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
            loginScreen.hidden(true);
            unauthorizedScreen.show(true);
            sessionStorage.setItem('token', '');
            //document.querySelector('.contactBook-list__items').innerHTML = '';
        })
    }
}