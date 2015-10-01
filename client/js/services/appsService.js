app.factory('appsService',function ($http,$q) {

    return {
        // call to get all cars data
        getApps : function() {
            var deferred = $q.defer();
            // var key = $window.localStorage['keyy'];

            //Calling Web API to fetch merchant locations
            $http.get("https://cmtest.nuk9.com/api1/apps?api_key=adT/RRQ=:HElnxlA6URBZ1KsI1g2TA1e1fKU=").success(function (data) {
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