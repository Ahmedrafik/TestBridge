let AuthService = require("./AuthService");


let authService = new AuthService();
(async()=> {
    const refreshToken = await authService.login();
    console.log("refresh = " + refreshToken);
    const accessToken = await authService.getAccessToken(refreshToken);
    console.log("accessToken = " + accessToken);
})();



