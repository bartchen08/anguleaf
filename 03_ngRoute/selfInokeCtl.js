// self-invoked anonymouse function for modularity
// non self-invoked is also OK
(function(){
    app.controller('SimpleController', function($scope) {
        $scope.customers = [
                {name: 'Dave Jones', city: 'Pheonix'},
                {name: 'Jamie Riley', city: 'Atlanta'},
                {name: 'Heedy Wahlin', city: 'Chandler'},
                {name: 'Thomas Winter', city: 'Seattle'}
            ];
        $scope.addCustomer = function () {
            $scope.customers.push(
                {
                    name:$scope.newCustomer.name,
                    city:$scope.newCustomer.city
                }
            );
        }
    });
})();