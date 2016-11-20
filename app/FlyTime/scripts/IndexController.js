angular
  .module('FlyTime')
  .controller('IndexController', function($scope, $timeout, supersonic) {
    supersonic.ui.navigationBar.hide({animated: false});
    $scope.score = steroids.view.params.score
    $scope.selected = [
      steroids.view.params.selected0,
      steroids.view.params.selected1,
      steroids.view.params.selected2

    ]


    if ($scope.score >= 5) {
    	$timeout(function() {
	    	var view = new supersonic.ui.View("powerpage#index?carryScore=2&selected=" + $scope.selected);
				supersonic.ui.layers.push(view);
    	}, 4000);
    } else if ($scope.score < 5 && $scope.score > 2) {
    	$timeout(function() {
	    	var view = new supersonic.ui.View("powerpage#index?carryScore=1&selected=" + $scope.selected);
				supersonic.ui.layers.push(view);
    	}, 6000);
    }
    else {
      $timeout(function() {
        var view = new supersonic.ui.View("powerpage#index?carryScore=0&selected=" + $scope.selected);
        supersonic.ui.layers.push(view);
      }, 5000);
    }
  });
