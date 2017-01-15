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

// configure mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hockey');


/* Add Team */
app.post('/add-team', function(req, res) {
    var newTeam = new Team();
        newTeam.name = req.body.new_team.name;
        newTeam.country = req.body.new_team.country;
        newTeam.state = req.body.new_team.state;
        newTeam.city = req.body.new_team.city;
        newTeam.league = req.body.new_team.league;
        newTeam.conference = req.body.new_team.conference;
        newTeam.division = req.body.new_team.division;
        newTeam.cups = req.body.new_team.cups;
        newTeam.originYear = req.body.new_team.originYear;

    newTeam.save(function(err, newTeam) {
        var response = {};
        if(err) {
            response.status = 'ERROR';
        } else {
            response.status = 'OK';
            response.message = 'added: ' + newTeam.name + ' to DB';
        }
        res.send(response);
    });
});

/* Find Teams */
app.post('/find-teams', function(req, res) {
    var response = {};
    response.status = 'OK';
    Team.find({}, function(err, teams) {
        if(err) {
            console.log(err);
        }
        response.teams = teams;
        res.send(response);
    });

});

/* Delete Team */
app.post('/delete-team', function(req, res) {
    var response = {};
    console.log(req.body.specified_team);


    Team.findOneAndRemove({ _id : req.body.specified_team }, function(err) {
        if(err) {
            console.log(err);
        }
        res.send('done');
    });
});



app.listen(port, function() {
    console.log('listening on port: ' + port);
});
