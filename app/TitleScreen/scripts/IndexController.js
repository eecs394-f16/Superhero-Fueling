angular
  .module('TitleScreen')
  .controller('IndexController', function($scope, $timeout, supersonic) {
    $scope.timedout = false;

    $scope.continue = function() {
      supersonic.ui.initialView.dismiss();
    };

    $timeout(function() {
      $scope.timedout = true;
    	}, 3000);
  });
