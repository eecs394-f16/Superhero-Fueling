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

    $scope.toggleFood = function(name) {
      $scope.foodChoices.forEach(function(food) {
        if (food.Name == name) {
          if (food.selected == true) {
            $scope.selectedScore -= food.Value;
            $scope.selected.splice($scope.selected.indexOf(food.id), 1);
            food.selected = false;
          } else if (food.selected == false) {
            if ($scope.selected.length == 3) {
              var options = {
                message: "You can only select up to 3 foods.",
                buttonLabel: "Close"
              };

              supersonic.ui.dialog.alert("Too many foods!", options);
            } else {
              $scope.selectedScore += food.Value;
              $scope.selected.push(food.id);
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
      $scope.selectedScore = 0;
      $scope.selectedScoreAvg = 0;
      $scope.selected = [];
    }
  });