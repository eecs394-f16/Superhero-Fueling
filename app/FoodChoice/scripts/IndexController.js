angular
  .module('FoodChoice')
  .controller('IndexController', function($scope, supersonic) {
    // supersonic.ui.tabs.hide();
    // $scope.myname = "agam"
    $scope.foodChoices = [ 
      { "itemName": "Cookie",
        "value": 0,
        "url": "data:image/jpeg;base64,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"
      },
      {
        "itemName": "Carrot",
        "value": 1,
        "url":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDytmzkUSJirxCg1Zu_9XIfFauWJdfD5YuMwRtYljrDiBr39yt1g"
      }
    ]

    $scope.returnFoodScore = function (foodName) {
      // const foodNames = Object.keys($scope.FoodChoices)

      for (i = 0; i < $scope.foodChoices.length; i++) {
        if (foodChoices[i][itemName] == foodName) {
          return $scope.FoodChoices[i][value]
        }
      }
    }

  });