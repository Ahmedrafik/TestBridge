const axios = require('axios');
require('dotenv').config()

let AccountService = class {

    async getAccounts(token){
        return await axios.get(process.env.BASE_URL+'/accounts',
            {headers: { Authorization: `Bearer ${token}` }}
        ).then(function (response) {
            console.log(response);
            return response.data;
        })
            .catch(function (error) {
                console.error(error);
            });
    }



}

module.exports = AccountService;