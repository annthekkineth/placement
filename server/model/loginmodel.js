var mongo = require('mongoose');

var schema = mongo.Schema;

var userSchema = new schema({
    aid : Number,
    name : String,
    email : String,
    username : String,
    password : String,
    status : Number,
    role : String
});

var usersModel = mongo.model("log", userSchema, "user");

module.exports = usersModel;