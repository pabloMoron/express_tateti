const { Schema } = require("mongoose")

module.exports.UserSchema = new Schema('User', {
    user: {
        type: String,
        required: "Username is required",
        unique: "The user name is not available"
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

module.exports.User=mongoose.model("users", this.UserSchema);

