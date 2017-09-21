
/*jshint esversion: 6 */
app.controller('changeCalculatorController', function($scope) {
	$scope.change = {};
  $scope.invalidInput = false;
  $scope.calculateChange = function (amount) {
		$scope.coins = [0.25, 0.10, 0.05, 0.01]
    $scope.amount = '';
    amount = Math.round(amount * 100) / 100;
    if (amount == Number(amount) && Number(amount) > 0) {
      $scope.invalidInput = false;
			$scope.coins = $scope.coins.sort((a,b) => b-a)
			var amountReduced = Number(amount) * 100
			$scope.change = $scope.coins.reduce((change, coin) => {
				if (coin == 0.01) {
					change['0.01'] = Math.round(amountReduced)
				} else {
					change[coin] = Math.floor((amountReduced*.01) / coin)
					amountReduced = amountReduced % (coin*100);
				}
				return change
			}, {})
    } else {
      $scope.invalidInput = true;
    }
  };

});
