function componentCtrl($scope){
    
  
  $scope.buttonClick = function(){
   var num = Math.floor((Math.random() * 9999999999) + 1);
   alert(num);
  }
       
  $scope.text = "This is a built in Angular helper. It is created using the <textarea> tag but there are built-in directives associated with it. These include, ng-model,ng-required,ng-minlength,ng-maxlength,ng-pattern,ng-change, and ng-trim. It is also easy to bind this data to the model using the ng-model directive attribute.";
}