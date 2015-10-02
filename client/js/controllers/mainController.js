

app.controller('mainController', function ($scope,appsService, $http, $q) {

	// TODO: reload this with speech data or input sentences from the controller
	var inputText = "open work file";
	// // assuming we made the call to the server to get the processed data

    $scope.speech = {
        maxResults: 25,
        continuous: false,
        interimResults: false
    };
    $scope.$watch(
        function ($scope) {

            // This becomes the value we're "watching".
            if($scope.speech.recognizing == false) {
                return ( "text is " + $scope.speech.value );
            }
        },
        function (newValue) {

            console.log(newValue);
            var apiaiURL = "http://localhost:9080/upload?text=" + newValue;
            var apiaiResponse = null;
            appsService.getData(apiaiURL).then(function(data){
                console.log(data);
                apiaiResponse = data;

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

                var api1key = "adT/RRQ=:HElnxlA6URBZ1KsI1g2TA1e1fKU=";
                console.log(apiaiResponse.result.action);
                var urlType = apiaiResponse.result.action;
                var url = "";
                console.log("url Type" + urlType);
                if (urlType == "apps.open") {
                    var uuid = appJSON[apiaiResponse["result"]["parameters"]["app_name"]];
                    console.log("GOt UUID  " + uuid);
                    url = "https://cmtest.nuk9.com/api1/apps/" + uuid + "/metadata?api_key=" + api1key;
                    // add code to call apiai with the text
                    appsService.getData(url).then(function (data) {
                        $scope.loader = false;
                        $scope.apps = data;
                        console.log($scope.apps);

                        // $scope.merchant.description=data.description;
                    }, function (error) {
                        $scope.error = "Error in creating your bussiness!";
                    });
                } else if(urlType == "device.details") {
                    var unique_identifier = deviceJSON[apiaiResponse["result"]["parameters"]["PeopleNames"].toLowerCase()];
                    url = "https://cmtest.nuk9.com/api1/devices/" + unique_identifier + "?api_key=" + api1key;
                    appsService.getData(url).then(function (data) {
                        $scope.loader = false;
                        $scope.apps = data;
                        console.log($scope.apps);

                        // $scope.merchant.description=data.description;
                    }, function (error) {
                        $scope.error = "Error in creating your bussiness!";
                    });
                }
            });

            console.log($scope.text);
        }
    );


	
});