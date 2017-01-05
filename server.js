var express = require('express'),
    mongodb = require('mongodb'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 3000;

// models
var Team = require('./models/Team.model');

app.use(express.static('public'));
app.use(bodyParser.json());

var db = 'mongodb://localhost/hockey';
mongoose.connect(db);



app.post('/add-team', function(req, res) {
    console.log('client requesting to add team');

    var newTeam = new Team();
        newTeam.name = req.body.new_team.name;
        newTeam.state = req.body.new_team.state;
        newTeam.city = req.body.new_team.city;
        newTeam.league = req.body.new_team.league;
        newTeam.cups = req.body.new_team.cups;
        newTeam.originYear = req.body.new_team.originYear;

    newTeam.save(function(err, newTeam) {
        if(err) {
            console.error(err);
        } else {
            console.log('SUCCESS');
            console.log(newTeam);
        }
    });
});




app.listen(port, function() {
    console.log('listening on port: ' + port);
});
