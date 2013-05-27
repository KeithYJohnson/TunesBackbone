window.app.views.AlbumView = Backbone.View.extend({

  tagName: 'div',
  id: 'album-page',
  template: JST['templates/album'],

  events: {
    'click .queue-add' : 'selectAlbum',
    'click .show-tracks' : 'showTracks'
  },

	render: function (){
    var newalbum = this.template({album : this.model});
    this.$el.html(newalbum);
    return this;
  },

  selectAlbum: function(){
    this.collection.add(this.model);
  },

  showTracks: function(){

    _this = this
    tracks = this.model.getTracks();
    tracks.forEach(function(track){
        console.log(track);
        console.log(track.attributes.title);
        _this.$el.find('.tracks').append("<li>"+track.attributes.title+"</li>");
 
    });
    return this;
  }
});
