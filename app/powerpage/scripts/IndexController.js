angular
  .module('powerpage')
  .controller('IndexController', function($scope, $timeout, supersonic, $http) {
    supersonic.ui.navigationBar.hide({animated: false});

    $scope.carryScore = steroids.view.params.carryScore;
    $scope.selected = [
      steroids.view.params.selected0,
      steroids.view.params.selected1,
      steroids.view.params.selected2
    ];
    $scope.data = [];
    $scope.selectedFact = [];

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


    $scope.backToHome = function() {
      $scope.selected = []
      supersonic.ui.layers.popAll();
      // Tell the first view (foodchoice) to reset its choices
      supersonic.data.channel('reset').publish({reset: true});
    };

    $scope.powerImageURL = function(power) {
      return "/images/" + power + ".png";
    }
  });
