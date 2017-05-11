var app = angular.module('myApp', ["ngRoute"]);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    
    $routeProvider.when('/aboutus',{
        templateUrl:'views/aboutUs.html',
    });
    
    $routeProvider.when('/services',{
        templateUrl:'views/services.html',
    });
    $routeProvider.when('/contactUs',{
        templateUrl:'views/contactUs.html',
    });
    $routeProvider.when('/cardsForm',{
        templateUrl:'views/cardsForm.html',
    });
    $locationProvider.html5Mode(true);
}]);


app.controller('myCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.dataObj = [{
        "name": "Mcfadden Melendez",
        "email": "mcfaddenez@gmail.com",
        "phone": "+1 (859) 456-3226",
        "address": "512 Gardner Avenue, 1741"
    }, {
        "name": "Katheryn Robertson",
        "email": "katherynrson@rubadub.com",
        "phone": "+1 (880) 516-2902",
        "address": "674 Raleigh Place, 2878"
    }, {
        "name": "Moody Patterson",
        "email": "moodypatton@rubadub.com",
        "phone": "+1 (850) 404-3111",
        "address": "889 Ludlam Place, 9600"
    }, {
        "name": "Violet Coffey",
        "email": "violetcoffey@rubadub.com",
        "phone": "+1 (950) 402-3715",
        "address": "560 Dewey Place, 4728"
    }, {
        "name": "Burns Monroe",
        "email": "burnsmonroe@rubadub.com",
        "phone": "+1 (830) 425-2324",
        "address": "402 Cypress Court, 2735"
    }, {
        "name": "Flowers Morin",
        "email": "flowersmorin@rubadub.com",
        "phone": "+1 (876) 424-2100",
        "address": "953 Beadel Street, 6274"
    }];

    $scope.sumbitfield = function() {
        var fname = $scope.contact.formname;
        var faddress = $scope.contact.formaddress;
        var femail = $scope.contact.formemail;
        var phonenumber = $scope.contact.phoneno;
        var newObj = {
            name: fname,
            address: faddress,
            email: femail,
            phone: phonenumber
        }
        $scope.dataObj.push(newObj);
        $scope.contact = {};
    }
    $scope.objclick = function(index) {
        $scope.dataObj.splice(index, 1);
    }

}]);