app.models.Album = Backbone.Model.extend({

	urlRoot: 'albums',

  initialize: function() {

  },  

	title: function() {
		return this.attributes.title;
	},

	artist: function() {
		return this.attributes.artist;
	},

  getTracks: function() {
    this.tracks = new app.collections.TrackList();
    this.tracks.url = '/albums/' + this.id + '/tracks';
    this.tracks.fetch();
    return this.tracks
    // return this.tracks.where({ album_id : this.id });
  },

	isFirstTrack: function(index) {
		return index == 0;
	},

	isLastTrack: function(index) {
		return index >= this.get('tracks').length-1;
	}

});
