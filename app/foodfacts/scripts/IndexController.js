angular
  .module('foodfacts')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
    supersonic.ui.navigationBar.hide({animated: false});
  });
