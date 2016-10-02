(function () {
  'use strict';
  var LuxuryShopApp = angular.module("LuxuryShopApp", ['ngRoute']);

  LuxuryShopApp.config(['$routeProvider', '$locationProvider', function ($routeProvide, $locationProvider) {
    $routeProvide
      .when('/', {
        templateUrl: 'template/_main.html',
        controller: 'MainPageCtrl'
      })
      .when('/women', {
        templateUrl: 'template/_category-women.html',
        controller: 'MainPageCtrl'
      })
      .when('/women/:womenClothId', {
        templateUrl: 'template/_product-detailed.html',
        controller: 'CategoryCtrl'
      })
      .when('/men', {
        templateUrl: 'template/_category-men.html',
        controller: 'MainPageCtrl'
      })
      .when('/men/:menClothId', {
        templateUrl: 'template/_product-details.html',
        controller: 'ProductDetCtrl'
      })
      .when('/jewellery', {
        templateUrl: 'template/_category-jevelery.html',
        controller: 'MainPageCtrl'
      })
      .when('/jevelery/:jeveleryId', {
        templateUrl: 'template/_product-detailed.html',
        controller: 'ProductDetCtrl'
      })
      .when('/watches', {
        templateUrl: 'template/_category-watches.html',
        controller: 'MainPageCtrl'
      })
      .when('/watches/:watchId', {
        templateUrl: 'template/_product-details.html',
        controller: 'ProductDetCtrl'
      })
      .when('/blog', {
        templateUrl: 'template/_blog.html',
        controller: 'MainPageCtrl'
      })
      .when('/cart', {
        templateUrl: 'template/_blog.html',
        controller: 'MainPageCtrl'
      })
      .when('/contact', {
        templateUrl: 'template/_contact.html',
        controller: 'MainPageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

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
  LuxuryShopApp.controller("ProductDetCtrl", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.womenClothId = $routeParams.womenClothId;
    $scope.menClothId = $routeParams.menClothId;
    $scope.jeveleryId = $routeParams.jeveleryId;
    $scope.watchId = $routeParams.watchId;
  }]);

  // var sliderApp = angular.module("sliderApp", ['ui.bootstrap']);
  //
  // sliderApp.controller("CarouselCtrl", ['$scope', '$location', function ( $scope, $location ) {
  //   $scope.myInterval = 3000;
  //   var slides = $scope.slides = [
  //     {
  //       "image": "img/slider/girl1.jpg"
  //     },
  //     {
  //       "image": "img/slider/girl2.jpg"
  //     },
  //     {
  //       "image": "img/slider/girl3.jpg"
  //     }
  //   ];
  // }]);

}());
