angular
  .module('FoodChoice')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.ui.tabs.hide();

    $scope.selectedScore = 0;
    $scope.selected = null
    $scope.foodChoices = [ 
      {
        "itemName": "Cookie",
        "value": 0,
        "url": "/images/Cookies.png"
      },
      {
        "itemName": "Carrot",
        "value": 1,
        "url": "/images/Carrots.png"
      }
    ]

    $scope.selectFood = function(name) {
      $scope.foodChoices.forEach(function(food) {
        if (food.itemName == name) {
          $scope.selectedScore = food.value;
          $scope.selected = name
        }
      });
    }

    $scope.isSelected = function(name) {
      return $scope.selected === name;
    }
  });