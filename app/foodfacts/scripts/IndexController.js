angular
  .module('foodfacts')
  .controller('IndexController', function($scope, supersonic, $http) {
    // Hide nav bar
    supersonic.ui.navigationBar.hide({animated: false});

    // Store the passed id
    $scope.selected = steroids.view.params.selectedId;
    $scope.data = {};

    // Get the data of the selected food from the stored id
    $http.get('/data/data.json').then(function(response) {
      response.data.forEach(function(food) {
        if (food.id == $scope.selected) {
          $scope.data = food;
        }
      });
    });
  });
