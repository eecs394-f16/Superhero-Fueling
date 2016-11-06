angular
  .module('powerpage')
  .controller('IndexController', function($scope, $timeout, supersonic) {
    supersonic.ui.navigationBar.hide({animated: false});

    $scope.carryScore = steroids.view.params.carryScore

    $timeout(function() {
      var view = new supersonic.ui.View("playagain#index");
      supersonic.ui.layers.push(view);
    }, 2000);
  });
