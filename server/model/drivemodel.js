var mongo = require('mongoose');

var schema = mongo.Schema;

var driveSchema = new schema({
    did : Number,
    company : String,
    job : String,
    venue : String,
    date : String,
    qualification : String
    
});

var drivesModel = mongo.model("drive", driveSchema, "drive");

module.exports = drivesModel;