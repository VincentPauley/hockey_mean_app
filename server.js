var express = require('express'),
    mongodb = require('mongodb'),
    mongoose = require('mongoose'),
    app = express(),
    port = 3000;

// models
var Team = require('./models/Team.model');



app.use(express.static('public'));

var db = 'mongodb://localhost/hockey';
mongoose.connect(db);

/*
var newTeam = new Team();
    newTeam.name = "Blackhawks";
    newTeam.state = "Illinois";
    newTeam.city = "Chicago";
    newTeam.league = "NHL";
    newTeam.cups = 6;
    newTeam.originYear = 1926;

newTeam.save(function(err, newTeam) {
    if(err) {
        console.error(err);
    } else {
        console.log('SUCCESS');
        console.log(newTeam);
    }
});
*/




app.listen(port, function() {
    console.log('listening on port: ' + port);
});
