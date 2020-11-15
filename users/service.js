const User = require('./schema');
const Token = require('../token/service')

async function register(signUpRequest) {
    console.log("User:" + signUpRequest['user']);
    let user = new User();
    user.user = signUpRequest['user'];
    user.password = signUpRequest['password'];
    user.token = Token.CreateToken({ user: user.user });
    const saved = await user.save();
    Promise.resolve(true);
}

module.exports = { register }