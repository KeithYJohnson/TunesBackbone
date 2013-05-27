app.collections.TrackList = Backbone.Collection.extend({

	model: app.models.Track,
  url: function(){
    return '/albums/' + this.album.id + 'tracks'
  }



});