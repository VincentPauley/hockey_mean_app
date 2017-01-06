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


/* Add Teams */
app.post('/add-team', function(req, res) {
    var newTeam = new Team();
        newTeam.name = req.body.new_team.name;
        newTeam.state = req.body.new_team.state;
        newTeam.city = req.body.new_team.city;
        newTeam.league = req.body.new_team.league;
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

});



app.listen(port, function() {
    console.log('listening on port: ' + port);
});
