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
      $scope.change.quarters = Math.floor(amount / 0.25);
      amount = ((amount * 100) % 25) / 100;
      $scope.change.dimes = Math.floor(amount / 0.1);
      amount = ((amount * 100) % 10) / 100;
      $scope.change.nickels = Math.floor(amount / 0.05);
      $scope.change.pennies = parseInt((amount * 100) % 5);
    } else {
      $scope.invalidInput = true;
    }
  };

});
