angular
  .module('powerpage')
  .controller('IndexController', function($scope, $timeout, supersonic) {
    supersonic.ui.navigationBar.hide({animated: false});

    $scope.carryScore = steroids.view.params.carryScore;
    $scope.selected = steroids.view.params.selected;
    $scope.data = [];

    // var foodData = supersonic.data.model('FoodData');
    // $scope.selected.forEach(function(item) {
    //   foodData.find(item).then(function(data) {
    //     $scope.data.push(data);
    //     supersonic.logger.log($scope.data); // TODO: Why does the absence of this line break the app?
    //   });
    //   supersonic.logger.log($scope.data);
    // });

    $scope.backToHome = function() {
      $scope.selected = []
      supersonic.ui.layers.popAll();
    };

    $scope.powerImageURL = function(power) {
      return "/images/" + power + ".png";
    }
  });
