app.models.Track = Backbone.Model.extend({

  url: function() {
  var url = '/albums/' + this.album.id + '/tracks';		
  return url;
  },

	title: function() {
		return this.attributes.title;
	},

	album_id: function() {
		return this.attributes.album_id;
	}

	isFirstTrack: function(index) {
		return index == 0;
	}
});