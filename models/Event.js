const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const eventSchema = new Schema ({
    userName: {type: String},
    end: {type: Date},
    start: {type: Date},
    title: {type: String}
});
//add user name field 
const Event = mongoose.model("Events", eventSchema);

module.exports = Event; 