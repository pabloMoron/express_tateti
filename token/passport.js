"use strict";

const jwt = require('jsonwebtoken');
const { Strategy } = require('passport');
const passport = require ('passport')
const passportjwt = require ('passport-jwt')
const User = require ('../users/schema')

function init(){
    //Parametros para la estrategia jwt
    const params = {
        secretOrKey: conf.jwtSecret,
        jwtFromRequest: passportjwt.ExtractJwt.fromAuthHeaderAsBearerToken()
    };

passport.use(new Strategy(params, function(payload, done){
    User.findOne({
        user: payload.user,
        enabled: true
    },(err, user)=>{
        if(err || !user){
            return done(undefined, false, {message: "Invalid Token"});
        }
        return done(undefined, payload);
        });
}));
}