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

    formatAccount(account){
        return `{
            "acc_number": ${account.acc_number},
            "amount": "${account.amount}",
            "currency": "${account.currency}"
        }`;
    }

    formatAccountList(accountList){
        let formattedAccountList = `[`;
        for(const account in accountList){
            formattedAccountList += this.formatAccount(account);
        }
        formattedAccountList += `]`
        return formattedAccountList;
    }

}

module.exports = AccountService;