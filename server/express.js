"use strict";

let bodyParser = require("body-parser");
let compression = require("compression");
let cors = require("cors");
let express = require("express");
let morgan = require("morgan");
let passport = require("passport");
let routes = require("./routes");

require("express-async-errors");

function init(appConfig) {
    const app = express();
    app.set("port", appConfig.port);

    /*
    El Intercambio de Recursos de Origen Cruzado (CORS) es un mecanismo que utiliza cabeceras 
    HTTP adicionales para permitir que un user agent obtenga permiso para acceder 
    a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece.
    */
    app.use(cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true
    }));

    app.use(morgan("dev"));

    app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
    app.use(bodyParser.json({ limit: "5mb" }));

    app.use(compression());

    app.use(passport.initialize());
    app.use(passport.session());

    routes.initModules(app);

    return app;
}
module.exports={init}