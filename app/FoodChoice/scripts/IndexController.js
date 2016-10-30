angular
  .module('FoodChoice')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.ui.tabs.hide();
    
    $scope.FoodChoices = [
      { 
        "Cookie": 0
      },
      {
        "Carrot": 1
      }
    ]

    $scope.returnFoodScore = function (foodName) {
      const foodNames = Object.keys($scope.FoodChoices)

      for (i = 0; i < $scope.FoodChoices.length; i++) {
        if (foodNames[i] === foodName) {
          return $scope.FoodChoices[i][foodName]
        }
      }
    }

  });
