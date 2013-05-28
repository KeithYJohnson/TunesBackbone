app.models.Album = Backbone.Model.extend({

	urlRoot: 'albums',

  initialize: function() {
    this.tracks = new app.collections.TrackList();
    this.tracks.url = '/albums/' + this.id + '/tracks';
  },  

	title: function() {
		return this.attributes.title;
	},

	artist: function() {
		return this.attributes.artist;
	},

	isFirstTrack: function(index) {
		return index == 0;
	},

	isLastTrack: function(index) {
		return index >= this.get('tracks').length-1;
	}

});
