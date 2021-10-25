class AboutContact {
    constructor(selector, listContacts, bookServices) {
        this.selector = selector;
        this.listContacts = listContacts; //class
        this.bookServices = bookServices;
        this.showId = null;
        this.doc = $(document);
        this.doc.ready(() => this.init());
    }
    init() {
        this.container = $(this.selector);
    }
    displayBlock() {
        $(this.listContacts.init()).on('click', e => {
            let target = $(e.target);
            if(target.parent('li')) {
                this.showId = target.parent('li').data('id');
                this.showContact();
                this.container.css({'display': 'block'});
                this.hiddenBlockExit();
            }
        })
    }
    hiddenBlock() {
        this.container.on('click', e => {
            let target = $(e.target);
            if(target.attr('class') === 'contactBook-about__exit' || target.attr('class') === 'contactBook-header__exit') {
                this.container.css({'display': 'none'});
            }
        })
    }
    hiddenBlockExit() {
        this.container.css({'display': 'block'});
    }
    hiddenBlockExitLogOut() {
        this.container.css({'display': 'none'});
    }
    showContact() {
        this.bookServices.getContacts()
            .then(request => request.contacts)
            .then(contacts => contacts.map(contact => {
                if (this.showId == contact.id) {
                    this.container.html(this.createContent(contact));
                }
            }))
    }
    createContent(contact) {
        let content = '';

        this.contactBookAboutContent = document.createElement('div');
        this.contactBookAboutContent.classList.add('contactBook-about__content');

        this.contactBookContentName = document.createElement('p');
        this.contactBookContentName.classList.add('contactBook-content__name');
        this.contactBookContentName.innerHTML = 'Имя: ' + contact.name;
        this.contactBookAboutContent.append(this.contactBookContentName);

        this.contactBookContentContact = document.createElement('p');
        this.contactBookContentContact.classList.add('contactBook-content__contact');
        if(contact.type === 'phone') {
            this.contactBookContentContact.innerHTML = 'Телефон: ';
            this.contactValue = document.createElement('a');
            this.contactValue.href = 'tel:'+contact.value;
            this.contactValue.innerHTML = contact.value;
            this.contactBookContentContact.append(this.contactValue);
        }
        else {
            this.contactBookContentContact.innerHTML = 'Почта: ';
            this.contactValue = document.createElement('a');
            this.contactValue.href = 'mailto:'+contact.value;
            this.contactValue.innerHTML = contact.value;
            this.contactBookContentContact.append(this.contactValue);
        }
        this.contactBookAboutContent.append(this.contactBookContentContact);

        this.contactBookAboutExit = document.createElement('button');
        this.contactBookAboutExit.classList.add('contactBook-about__exit');
        this.contactBookAboutExit.innerHTML = 'Выход';

        content += this.contactBookAboutContent.outerHTML;
        content += this.contactBookAboutExit.outerHTML;
        return content;
    }
}