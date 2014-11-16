function ctrl($scope){
    
  
  $scope.age = 0;
  
  $scope.incrementAge = function(){
   $scope.age = $scope.age + 1;   
  }
  
   $scope.decrementAge = function(){
   $scope.age = $scope.age - 1;   
  }
                 
}