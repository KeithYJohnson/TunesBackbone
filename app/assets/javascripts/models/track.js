app.models.Track = Backbone.Model.extend({



	title: function() {
		return this.attributes.title;
	},

	album_id: function() {
		return this.attributes.album_id;
	}

});