const axios = require('axios');
require('dotenv').config()

let AuthService = class {

    async login() {
        await axios.post(process.env.BASE_URL+'/login', {
                user: process.env.USER_NAME,
                password: process.env.PASSWORD
            },
            {
                headers: {'Content-Type': 'application/json'},
                auth: {
                    username: process.env.CLIENT_ID,
                    password: process.env.CLIENT_SECRET
                }
            })
            .then(function (response) {
                console.log(response);
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

module.exports = AuthService;
