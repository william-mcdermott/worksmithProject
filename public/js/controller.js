/*jshint esversion: 6 */

app.controller('changeCalculatorController', function($scope) {
	$scope.change = {};
  $scope.invalidInput = false;
	$scope.coins = [0.01, 0.05, 0.10, 0.25]
  $scope.calculateChange = function (amount) {
    $scope.amount = '';
    console.log(parseInt(amount));
    amount = Math.round(amount * 100) / 100;
    if (amount == Number(amount) && Number(amount) > 0) {
      $scope.invalidInput = false;
			$scope.coins = $scope.coins.sort((a,b) => b-a)
			var amountReduced = Number(amount)
			$scope.change = $scope.coins.reduce((change, coin) => {
				console.log(coin);
				var coinKey = coin * 100
				change[coinKey] = Math.floor(amountReduced / coin)
				amountReduced = amountReduced % coin;
				console.log(change);
				return change
			}, {})
			console.log($scope.change);
      // $scope.change.quarters = Math.floor(amount / 0.25);
      // amount = ((amount * 100) % 25) / 100;
      // console.log(amount);
      // $scope.change.dimes = Math.floor(amount / 0.1);
      // amount = ((amount * 100) % 10) / 100;
      // $scope.change.nickels = Math.floor(amount / 0.05);
      // $scope.change.pennies = Math.round((amount * 100) % 5);
    } else {
      $scope.invalidInput = true;
    }
  };

});
