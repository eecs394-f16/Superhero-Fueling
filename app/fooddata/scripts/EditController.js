angular
  .module('fooddata')
  .controller("EditController", function ($scope, Fooddata, supersonic) {
    $scope.fooddata = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Fooddata.find(steroids.view.params.id).then( function (fooddata) {
      $scope.$apply(function() {
        $scope.fooddata = fooddata;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.fooddata.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
