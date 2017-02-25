var myApp = angular.module('checkNumber', []);

myApp.controller('userInfoCtrl', ['$scope',function($scope){
	$scope.numberStatus = undefined;
	$scope.infoForm = {	
						 "name": "test",
                         "number": ""
                     };
    $scope.isNumber = function(text){
   		var phone = text.replace(/[^0-9]/g, '');
	    $scope.infoForm.number = phone;
	    console.log(phone)
	    if(phone == ''){
	    	$scope.numberStatus = "invalid";
	    }else{
	    	$scope.numberStatus = undefined;
	    }
    };
}]);