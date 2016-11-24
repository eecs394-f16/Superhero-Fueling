angular
  .module('powerpage')
  .controller('IndexController', function($scope, $timeout, supersonic) {
    supersonic.ui.navigationBar.hide({animated: false});

    $scope.carryScore = steroids.view.params.carryScore;
    $scope.selected = [

      steroids.view.params.selected0,
      steroids.view.params.selected1,
      steroids.view.params.selected2

    ]
    $scope.data = []
    $scope.selectedFact = []
    // supersonic.logger.log("hi")
    var foodData = supersonic.data.model('FoodData');
    $scope.selected.forEach(function(item) {
      foodData.find(item).then(function(data) {
        $scope.data.push(data);
        supersonic.logger.log($scope.data); // TODO: Why does the absence of this line break the app?
      });
      supersonic.logger.log($scope.data);
    });

    // $scope.toggleFood =function(id){
    //   $timeout(function() {
    //     var view = new supersonic.ui.View("foodfacts#index?selectedID=" + id);
    //     supersonic.ui.layers.push(view);
    //   }, 4000);
    // }

    $scope.backToHome = function() {
      $scope.selected = []
      supersonic.ui.layers.popAll();
      // Tell the first view (foodchoice) to reset its choices
      supersonic.data.channel('reset').publish({reset: true});
    };

    $scope.powerImageURL = function(power) {
      return "/images/" + power + ".png";
    }
  });
