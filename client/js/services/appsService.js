app.factory('appsService',function ($http,$q) {

        var appJSON = { 
         
            "norton": "uFdLzKclmUbuJXRi06mo2kdx3lf2pM57Qk1AYH4hVjAiF3qLolDGP1O6BCNxryzMKwf4TUZ3KDDtLT6k",
            "nms": "uFdLzKclmUbuJXRi06mo2kdx3lf2pM57Qk1AYH4hVjAiF3qLolDGP1O6BCNxryzMKwf4TUZ3KDDtLT6k",
            "Norton Security and Antivirus": "uFdLzKclmUbuJXRi06mo2kdx3lf2pM57Qk1AYH4hVjAiF3qLolDGP1O6BCNxryzMKwf4TUZ3KDDtLT6k",
            "Webalo for Symantec": "p8PJSapeN5BbHr0RVp1CgNYAABtC6y2VNGMTlPKkVnd666MFHUrTPwUz1g5VdBf1odWp1PHoE60UrCEg",
            "wablo": "p8PJSapeN5BbHr0RVp1CgNYAABtC6y2VNGMTlPKkVnd666MFHUrTPwUz1g5VdBf1odWp1PHoE60UrCEg",
            "Demo1": "pervgmZYJJsj93mnFsJUaWRkteOgpBVmxtIiyEBlZuaw62dk2cr9zDEK944m2xUzVHZypOtd6gjSrLI1",
            "angry birds": "r1hliMQR64SZO1tvEwlEmIqwYMVFPSrvFUIB35Fj5IX3b2Cpzt25LTUjr1Mo8iYu8bZZ1G7l11O4XxCU",
            "angry": "r1hliMQR64SZO1tvEwlEmIqwYMVFPSrvFUIB35Fj5IX3b2Cpzt25LTUjr1Mo8iYu8bZZ1G7l11O4XxCU",
            "birds": "r1hliMQR64SZO1tvEwlEmIqwYMVFPSrvFUIB35Fj5IX3b2Cpzt25LTUjr1Mo8iYu8bZZ1G7l11O4XxCU",
            "spotify": "gh9KrfNvysynhMF1VL5xExlwuu5yFoGjwpO5Ynw0Te59Ioy9LwJDu4bl0V0G3l6acUJbQGtuymnbiMaV",
            "spotify music": "gh9KrfNvysynhMF1VL5xExlwuu5yFoGjwpO5Ynw0Te59Ioy9LwJDu4bl0V0G3l6acUJbQGtuymnbiMaV",
            "work mail": "1S7zAP3l68WT39sArSre5h1uVaHiq3YMTPdpZ8kHORJ0h6LIwStxEQC1pJmJIGpk6ECxbJ4j6EZqjQKq",
            "Symantec work mail": "1S7zAP3l68WT39sArSre5h1uVaHiq3YMTPdpZ8kHORJ0h6LIwStxEQC1pJmJIGpk6ECxbJ4j6EZqjQKq",
            "work file": "coKb6kgFm3C7BA9HUgIowGrP6YiLnNZD9xUBE7wNXMlZqpFMNU6jAd671jnWC8VtMmFqjEU8waQdRt3M"

        };

        var deviceJSON = {
                "todd": "7a2f780bdb2153d4db8b9c4c6c496a0b6cb5608d",
                "anshuman": "6a573a2fca20abbe13f830e7c5c7f8c6995e26dc"
        };



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