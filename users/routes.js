"use strict";
const User=require('./service');


function initModule(app){
    app.route('/users').post(signUp);
    app.route('/users/signin').post(signIn);
    app.route('/user/signout').get(logout);

}

async function signUp(req,res){
    console.log(req.body)
    try{
        await User.register(req.body)
        ?res.json({status:200})
        :res.json({status:400})
    }catch(err){
        console.log(err);
        res.json({status:200})
    }
}

async function signIn(req,res){
    res.json({status:200});
}

async function disableUser(req,res){
    res.json({status:200});
}

async function logout(req,res){
    res.json({status:200});
}

module.exports={initModule}