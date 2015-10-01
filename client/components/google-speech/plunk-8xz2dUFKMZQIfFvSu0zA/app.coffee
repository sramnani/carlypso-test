app = angular.module("plunker", ["jonniespratley.angularWebSpeechDirective"])

#Main controller
app.controller "MainCtrl", ($scope) ->
  $scope.speech = 
    maxResults: 25
    continuous: true
    interimResults: true
  