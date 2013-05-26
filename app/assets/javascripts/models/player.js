app.models.Player = Backbone.Model.extend({
	defaults: {
		'currentAlbumIndex' : 0,
		'currentTrackIndex' : 0,
		'state' : 'stop'
	}, 

	initialize: function() {
		this.playlist = new app.collections.Playlists();
	},

	// State-of-the-player functions
	play: function() {
		this.set({'state':'play'});
	},

	pause: function() {
		this.set({'state':'pause'})
	},

	// Examining the state attribute
	isPlaying: function() {
		return (this.get('state')=='play');
	},

	// Assumption if its not playing, then it must be stopped
	isStopped: function() {
		return (!this.isPlaying());
	},

	// To figure out which song to play...
	// (1) Get the currently playing album
	currentAlbum: function () {
		return this.playlist.at(this.get('currentAlbumIndex'));
	},

	// getting URL of the audiofile of the current song
	// Retrieves current album, finds current track, then returns url for the audio file to that track
	currentTrackURL : function () {
		var album = this.currentAlbum();
		return album.trackUrlAtIndex(this.get('currentTrackIndex'));
	},

  nextTrack: function() {
    var currentTrackIndex = this.get('currentTrackIndex'),
    currentAlbumIndex = this.get('currentAlbumIndex');
    if (this.currentAlbum().isLastTrack(currentTrackIndex)) {
        if (this.playlist.isLastAlbum(currentAlbumIndex)) {
            this.set({
                'currentAlbumIndex': 0
            });
            this.set({
                'currentTrackIndex': 0
            });
        } else {
            this.set({
                'currentAlbumIndex': currentAlbumIndex + 1
            });
            this.set({
                'currentTrackIndex': 0
            });
        }
    } else {
        this.set({
            'currentTrackIndex': currentTrackIndex + 1
        });
    }
    this.logCurrentAlbumAndTrack();
	},

	prevTrack: function() {
	    var currentTrackIndex = this.get('currentTrackIndex'),
	    currentAlbumIndex = this.get('currentAlbumIndex'),
	    lastModelIndex = 0;
	    if (this.currentAlbum().isFirstTrack(currentTrackIndex)) {
	        if (this.playlist.isFirstAlbum(currentAlbumIndex)) {
	            lastModelIndex = this.playlist.models.length - 1;
	            this.set({
	                'currentAlbumIndex': lastModelIndex
	            });
	        } else {
	            this.set({
	                'currentAlbumIndex': currentAlbumIndex - 1
	            });
	        }
	        // In either case, go to last track on album
	        var lastTrackIndex =
	        this.currentAlbum().get('tracks').length - 1;
	        this.set({
	            'currentTrackIndex': lastTrackIndex
	        });
	    } else {
	        this.set({
	            'currentTrackIndex': currentTrackIndex - 1
	        });
	    }
	    this.logCurrentAlbumAndTrack();
	},

	logCurrentAlbumAndTrack: function() {
	    console.log("Player " +
	    this.get('currentAlbumIndex') + ':' +
	    this.get('currentTrackIndex'), this);
	}



});