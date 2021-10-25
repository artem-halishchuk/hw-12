class BookServices {
    constructor() {
        this.token = sessionStorage.getItem('token');
    }
    userName() {
        $('.contactBook-header__user').html(sessionStorage.getItem('userName'));
    }
    getAllUsers() {
        return $.ajax({
            url: BookServices.BASE_URL + 'users2',
            method: 'GET',
            headers: {
                'Authorization':'Bearer '+sessionStorage.getItem('token')
            },
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
    }
    getContacts() {
        return $.ajax({
            url: BookServices.BASE_URL + 'contacts',
            method: 'GET',
            headers: {
                'Authorization':'Bearer '+sessionStorage.getItem('token')
            },
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
    }
    addContact(contact) {
        return $.ajax({
            url: UserServices.BASE_URL + 'contacts/add',
            method: 'POST',
            headers: {
                'Authorization':'Bearer '+sessionStorage.getItem('token')
            },
            data: JSON.stringify ({
                type: contact.type,
                value: contact.value,
                name: contact.name,
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
        });
    }
}
BookServices.BASE_URL = 'https://mag-contacts-api.herokuapp.com/';