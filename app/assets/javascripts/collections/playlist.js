app.collections.Playlists = app.collections.AlbumList.extend({

	
	isFirstAlbum: function(index) {
		return (index == 0)
	},

	isLastAlbum: function(indeX){
		return (index == (this.models.length-1))
	}
})