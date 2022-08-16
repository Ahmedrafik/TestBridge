const axios = require('axios');

let AuthService = class {

    async login() {
        await axios.post('http://localhost:3000/login', {
                user: "BankinUser",
                password: "12345678"
            },
            {
                headers: {'Content-Type': 'application/json'},
                auth: {
                    username: "BankinClientId",
                    password: "secret"
                }
            })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

module.exports = AuthService;
