app.controller('carsController', function ($scope, carsService) {

    $scope.cars = {};
    $scope.loadCars = function () {
        carsService.getCars().then(function (data) {
                $scope.cars = data;

            },
            function (error) {
                $scope.error = "Error loading data";
            });

    };
});