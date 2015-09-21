app.factory('carsService', ['$http', function($http) {

    return {
        // call to get all cars data
        getCars : function() {
            return $http.get('/cars');
        },
        getCount : function() {
            return $http.get('/cars/count');
        },

        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new car
        create : function(carData) {
            return $http.post('/cars', carData);
        },

        // call to DELETE a car
        delete : function(id) {
            return $http.delete('/cars/' + id);
        }
    }

}]);