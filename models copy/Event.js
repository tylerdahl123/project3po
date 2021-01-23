const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const eventSchema = new Schema ({
    end: {type: Date, required: true},
    start: {type: Date, required: true},
    summary: {type: String}
});

const Events = mongoose.model("Event", eventSchema);

module.exports = Events; 