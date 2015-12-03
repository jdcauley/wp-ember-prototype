import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
    return this.store.get('posts');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
  },
	
});
