angular
  .module('FlyTime')
  .controller('IndexController', function($scope, $timeout, supersonic) {
    $scope.score = steroids.view.params.score;
    $timeout(function() {
  //   	var view = new supersonic.ui.View("powerpage#index");
		// supersonic.ui.layers.push(view);
		$scope.up = "hi"
    }, 4000);
  });
