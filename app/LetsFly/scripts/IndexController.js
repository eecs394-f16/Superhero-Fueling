angular
  .module('LetsFly')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    $scope.sendChoice = function () {
    	supersonic.logger.log("Fly clicked");
    }
  });
