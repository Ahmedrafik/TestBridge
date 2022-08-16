let AuthService = require("./AuthService");

let authService = new AuthService();
authService.login().then(r => console.log(r));