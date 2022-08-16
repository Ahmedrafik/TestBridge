const axios = require('axios');
require('dotenv').config()

let AuthService = class {

    async login() {
        return await axios.post(process.env.BASE_URL+'/login', {
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
                return response.data.refresh_token;
            })
            .catch(function (error) {
                console.error(error);
            });


    }

    async getAccessToken(refreshToken){
        if (!refreshToken) {
            console.error('We cannot get any access Token without the refresh token !');
            return null;
        }

        return await axios.post(process.env.BASE_URL+'/token',
            `grant_type=refresh_token&refresh_token=${refreshToken}`,
            {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(function (response) {
                console.log(response);
                return response.data.access_token;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}

module.exports = AuthService;
