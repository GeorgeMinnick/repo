function componentCtrl($scope){
    
  
  $scope.buttonClick = function(){
   var num = Math.floor((Math.random() * 9999999999) + 1);
   alert(num);
  }
                 
}