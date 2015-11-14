/**
 * Created by chenjia on 11/14/15.
 */
app.factory('SimpleFactory', function($http){
    var fac = {};

    fac.getCustomers = function(){
        // return a promise
        return $http.get("http://www.w3schools.com/angular/customers.php");
    }
    return fac;
});
