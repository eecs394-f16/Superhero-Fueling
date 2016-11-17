angular
  .module('FoodChoice')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.ui.tabs.hide();
    $scope.foodChoices = []
    var Food = supersonic.data.model('FoodData');
    Food.findAll().then(function(allFood) {
      supersonic.logger.log(allFood[0])
      for (i = 0; i < allFood.length; i++) {
        $scope.foodChoices.push(allFood[i])
      }
    });

    $scope.selectedScore = 0;
    $scope.selected = [];
    // $scope.foodChoices = [ 
    //   {
    //     "itemName": "Cookie",
    //     "url": "/images/Cookies.jpg",
    //     "value": 1,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Carrot",
    //     "url": "/images/carrots.jpg",
    //     "value": 5,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "GrilledChicken",
    //     "url": "/images/grillChicken.png",
    //     "value": 6,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Cucumbers",
    //     "url": "/images/Cucumber.png",
    //     "value": 5,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Cauliflower",
    //     "url": "/images/cauliflower.png",
    //     "value": 5,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Broccoli",
    //     "url": "/images/Broccoli.png",
    //     "value": 5,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Grapes",
    //     "url": "/images/grapes.png",
    //     "value": 5,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Skim Milk",
    //     "url": "/images/milk.png",
    //     "value": 5,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Strawberries",
    //     "url": "/images/strawberry.png",
    //     "value": 5,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Orange",
    //     "url": "/images/Orange.png",
    //     "value": 5,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Turkey",
    //     "url": "/images/Turkey.png",
    //     "value": 6,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Apples",
    //     "url": "/images/apple.png",
    //     "value": 5,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Soda",
    //     "url": "/images/Soda.png",
    //     "value": 1,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Pasta",
    //     "url": "/images/Pasta.png",
    //     "value": 4,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Chocolate Bar",
    //     "url": "/images/Chocolate.png",
    //     "value": 1,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Grilled Cheese Sandwhich",
    //     "url": "/images/Cheese.png",
    //     "value": 3,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "French Fries",
    //     "url": "/images/Fries.png",
    //     "value": 1,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Ice Cream",
    //     "url": "/images/Ice.png",
    //     "value": 1,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Potato Chips",
    //     "url": "/images/Chips.png",
    //     "value": 1,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Movie Popcorn",
    //     "url": "/images/Popcorn.png",
    //     "value": 1,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Hot Dog",
    //     "url": "/images/HotDog.png",
    //     "value": 3,
    //     "selected": false
    //   },
    //   {
    //     "itemName": "Pepperoni Pizza",
    //     "url": "/images/Pizza.png",
    //     "value": 1,
    //     "selected": false
    //   }
    // ];

    $scope.toggleFood = function(name) {
      $scope.foodChoices.forEach(function(food) {
        if (food.Name == name) {
          if (food.selected == true) {
            $scope.selectedScore -= food.Value;
            $scope.selected.splice($scope.selected.indexOf(food.Name), 1);
            food.selected = false
          } else if (food.selected == false) {
            if ($scope.selected.length == 3) {
              var options = {
                message: "You can only select up to 3 foods.",
                buttonLabel: "Close"
              };

              supersonic.ui.dialog.alert("Too many foods!", options);
            } else {
              $scope.selectedScore += food.Value;
              $scope.selected.push(name);
              food.selected = true;
            }
          }
          // Update score
          $scope.selectedScoreAvg = Math.floor($scope.selectedScore / $scope.selected.length);
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
    $scope.resetChoices = function() {
      return $scope.selected = []
    }
  });