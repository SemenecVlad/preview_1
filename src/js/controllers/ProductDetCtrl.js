LuxuryShopApp.controller("ProductDetCtrl", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
  $scope.womenClothId = $routeParams.womenClothId;
  $scope.menClothId = $routeParams.menClothId;
  $scope.jeveleryId = $routeParams.jeveleryId;
  $scope.watchId = $routeParams.watchId;
}]);
