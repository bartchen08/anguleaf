// inject factory in the same module
app.controller("myCtrl", function($scope, SimpleFactory) {
    $scope.getNameList = function(){
        SimpleFactory.getCustomers().success(function (response) {
            // promise is successful
            $scope.names = response.records;
        });
    };

    // initialize names
    $scope.getNameList();
});
