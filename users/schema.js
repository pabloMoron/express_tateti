const mongoose = require("mongoose")

let UserSchema = new mongoose.Schema({
    user: {
        type: String,
        required: "Username is required",
        unique: "The username is not available"
    },
    password: {
        type: String,
        default: "",
        required: "The password is required"
    },
    created: {
        type: Date,
        default: Date.now()
    },
    enabled: {
        type: Boolean,
        default: true
    },
    token: {
        type: String,
        default: ""
    },
}, {collection: "users"});

let user=mongoose.model("User", UserSchema);
module.exports =  user 

