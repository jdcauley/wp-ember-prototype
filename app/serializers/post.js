import DS from 'ember-data';

export default DS.RESTSerializer.extend({

	normalizePayload: function(payload) {

				console.log({posts: payload});
        return {posts: payload};
    }

});
