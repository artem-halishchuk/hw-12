class AddContact {
    constructor(selector, bookServices) {
        this.selector = selector;
        this.bookServices = bookServices;
        this.typeValue = null;
        this.onAdd = () => {}; //обработчик успешного логина. который можно переопределить
        this.doc = $(document);
        this.doc.ready(() => {
            this.init();
            this.binds();
        });
    }
    init() {
        this.container = $(this.selector);
        this.name = $('.contactBook-add__name');
        this.typeSwitcher = $('.contactBook-add__select');
        this.controlPhone = $('.contactBook-add__phone');
        this.controlMail = $('.contactBook-add__mail');
        this.buttonAdd = $('.contactBook-add__btn');
        this.popUp = $('.popup-register');
    }
    binds() {
        this.buttonAdd.on('click', () => this.addContact());
    }
    choiceType() {
        if (this.typeSwitcher.val() === 'phone') {
            this.controlPhone.css({'display': 'block'});
            this.controlMail.css({'display': 'none'});
        }
        else {
            this.controlPhone.css({'display': 'none'});
            this.controlMail.css({'display': 'block'});
        }
        this.typeSwitcher.on('click', () => {
            this.choiceType();
        })
    }
    addContact() {
        if (this.typeSwitcher.val() === 'phone') this.typeValue = this.controlPhone.val();
        else this.typeValue = this.controlMail.val();
        let contact = {
            type: this.typeSwitcher.val(),
            value: this.typeValue,
            name: this.name.val(),
        };
        if(contact.value === '' || contact.name === '') {
            this.popUp.find('p').html('Заполните все поля для добавления контакта');
            this.showPopUp();
            return;
        }
        else {
            this.bookServices.addContact(contact).then(response => {
                if(response.status === 'error') this.addError(response.error);
                else this.successAdded();
            });
        }
    }
    addError(text) {
        alert(text);
    }
    successAdded() {
        this.clearForm();
        this.popUp.find('p').html('Контакт добавлен');
        this.showPopUp();
        this.onAdd();
    }
    clearForm() {
        this.name.val('');
        this.controlPhone.val('');
        this.controlMail.val('');
    }
    showPopUp() {
        this.popUp.addClass("animationPopUp");
        setTimeout(() => {
            this.popUp.removeClass("animationPopUp");
        }, 1300);
    }
}