App = Ember.Application.create();

var date = new Date();

App.IndexController = Ember.ObjectController.extend({
 
  currentDate : date.getDate(),
  currentDay : date.getDay(),
  currentHours : date.getHours(),
  currentMinutes : date.getMinutes(),
  currentSeconds : date.getSeconds(),
  currentDateString : date.toLocaleDateString() 
    

    

});

