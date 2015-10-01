app.factory('appsService', ['$http', function($http) {

    return {
        // call to get all cars data
        getCars : function() {
            return $http.get('/apps');
        }

    }

}]);