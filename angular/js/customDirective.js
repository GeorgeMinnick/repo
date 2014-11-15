var app = angular.module("directiveTest", []);

app.controller("AppCtrl", function($scope) {
    $scope.text = "I'm a custom directive!";
})
app.directive("mycustomdirective", function() {
    return {
        restrict: "E",
        template: "<input ng-model=text></input><h1>h1: {{text}}</h1><h2>h2: {{text}}</h2><h3>h3: {{text}}</h3><h4>h4: {{text}}</h4><h5>h5: {{text}}</h5><h6>h6: {{text}}</h6>"
    }
    

})