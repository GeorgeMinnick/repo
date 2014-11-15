App = Ember.Application.create();

App.Router.map(function(){
  this.route('conditional');
});

App.IndexRoute = Ember.Route.extend({
  isOn: false  
});
