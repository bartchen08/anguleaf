// self-invoked anonymouse function for modularity
// non self-invoked is also OK
(function(){
    app.controller("myCtrl", function($scope) {
        $scope.firstName	= "John";
        $scope.lastName= "Doe";
    });
})();