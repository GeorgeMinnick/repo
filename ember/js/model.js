var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
  age: 0,
  actions: {
    older: function() {
      this.incrementProperty('age'); 
    },
    younger: function() {
      this.decrementProperty('age');
    }
  }
});