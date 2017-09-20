/*jshint esversion: 6 */

app.controller('changeCalculatorController', function($scope) {
	$scope.change = {};
  $scope.invalidInput = false;
	$scope.invalidCustomCoin = false;
	$scope.coins = [0.25, 0.10, 0.05, 0.01]
  $scope.calculateChange = function (customCoinAmount, amount) {
		customCoinAmount = customCoinAmount / 100;
		if ($scope.coins.indexOf(customCoinAmount) != -1) {
			$scope.invalidCustomCoin = true;
		} else if (customCoinAmount > 0) {
			$scope.coins.push(customCoinAmount);
		}
    $scope.amount = '';
		$scope.customCoinAmount = '';
    amount = Math.round(amount * 100) / 100;
    if (amount == Number(amount) && Number(amount) > 0) {
      $scope.invalidInput = false;
			$scope.coins = $scope.coins.sort((a,b) => b-a)
			console.log($scope.coins);
			var amountReduced = Number(amount) * 100
			console.log(amountReduced);
			$scope.change = $scope.coins.reduce((change, coin) => {
				if (coin == 0.01) {
					change['1'] = Math.round(amountReduced)
				} else {
					console.log(coin);
					var coinKey = coin * 100
					change[coinKey] = Math.floor(amountReduced / (coin*100))
					console.log(amountReduced, coin);
					amountReduced = amountReduced % (coin*100);
				}
				return change
			}, {})
			console.log($scope.change);
    } else {
      $scope.invalidInput = true;
    }
  };

});
