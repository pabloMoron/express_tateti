"use strict";

let user = require('../users/routes');

function initModules(app){
    user.initModule(app);
    //tateti.initMoule(app);
    
}

module.exports={initModules}