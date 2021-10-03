class AboutContact {
    constructor(selector, listContacts) {
        this.selector = selector;
        this.listContacts = listContacts;
        document.addEventListener('DOMContentLoaded', () => {
            this.init();
        });
    }
    init() {
        this.container = document.querySelector(this.selector);
    }
    displayBlock() {
        listContacts.init().addEventListener('click', e => {
            if(e.target.parentElement.matches('li')) {
                console.log(e.target.parentElement.dataset.id);
                this.container.style.display = 'block';
            }
        })
    }
    hiddenBlock() {
        this.container.addEventListener('click', e => {
            if(e.target.matches('.contactBook-about__exit')) {
                this.container.style.display = 'none';
            }
        })
    }
}