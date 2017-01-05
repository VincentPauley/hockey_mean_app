var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    TeamSchema = new Schema({
        name : String,
        state : String,
        city : String,
        league : String,
        cups : Number,
        originYear : Number
    });

module.exports = mongoose.model('Team', TeamSchema);
