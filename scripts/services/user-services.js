class UserServices {
    getAll() {
        // return fetch(UserServices.BASE_URL+'users')
        //     .then(response => response.json())
        //     .then(response => response.users)
        //     .then(users => users.map(user => User.create(user)));
        return $.ajax({
            url: UserServices.BASE_URL+'users',
            method: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
    }
    register(user) {
        return $.ajax({
            url: UserServices.BASE_URL + 'register',
            method: 'POST',
            data: JSON.stringify ({
                login: user.login,
                password: user.password,
                date_born: user.bornDate,
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
    }
    login(user) {
        return $.ajax({
            url: UserServices.BASE_URL + 'login',
            method: 'POST',
            data: JSON.stringify ({
                login: user.login,
                password: user.password,
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
    }
}
UserServices.BASE_URL = 'https://mag-contacts-api.herokuapp.com/';