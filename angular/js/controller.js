function ctrl($scope){
    
  
  var date = new Date();
  $scope.currentDate = date.getDate();
  $scope.currentDay = date.getDay();
  $scope.currentHours = date.getHours();
  $scope.currentMinutes = date.getMinutes();
  $scope.currentSeconds = date.getSeconds();
  $scope.currentDateString = date.toLocaleDateString();
                 
}