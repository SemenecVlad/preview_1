LuxuryShopApp.controller("CategoryCtrl", ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  $http.get('data/womenclothes.json').success(function(data, status, headers, config) {
    $scope.womenclothes = data;
    $scope.womenClothId = $routeParams.womenClothId;
    // Костыль создающий видимость работы... отображает инфо из последней записи в
    // файле json... Пока пускай стоит так на некоторое время, нахожусь поисках решения
    for (let i = 0; i < data.length; i++) {
      let w_image = data[i].image;
      let w_fullDescription = data[i].fullDescription;
      $scope.w_image = w_image;
      $scope.w_fullDescription = w_fullDescription;
    }
    });
  $http.get('data/menclothes.json').success( function(data, status, headers, config) {
    $scope.menclothes = data;
    $scope.menClothId = $routeParams.menClothId;
    // Костыль создающий видимость работы... отображает инфо из последней записи в
    // файле json... Пока пускай стоит так на некоторое время, нахожусь поисках решения
    for (let i = 0; i < data.length; i++) {
      let m_image = data[i].image;
      let m_fullDescription = data[i].fullDescription;
      $scope.m_image = m_image;
      $scope.m_fullDescription = m_fullDescription;
    }
  });
  $http.get('data/jewelery.json').success( function (data, status, headers, config) {
    $scope.jewellerys = data;
    $scope.jewelleryId = $routeParams.jewelleryId;
    // Костыль создающий видимость работы... отображает инфо из последней записи в
    // файле json... Пока пускай стоит так на некоторое время, нахожусь поисках решения
    for (let i = 0; i < data.length; i++) {
      let j_image = data[i].image;
      let j_fullDescription = data[i].fullDescription;
      $scope.j_image = j_image;
      $scope.j_fullDescription = j_fullDescription;
    }
  });
  $http.get('data/watches.json').success( function (data, status, headers, config) {
    $scope.watches = data;
    $scope.watchId = $routeParams.watchId;
    // Костыль создающий видимость работы... отображает инфо из последней записи в
    // файле json... Пока пускай стоит так на некоторое время, нахожусь поисках решения
    for (let i = 0; i < data.length; i++) {
      let wt_image = data[i].image;
      let wt_fullDescription = data[i].fullDescription;
      $scope.wt_image = wt_image;
      $scope.wt_fullDescription = wt_fullDescription;
    }
  });
}]);
