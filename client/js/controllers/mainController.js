app.controller('mainController', function ($scope,appsService,$http, $q) {

    appsService.getApps().then(function (data) {
        $scope.loader = false;
        $scope.apps = data;
        console.log($scope.apps);

        // $scope.merchant.description=data.description;
    }, function (error) {
        $scope.error = "Error in creating your bussiness!";
    });
});