class ListContacts {
    constructor(selector, getContact) {
        this.selector = selector;
        this.getContact = getContact;
        //this.onLogin = () => {}; //обработчик успешного логина. который можно переопределить
        document.addEventListener('DOMContentLoaded', () => {
            this.init();
            this.binds();
        });
    }
    init() {
        this.container = document.querySelector(this.selector);

    }
    binds() {
        //this.button.addEventListener('click', () => this.login());
    }
    showContacts() {

        let items = '';
        this.getContact
            .then(request => request.contacts)
            .then(contacts => contacts.map(contact => {
                items += this.createItemListContact(contact.name).outerHTML;
            }))
            .then(a => {
                this.container.innerHTML = items;
            });
    }
    createItemListContact(name) {
        this.itemListContact = document.createElement('li');
        this.itemListContact.classList.add('contactBook-list__item', 'contactBook-item');
        this.itemButton = document.createElement('button');
        this.itemButton.classList.add('contactBook-item__button');
        this.itemButton.innerHTML = name;
        this.itemListContact.append(this.itemButton);
        return this.itemListContact;
    }
}