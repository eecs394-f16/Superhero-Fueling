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
        "value": 1,
        "selected": false
      },
      {
        "itemName": "Carrot",
        "url": "/images/Carrots.png",
        "value": 5,
        "selected": false
      },
      {
        "itemName": "GrilledChicken",
        "url": "/images/Carrots.png",
        "value": 6,
        "selected": false
      },
      {
        "itemName": "Cucumbers",
        "url": "/images/Carrots.png",
        "value": 5,
        "selected": false
      },
      {
        "itemName": "Cauliflower",
        "url": "/images/Carrots.png",
        "value": 5,
        "selected": false
      },
      {
        "itemName": "Broccoli",
        "url": "/images/Carrots.png",
        "value": 5,
        "selected": false
      },
      {
        "itemName": "Grapes",
        "url": "/images/Carrots.png",
        "value": 5,
        "selected": false
      },
      {
        "itemName": "Skim Milk",
        "url": "/images/Carrots.png",
        "value": 5,
        "selected": false
      },
      {
        "itemName": "Strawberries",
        "url": "/images/Carrots.png",
        "value": 5,
        "selected": false
      },
      {
        "itemName": "Orange",
        "url": "/images/Carrots.png",
        "value": 5,
        "selected": false
      },
      {
        "itemName": "Turkey",
        "url": "/images/Carrots.png",
        "value": 6,
        "selected": false
      },
      {
        "itemName": "Apples",
        "url": "/images/Carrots.png",
        "value": 5,
        "selected": false
      },
      {
        "itemName": "Soda",
        "url": "/images/Carrots.png",
        "value": 1,
        "selected": false
      },
      {
        "itemName": "Pasta",
        "url": "/images/Carrots.png",
        "value": 4,
        "selected": false
      },
      {
        "itemName": "Chocolate Bar",
        "url": "/images/Carrots.png",
        "value": 1,
        "selected": false
      },
      {
        "itemName": "Grilled Cheese Sandwhich",
        "url": "/images/Carrots.png",
        "value": 3,
        "selected": false
      },
      {
        "itemName": "French Fries",
        "url": "/images/Carrots.png",
        "value": 1,
        "selected": false
      },
      {
        "itemName": "Ice Cream",
        "url": "/images/Carrots.png",
        "value": 1,
        "selected": false
      },
      {
        "itemName": "Potato Chips",
        "url": "/images/Carrots.png",
        "value": 1,
        "selected": false
      },
      {
        "itemName": "Movie Popcorn",
        "url": "/images/Carrots.png",
        "value": 1,
        "selected": false
      },
      {
        "itemName": "Hot Dog",
        "url": "/images/Carrots.png",
        "value": 3,
        "selected": false
      },
      {
        "itemName": "Pepperoni Pizza",
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
            if ($scope.selected.length == 3) {
              var options = {
                message: "You can only select up to 3 foods.",
                buttonLabel: "Close"
              };

              supersonic.ui.dialog.alert("Too many foods!", options);
            } else {
              $scope.selectedScore += food.value;
              $scope.selected.push(name);
              food.selected = true;
            }
          }
          // Update score
          $scope.selectedScoreAvg = Math.floor($scope.selectedScore/$scope.selected.length);
          // Update navigation bar title
          var title_str;
          if ($scope.selected.length == 3) {
            title_str = 'Are you ready to fly?';
          } else {
            title_str = 'Choose up to ' + parseInt(3 - $scope.selected.length) + ' food(s)!';
          }
          supersonic.ui.navigationBar.update({title: title_str});
        }
      });
    };

    $scope.isSelected = function(name) {
      return $scope.selected.indexOf(name) != -1;
    };
  });