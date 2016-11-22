angular
  .module('foodfacts')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.ui.navigationBar.hide({animated: false});

    $scope.selected = steroids.view.params.selectedId;
    $scope.data = {};

    var foodData = supersonic.data.model('FoodData');
      foodData.find($scope.selected).then(function(data) {
        $scope.data = data;
        supersonic.logger.log($scope.data); // TODO: Why does the absence of this line break the app?
      });
      supersonic.logger.log($scope.data);

  });
