angular
  .module('powerpage')
  .controller('IndexController', function($scope, $timeout, supersonic, $http) {
    // Hide the nav bar
    supersonic.ui.navigationBar.hide({animated: false});

    //Store the score of the foods and the selected foods
    $scope.carryScore = steroids.view.params.carryScore;
    $scope.selected = [
      steroids.view.params.selected0,
      steroids.view.params.selected1,
      steroids.view.params.selected2
    ];
    $scope.data = [];
    $scope.selectedFact = [];

    // Load the food data based on the stored id's and store it in the "data" array.
    $http.get('/data/data.json').then(function(response) {
      var foodData = response.data;
      $scope.selected.forEach(function(id) {
        foodData.forEach(function(food) {
          if (food.id == id) {
            $scope.data.push(food);
          }
        });
      });
    });

    // Go back to the FoodChoice view controller
    $scope.backToHome = function() {
      $scope.selected = []
      supersonic.ui.layers.popAll();
      // Tell the first view (foodchoice) to reset its choices
      supersonic.data.channel('reset').publish({reset: true});
    };
    // Load the correct power image.
    $scope.powerImageURL = function(power) {
      return "/images/" + power + ".png";
    }
  });
