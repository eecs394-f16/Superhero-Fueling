angular
  .module('foodfacts')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    supersonic.ui.navigationBar.hide({animated: false});

    $scope.selected = [steroids.view.params.selectedId]
    $scope.data = []

    var foodData = supersonic.data.model('FoodData');
    $scope.selected.forEach(function(item) {
      foodData.find(item).then(function(data) {
        $scope.data.push(data);
        supersonic.logger.log($scope.data); // TODO: Why does the absence of this line break the app?
      });
      supersonic.logger.log($scope.data);
    });

  });
