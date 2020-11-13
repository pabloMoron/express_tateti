var express = require('express');
let router = express.Router();

function initModule(app){
    app.route('/users').get(test);

}

async function test(req,res){
    res.json({status:200});
}
module.exports={initModule}