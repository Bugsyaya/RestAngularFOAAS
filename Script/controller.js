
// Notre controller expose simplement le service a la vue
app.controller("myCtrl",  ['$scope','service',function($scope,service) {

  $scope.serviceRest = service;

}]);