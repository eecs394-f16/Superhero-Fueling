angular
  .module('FlyTime')
  .controller('IndexController', function($scope, $timeout, supersonic) {
    // Hide nav bar
    supersonic.ui.navigationBar.hide({animated: false});
    $scope.score = steroids.view.params.score
    // Array of selected food items
    $scope.selected = [
      steroids.view.params.selected0,
      steroids.view.params.selected1,
      steroids.view.params.selected2
    ]

    if ($scope.score >= 5) {
    	$timeout(function() {
        // Continue after 6.5 seconds.
	    	var view = new supersonic.ui.View("powerpage#index?carryScore=2&selected0=" + $scope.selected[0] + "&selected1=" + $scope.selected[1] + "&selected2=" + $scope.selected[2]);
				supersonic.ui.layers.push(view);
    	}, 6500);
    } else if ($scope.score < 5 && $scope.score > 2) {
    	$timeout(function() {
        // Continue after 7.5 seconds.
	    	var view = new supersonic.ui.View("powerpage#index?carryScore=1&selected0=" + $scope.selected[0] + "&selected1=" + $scope.selected[1] + "&selected2=" + $scope.selected[2]);
				supersonic.ui.layers.push(view);
    	}, 7500);
    }
    else {
      $timeout(function() {
        // Continue after 5 seconds.
        var view = new supersonic.ui.View("powerpage#index?carryScore=0&selected0=" + $scope.selected[0] + "&selected1=" + $scope.selected[1] + "&selected2=" + $scope.selected[2]);
        supersonic.ui.layers.push(view);
      }, 5000);
    }
  });
