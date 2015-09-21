app.controller('carsController', function ($scope, carsService) {

    $scope.cars = {};
    $scope.count = "";
    $scope.getCount = function () {
        carsService.getCount().then(function (data) {
                $scope.count = data.value;

            },
            function (error) {
                $scope.error = "Error loading count";
            });

    };
    $scope.getCount();

    $scope.loadCars = function () {
        carsService.getCars().then(function (data) {
                $scope.cars = data;

            },
            function (error) {
                $scope.error = "Error loading data";
            });

    };
});