app.models.Album = Backbone.Model.extend({


	initialize: function() {
	  this.tracks = new app.collections.TrackList();
	  this.tracks.model = app.models.Skill; 
	},

	title: function() {
		return this.attributes.title;
	},

	artist: function() {
		return this.attributes.artist;
	},

	tracks: function() {
		return this.attributes.tracks;
	},

	isFirstTrack: function(index) {
		return index == 0;
	},

	isLastTrack: function(index) {
		return index >= this.get('tracks').length-1;
	}

});
