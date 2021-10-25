class ListContacts {
    constructor(selector, bookServices) {
        this.selector = selector;
        this.bookServices = bookServices;
    }
    init() {
        this.container = $(this.selector);
        return this.container;
    }
    showContacts() {
        let items = '';
        this.bookServices.getContacts()
            .then(request => request.contacts)
            .then(contacts => contacts.map(contact => {
                items += this.createItemListContact(contact).outerHTML;
                //console.log(contacts);
            }))
            .then(response => this.container.html(items));
    }
    createItemListContact(contact) {
        this.itemListContact = document.createElement('li');
        this.itemListContact.classList.add('contactBook-list__item', 'contactBook-item');
        this.itemListContact.dataset.id = contact.id;
        this.itemButton = document.createElement('button');
        this.itemButton.classList.add('contactBook-item__button');
        this.itemButton.innerHTML = contact.name;
        this.itemListContact.append(this.itemButton);
        return this.itemListContact;
    }
}