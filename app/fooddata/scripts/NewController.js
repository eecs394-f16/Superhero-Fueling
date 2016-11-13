angular
  .module('fooddata')
  .controller("NewController", function ($scope, Fooddata, supersonic) {
    $scope.fooddata = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newfooddata = new Fooddata($scope.fooddata);
      newfooddata.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });