app.factory('appsService',function ($http,$q) {

    return {
        
        // call to get all cars data
        getData : function(url) {
            var deferred = $q.defer();
            // var key = $window.localStorage['keyy'];

            //Calling Web API to fetch merchant locations
            $http.get(url).success(function (data) {
                //Passing data to deferred's resolve function on successful completion
                deferred.resolve(data);
            }).error(function () {

                //Sending a friendly error message in case of failure
                deferred.reject("An error occured while fetching items");
            });

            return deferred.promise;

        } 
    }

});