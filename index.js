const AuthService = require("./AuthService");
const AccountService = require("./AccountService");


let authService = new AuthService();
let accountService = new AccountService();
(async()=> {
    const refreshToken = await authService.login();
    console.log("refresh = " + refreshToken);
    const accessToken = await authService.getAccessToken(refreshToken);
    console.log("accessToken = " + accessToken);
    const accountList = await accountService.getAccounts(accessToken);
    console.log('accountList : ' + accountList);
    const formatedAccouts = accountService.formatAccountList(accountList);
    console.log('accountListFormated : ' + formatedAccouts);
})();



