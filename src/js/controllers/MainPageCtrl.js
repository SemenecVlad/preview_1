/**
*@name Main Controller
*@description Define 'MainPageCtrl' options. Used to display most of the information.
*@author Vladislav Semenets <semenecvlad@mail.ru>
*/

LuxuryShopApp.controller("MainPageCtrl", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
  $http.get('data/brands-watches.json').success( function (data, status, headers, config) {
    $scope.brandsWatches = data;
  });
  $http.get('data/brands-men.json').success( function (data, status, headers, config) {
    $scope.menBrands = data;
  });
  $http.get('data/categoryCloth-men.json').success( function (data, status, headers, config) {
    $scope.menCategory = data;

  });
  $http.get('data/brands-women.json').success( function (data, status, headers, config) {
    $scope.womenBrands = data;
  });
  $http.get('data/categoryCloth-women.json').success( function (data, status, headers, config) {
    $scope.womenCategory = data;
  });
}]);
