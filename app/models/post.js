import DS from 'ember-data';

export default DS.Model.extend({

	title: DS.attr(),
	content: DS.attr(),
	featured_image_url: DS.attr()

});
