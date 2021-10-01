class UnauthorizedScreenComponent {
    constructor(selector) {
        this.selector = selector;
        document.addEventListener('DOMContentLoaded', () => {
            this.init();
            this.hidden();
            this.show();
        })
    }
    init() {
        this.container = document.querySelector(this.selector);
    }
    hidden(a) {
        if(a) this.container.style.display = 'none';
    }
    show(a) {
        if(a) this.container.style.display = 'block';
    }
}