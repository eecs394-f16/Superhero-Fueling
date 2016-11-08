angular
  .module('FoodChoice')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.ui.tabs.hide();

    $scope.selectedScore = 0;
    $scope.selected = [];
    $scope.foodChoices = [ 
      {
        "itemName": "Cookie",
        "url": "/images/Cookies.png",
        "value": 0,
        "selected": false
      },
      {
        "itemName": "Carrot",
        "url": "/images/Carrots.png",
        "value": 1,
        "selected": false
      }
    ];

    $scope.toggleFood = function(name) {
      $scope.foodChoices.forEach(function(food) {
        if (food.itemName == name) {
          if (food.selected == true) {
            $scope.selectedScore -= food.value;
            $scope.selected.splice($scope.selected.indexOf(food.itemName), 1);
            food.selected = false
          } else if (food.selected == false) {
            $scope.selectedScore += food.value;
            $scope.selected.push(name);
            food.selected = true
          }
        }
      });

      supersonic.logger.log($scope.selected);
    };

    $scope.isSelected = function(name) {
      return $scope.selected === name;
    };
  });