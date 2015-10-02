

app.controller('mainController', function ($scope,appsService, $http, $q, $state) {

	// TODO: reload this with speech data or input sentences from the controller
	var inputText = "open work file";
	// // assuming we made the call to the server to get the processed data

    $scope.speech = {
        maxResults: 25,
        continuous: false,
        interimResults: false,
        finalValue :''
    };
    $scope.$watch(
        function ($scope) {

            // This becomes the value we're "watching".

                return ($scope.speech.finalValue);

        },
        function (newValue) {

            console.log(newValue);
            if (newValue !== undefined) {
                var apiaiURL = "http://localhost:9080/upload?text=" + newValue;
                var apiaiResponse = null;
                appsService.getData(apiaiURL).then(function (data) {

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

                    var acidJSON = {
                                "todd": "393b9108130f5c91af1595948d5f4a60dd171d73",
                                "anshuman": "37cdc061ce2f07daba461a2a8b9b9b44b315d29c"
                    };

                    var policyJSON = {
                                "wifi": "1",
                                "enrollment": "2",
                                "camera": "3"
                    };

                    var userMap = {
                    	1: "anshuman",
                    	2: "sonia",
                    	3: "krishnan"
                    };

                    var groupMap = {
                    	1: "administrators",
                    	2: "publishers",
                    	3: "managers",
                    	4: "developers",
                    	5: "all"
                    }
                    $scope.getAppURL = function(uuid){
                        if(uuid == "uFdLzKclmUbuJXRi06mo2kdx3lf2pM57Qk1AYH4hVjAiF3qLolDGP1O6BCNxryzMKwf4TUZ3KDDtLT6k") {
                            return ("/images/icon_NMS_110.png");
                        }
                        else if(uuid == "gh9KrfNvysynhMF1VL5xExlwuu5yFoGjwpO5Ynw0Te59Ioy9LwJDu4bl0V0G3l6acUJbQGtuymnbiMaV"){
                            return ("/images/spotify.jpg");
                        }
                        else if(uuid == "1S7zAP3l68WT39sArSre5h1uVaHiq3YMTPdpZ8kHORJ0h6LIwStxEQC1pJmJIGpk6ECxbJ4j6EZqjQKq"){
                            return ("/images/android_launcher48.png");
                        }
                        else if(uuid == "coKb6kgFm3C7BA9HUgIowGrP6YiLnNZD9xUBE7wNXMlZqpFMNU6jAd671jnWC8VtMmFqjEU8waQdRt3M"){
                            return ("/images/work-file.png")
                        }

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
                            console.log(data);
                            $scope.loader = false;
                            var entitlements = data["metadata"]["production-info"]["entitlements"];
                            var groups = [];
                            var users = [];
                            console.log(entitlements[0]);
                            for (i=0; i<entitlements.length; i++) {
                            	var entitlement = entitlements[i];
                            	console.log(entitlements[i]);
                            	if(entitlement.hasOwnProperty("users")) {
                            		for(i=0; i<entitlement.users.length; i++){
                            			users.push(userMap[entitlement.users[i]]);
                            		}
                            	} else if (entitlement.hasOwnProperty("groups")) {
                            		for(i=0; i<entitlement.groups.length; i++){
                            			groups.push(groupMap[entitlement.groups[i]]);
                            		}
                            	}
                            }
                            data["groups"] = groups.join();
                            data["users"] = users.join();
                            if(data["metadata"]["policy"] == null){
                            	data["metadata"]["policy"] = "N/A";	
                            }
                            data["url"] = $scope.getAppURL(uuid);
                            $scope.apps = data;

                            console.log($scope.apps);
                            $state.go("home.apps");
                        }, function (error) {
                            $scope.error = "Error in creating your bussiness!";
                            $state.go("home");
                        });
                    } else if (urlType == "device.details") {
                        var unique_identifier = deviceJSON[apiaiResponse["result"]["parameters"]["PeopleNames"].toLowerCase()];
                        url = "https://cmtest.nuk9.com/api1/devices/" + unique_identifier + "?api_key=" + api1key;
                        appsService.getData(url).then(function (data) {
                            $scope.loader = false;
                            $scope.deviceDetails = data;
                            console.log($scope.apps);

                            // $scope.merchant.description=data.description;
                        }, function (error) {
                            $scope.error = "Error in creating your bussiness!";
                            $state.go("home");
                        });
                     } else if(urlType == "device.policies") {
                        var unique_identifier = policyJSON[apiaiResponse["result"]["parameters"]["PolicyName"]];
                        url = "https://cmtest.nuk9.com/api1/device_policy" + unique_identifier + "?api_key=" + api1key;
                        appsService.getData(url).then(function (data) {
                        $scope.loader = false;
                        $scope.policies = data;
                        console.log($scope.apps);

                        // $scope.merchant.description=data.description;
                    }, function (error) {
                        $scope.error = "Error in creating your bussiness!";
                        $state.go("home");
                    });
                    } else if(urlType == "device.command") {
                        console.log(apiaiResponse)
                        var unique_command = apiaiResponse["result"]["parameters"]["Commands"];
                        
                        var unique_acid = acidJSON[apiaiResponse["result"]["parameters"]["PeopleNames"].toLowerCase()]
                        
                        url = "https://cmtest.nuk9.com/api1/devices/hack_" + unique_command + "/" + unique_acid + "?api_key=" + api1key;

                        appsService.getData(url).then(function (data) {
                        $scope.loader = false;
                        $scope.deviceCommand = data;
                        console.log($scope.apps);

                        // $scope.merchant.description=data.description;
                    }, function (error) {
                        $scope.error = "Error in creating your bussiness!";
                        $state.go("home");
                    });        
                    }


                });

                console.log($scope.text);
            }
        }
    );


	
});