
/*jshint esversion: 6 */
app.controller('changeCalculatorController', function($scope) {
	$scope.change = {};
  $scope.invalidInput = false;
	$scope.invalidCustomCoin = false;
  $scope.calculateChange = function (amount, customCoinDenomination) {
		var coins = [0.25, 0.10, 0.05, 0.01]
    $scope.amount = '';
		$scope.customCoinAmount = '';
		customCoinDenomination = customCoinDenomination / 100;
		if (coins.indexOf(customCoinDenomination) != -1) {
			$scope.invalidCustomCoin = true;
		} else if (customCoinDenomination > 0) {
			coins.push(customCoinDenomination);
		}
    amount = Math.round(amount * 100) / 100;
    if (amount == Number(amount) && Number(amount) > 0) {
      $scope.invalidInput = false;
			coins = coins.sort((a,b) => b-a)
			var amountReduced = Number(amount) * 100
			$scope.change = coins.reduce((change, coin) => {
				if (coin == 0.01) {
					change['0.01'] = Math.round(amountReduced)
				} else {
					change[coin] = Math.floor(amountReduced / (coin*100).toFixed(0))
					amountReduced = amountReduced % (coin*100).toFixed(0);				}
				return change
			}, {})
    } else {
      $scope.invalidInput = true;
    }
  };
});
