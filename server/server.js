"use strict";

let express = require("./express");
let mongoose = require("mongoose");
let env = require("./environments");

const conf=env.getConfig(process.env);

mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
mongoose.connect(conf.mongoDb, {}, function (err) {
    if (err) {
        console.error("No se pudo conectar a MongoDB!");
        console.error(err.message);
        process.exit();
    } else {
        console.log("MongoDB conectado. "+conf.mongoDb);
    }
});

const app = express.init(conf);

app.listen(conf.port, () => console.log(`Server started at port http://localhost:${conf.port}`))

module.exports=app;