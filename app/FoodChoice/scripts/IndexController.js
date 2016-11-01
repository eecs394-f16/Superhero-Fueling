angular
  .module('foodChoice')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.ui.tabs.hide();
    
    $scope.foodChoices = [
      { "itemName": "Cookie",
        "value": 0,
        "url": "www.google.com"
      },
      {
        "itemName": "Carrot",
        "value": 1,
        "url":"www.google.com"
      }
    ]

    $scope.returnFoodScore = function (foodName) {
      // const foodNames = Object.keys($scope.FoodChoices)

      for (i = 0; i < $scope.foodChoices.length; i++) {
        if (foodChoices[i][itemName] == foodName) {
          return $scope.FoodChoices[i][value]
        }
      }
    }

  });