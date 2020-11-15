"use strict";

let dotenv = require("dotenv");
let config;

function getConfig(environment){
    console.log("getting config");
    if(!config){
        dotenv.config({path:".env"});

        config={
            port: process.env.PORT || "4500",
            mongoDb: process.env.MONGOCONSTRING || "mongodb://localhost/tateti_db",
            jwtSecret: process.env.JWT_SECRET || "gJ5Gs#v'(EJ3f[{20=SR0z9}IxuJfM0/e(/I'LsZM@7}!Z7h5yRq+eb*C[X|g2f",
            passwordSalt: process.env.PASSWORD_SALT || "DP3whK1fL7kKvhWm6pZomM/y8tZ92mkEBtj29A4M+b8",
            redisHost: process.env.REDIS_HOST || "127.0.0.1",
            redisPort: Number(process.env.REDIS_PORT || "6379"),
        };
    }
    return config;
}

module.exports={getConfig}