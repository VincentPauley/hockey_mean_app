(() => {
    var app = angular.module('hockey', []);

    /* add new team controller */
    app.controller('createNewTeam', function($http) {
        var vm = this;
        vm.new_team = {
            name : "",
            country : "",
            state : "",
            city : "",
            league : "",
            conference : "",
            division : "",
            cups : 0,
            originYear : 0
        };

        vm.submit_new_team = () => {
            $http({
                url : '/add-team',
                method : 'POST',
                data : {
                    new_team : vm.new_team
                }
            })
            .then((response) => {
                if(response.data.status != 'OK') {
                    alert('there was an error trying to add team');
                }
                console.log(response.data.message);
                // reset form
                vm.new_team = {
                    name : "",
                    country : "",
                    state : "",
                    city : "",
                    league : "",
                    conference : "",
                    division : "",
                    cups : 0,
                    originYear : 0
                };
            });
        }
    });
    /* find teams controller */
    app.controller('findTeam', function($http) {
        var vm = this;
        vm.search = {
            all : true
        }

        vm.team_data = [];

        vm.search_for_teams = () => {
            $http({
                url : '/find-teams',
                method : 'POST'
            }).then((response) => {
                vm.team_data = response.data.teams;
                console.log(response.data.teams);
            });
        }
        vm.remove_team = function(teamID) {
          console.log('Team ID: ' + teamID);
            $http({
                url : '/delete-team',
                method : 'POST',
                data : {
                    specified_team : teamID
                }
            }).then((response) => {
                console.log(response);
            });
        }
    });
})();
