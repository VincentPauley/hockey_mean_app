(() => {
    var app = angular.module('hockey', []);

    app.controller('createNewTeam', function($http) {
        var vm = this;
        vm.new_team = {
            name : "",
            state : "",
            city : "",
            league : "",
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
            });
        }
    });
})();
