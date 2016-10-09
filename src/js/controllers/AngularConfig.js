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
