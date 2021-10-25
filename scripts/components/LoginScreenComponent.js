class LoginScreenComponent {
    constructor(selector) {
        this.selector = selector;
        this.doc = $(document);
        this.doc.ready(() => {
            this.init();
            this.hidden();
            this.show();
        });
    }
    init() {
        this.container = $(this.selector);
    }
    hidden(a) {
        if(a) this.container.css({'display': 'none'});
    }
    show(a) {
        if(a) this.container.css({'display': a});
    }
}