var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    TeamSchema = new Schema({
        name : String,
        country : String,
        state : String,
        city : String,
        league : String,
        conference : String,
        division : String,
        cups : Number,
        originYear : Number
    }, {collection : 'teams'});

module.exports = mongoose.model('Team', TeamSchema);
