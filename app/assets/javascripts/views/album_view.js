window.app.views.AlbumView = Backbone.View.extend({

  tagName: 'div',
  id: 'album-page',
  template: JST['templates/album'],

  events: {
    'click .queue-add' : 'selectAlbum',
    'click .show-tracks' : 'showTracks',
    'click .hide-tracks' : 'hideTracks',
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
    console.log('hi');
    var _this = this
    this.model.tracks.fetch({

      success: function(tracks){
        console.log(tracks);
        tracks.forEach(function(track){
        _this.$el.find('.tracks').append("<li>"+track.attributes.title+"</li>");
        });
      }
    });
  },

  hideTracks: function(){
      console.log(this);
  }  
});
