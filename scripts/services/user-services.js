class UserServices {
    getAll() {
        return fetch(UserServices.BASE_URL+'users')
            .then(response => response.json())
            .then(response => response.users)
            .then(users => users.map(user => User.create(user)));
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
            dataType: 'json',
            //complete: r => r.responseJSON;
        });
    }
    login(user) {
        // return fetch(UserServices.BASE_URL + 'login', {
        //     method: 'POST',
        //     headers: {
        //         'Accept':'application/json', //хотим принять от сервера json
        //         'Content-Type':'application/json', //передаем на сервер json
        //     },
        //     body: JSON.stringify({
        //         login: user.login,
        //         password: user.password,
        //     })
        // }).then(response => response.json()); //передача на сервер в формате json

        return $.ajax({
            url: UserServices.BASE_URL + 'login',
            method: 'POST',
            data: JSON.stringify ({
                login: user.login,
                password: user.password,
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            //complete: r => r.responseJSON;
        });
    }
}
UserServices.BASE_URL = 'https://mag-contacts-api.herokuapp.com/';