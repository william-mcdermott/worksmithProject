app.controller('changeCalculatorController', function($scope) {
	$scope.change = {
    quarters: 25,
	  dimes: 10,
    nickels: 5,
    pennies: 1
  };
  $scope.invalidInput = false;
  $scope.calculateChange = function (amount) {
    $scope.amount = '';
    console.log(parseInt(amount));
    amount = Math.round(amount * 100) / 100;
    if (amount == Number(amount) && Number(amount) > 0) {
      $scope.invalidInput = false;
      $scope.change.quarters = Math.floor(amount / 0.25);
      amount = ((amount * 100) % 25) / 100;
      console.log(amount);
      $scope.change.dimes = Math.floor(amount / 0.1);
      amount = ((amount * 100) % 10) / 100;
      $scope.change.nickels = Math.floor(amount / 0.05);
      $scope.change.pennies = Math.round((amount * 100) % 5);
    } else {
      $scope.invalidInput = true;
    }
  };

});
