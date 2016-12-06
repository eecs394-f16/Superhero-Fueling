angular
  .module('FoodChoice')
  .controller('IndexController', function($scope, supersonic, $http) {
    // Hide the tabs
    supersonic.ui.tabs.hide();
    // Initialize an array to store all possible foods

    $scope.foodChoices = [];
    // Get the json data locally. Should get from database in futures.
    $http.get('/data/data.json').then(function(response) {
      $scope.foodChoices = response.data;
    });

    // Initialize the objects associated with what foods the user has selected
    $scope.selectedScore = 0;
    $scope.selectedScoreAvg = 0;
    $scope.selected = [];

    // A function to select or deselect food
    $scope.toggleFood = function(id) {
      // Get the id of the clicked food
      var clickedFood = $scope.foodChoices.find(function(food) {
        return food.id === id;
      });
      
      //If the food was selected already
      if ($scope.isSelected(clickedFood.id)) {
        // Deselect it and change the appropriate variables
        $scope.selectedScore -= clickedFood.Value;
        $scope.selected.splice($scope.selected.indexOf(clickedFood.id), 1);
        // Select it and change the appropriate variables
      } else {
        // Error if three foods are already selected
        if ($scope.selected.length == 3) {
          var options = {
            message: "You can only select up to 3 foods.",
            buttonLabel: "Close"
          };

          supersonic.ui.dialog.alert("Too many foods!", options);
        } else {
          $scope.selectedScore += clickedFood.Value;
          $scope.selected.push(clickedFood.id);
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
  
    };
    // Return true if item is selected
    $scope.isSelected = function(id) {
      return $scope.selected.indexOf(id) != -1;
    };

    // A function to reset selection choices
    $scope.resetChoices = function() {
      $scope.selectedScore = 0;
      $scope.selectedScoreAvg = 0;
      $scope.selected = [];
    }

    // Reset choices when powerpage "play again" is clicked
    supersonic.data.channel('reset').subscribe(function(message) {
      $scope.resetChoices();
      supersonic.logger.log($scope.selected); // active class does not reset if line is removed
    });
  });