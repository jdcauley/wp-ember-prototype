import Ember from 'ember';

export default Ember.Controller.extend({

	main: function(){

    return this.store.findAll('post');

  }.property(),

  actions: {

    search: function(){
      var terms = this.get('terms');
      this.store.unloadAll('post');
      return this.store.find('post', {terms: terms});
    },

    next: function(){
      var count = this.store.all('post').get('length');
      this.store.find('post', {count: 4, offset: count});
    },

  }

});
