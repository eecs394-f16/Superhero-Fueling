angular
  .module('FoodChoice')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.ui.tabs.hide();

    $scope.foodChoices = [];

    var Food = supersonic.data.model('FoodData');
    Food.findAll().then(function(allFood) {
      supersonic.logger.log(allFood[0]); // TODO: Why does this line break app if deleted?
      for (i = 0; i < allFood.length; i++) {
        $scope.foodChoices.push(allFood[i]);
      }
    });

    $scope.selectedScore = 0;
    $scope.selectedScoreAvg = 0;
    $scope.selected = [];

    $scope.toggleFood = function(id) {
      var clickedFood = $scope.foodChoices.find(function(food) {
        return food.id === id;
      });

      if ($scope.isSelected(clickedFood.id)) {
        $scope.selectedScore -= clickedFood.Value;
        $scope.selected.splice($scope.selected.indexOf(clickedFood.id), 1);
      } else {
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

    $scope.isSelected = function(id) {
      return $scope.selected.indexOf(id) != -1;
    };

    $scope.resetChoices = function() {
      $scope.selectedScore = 0;
      $scope.selectedScoreAvg = 0;
      $scope.selected = [];
    }
  });