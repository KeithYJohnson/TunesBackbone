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
    tracks = this.model.getTracks();
    console.log(tracks);
  }

});

