angular
  .module('foodfacts')
  .controller('IndexController', function($scope, supersonic, $http) {
    supersonic.ui.navigationBar.hide({animated: false});

    $scope.selected = steroids.view.params.selectedId;
    $scope.data = {};

    $http.get('/data/data.json').then(function(response) {
      response.data.forEach(function(food) {
        if (food.id == $scope.selected) {
          $scope.data = food;
        }
      });
    });
  });
