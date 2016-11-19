angular
  .module('TitleScreen')
  .controller('IndexController', function($scope, $timeout, supersonic) {
    // Controller functionality here
    supersonic.ui.tabs.hide();
    $timeout(function() {
	    	var view = new supersonic.ui.View("Instructions#index");
	    	supersonic.ui.layers.push(view);
    	}, 5000);
  });
