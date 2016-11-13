angular
  .module('fooddata')
  .controller("IndexController", function ($scope, Fooddata, supersonic) {
    $scope.fooddatas = null;
    $scope.showSpinner = true;

    Fooddata.all().whenChanged( function (fooddatas) {
        $scope.$apply( function () {
          $scope.fooddatas = fooddatas;
          $scope.showSpinner = false;
        });
    });
  });