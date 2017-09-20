app.controller('changeCalculatorController', function($scope) {
	$scope.change = {
    quarters: 25,
	  dimes: 10,
    nickels: 5,
    pennies: 1
  };
  $scope.invalidInput = false;
  $scope.calculateChange = function (amount) {
    console.log(parseInt(amount));
    if (amount == Number(amount)) {
      $scope.invalidInput = false;
      $scope.change.quarters = amount;
    } else {
      $scope.invalidInput = true;
    }
  };

});
