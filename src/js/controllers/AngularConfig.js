/**
*@name Configuration file
*@description Configuration for Router
*@author Vladislav Semenets <semenecvlad@mail.ru>
*/

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
      templateUrl: 'template/_women-product-detailed.html',
      controller: 'CategoryCtrl'
    })
    .when('/men', {
      templateUrl: 'template/_category-men.html',
      controller: 'MainPageCtrl'
    })
    .when('/men/:menClothId', {
      templateUrl: 'template/_men-product-detailed.html',
      controller: 'CategoryCtrl'
    })
    .when('/jewellery', {
      templateUrl: 'template/_category-jewellery.html',
      controller: 'MainPageCtrl'
    })
    .when('/jewellery/:jewelleryId', {
      templateUrl: 'template/_jewellery-product-detailed.html',
      controller: 'CategoryCtrl'
    })
    .when('/watches', {
      templateUrl: 'template/_category-watches.html',
      controller: 'MainPageCtrl'
    })
    .when('/watches/:watchId', {
      templateUrl: 'template/_watches-product-detailed.html',
      controller: 'CategoryCtrl'
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
