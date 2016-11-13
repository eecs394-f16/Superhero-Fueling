angular
  .module('fooddata')
  .controller("ShowController", function ($scope, Fooddata, supersonic) {
    $scope.fooddata = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Fooddata.find($scope.dataId).then( function (fooddata) {
        $scope.$apply( function () {
          $scope.fooddata = fooddata;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.fooddata.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });