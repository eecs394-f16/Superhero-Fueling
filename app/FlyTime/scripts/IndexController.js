angular
  .module('FlyTime')
  .controller('IndexController', function($scope, $timeout, supersonic) {
		supersonic.ui.navigationBar.hide({animated: false});

    $scope.score = steroids.view.params.score;

    if ($scope.score >= 5) {
    	$timeout(function() {
	    	var myscore = $scope.score
	    	var view = new supersonic.ui.View("powerpage#index?carryScore=1");
				supersonic.ui.layers.push(view);
    	}, 4000);
    } else {
    	$timeout(function() {
	    	var myscore = $scope.score
	    	var view = new supersonic.ui.View("powerpage#index?carryScore=0");
				supersonic.ui.layers.push(view);
    	}, 6000);
    }
  });
