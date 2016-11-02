angular
  .module('FlyTime')
  .controller('IndexController', function($scope, supersonic) {
    $scope.score = steroids.view.params.score;
    
    if ($scope.score == 0){
    	document.getElementById("flygif").innerHTML = '<img src="http://localhost/images/unsuccessful.gif" alt="Image not found" style="width:340px;height:540px;">';
    }
    else if ($scope.score == 1){
    	document.getElementById("flygif").innerHTML = '<img src="http://localhost/images/successful.gif" alt="Image not found" style="width:340px;height:540px;">';    	
    }
  });
