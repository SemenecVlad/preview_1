LuxuryShopApp.controller("CategoryCtrl", ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  $http.get('data/womenclothes.json').success(function(data, status, headers, config) {
      $scope.womenclothes = data;
      $scope.womenClothId = $routeParams.womenClothId;

    });
  $http.get('data/menclothes.json').success( function(data, status, headers, config) {
      $scope.menclothes = data;
  });
  $http.get('data/jewelery.json').success( function (data, status, headers, config) {
    $scope.jewelerys = data;
  });
  $http.get('data/watches.json').success( function (data, status, headers, config) {
    $scope.watches = data;
  });

}]);
