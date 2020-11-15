"use strict";

const jwt = require('jsonwebtoken')
const appConf = require('../server/environments'); 
const conf=appConf.getConfig();

function CreateToken(payload){
    const t = jwt.sign(payload, conf.jwtSecret);
    return t;
}

module.exports = {CreateToken}; 