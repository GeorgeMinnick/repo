App = Ember.Application.create();

App.Router.map(function(){
  this.route('dog');
});


App.IndexRoute = Ember.Route.extend({
  model: function() {
    return  "";     
                 
  },
    
    
 actions: {
    buttonClick: function() {
      var num = Math.floor((Math.random() * 9999999999) + 1);
      alert(num);
    }
  }
});
