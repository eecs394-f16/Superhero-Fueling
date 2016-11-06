angular
  .module('playagain')
  .controller('IndexController', function($scope, supersonic) {
    supersonic.ui.navigationBar.hide({animated: false});

    $scope.backToHome = function() {
      supersonic.ui.layers.popAll();
    };
  });
