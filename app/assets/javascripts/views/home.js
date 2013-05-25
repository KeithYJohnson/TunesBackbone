app.views.Home = Backbone.View.extend({

  template: JST['templates/home'],

  events: {
    'click .album-link' : 'showUser'
  },

  render: function() {
  this.$el.html(this.template());

  // Find all the albums in the system
  var albums = new app.collections.AlbumList();
  var _this = this;

  albums.fetch({
    success: function(albums, response, options) {
      albums.forEach(function(album) {
        console.log(album);
      _this.$el.find("#albums").append("<li><a href='#' class='album-link' data-id='" + album.id + "'>" + album.title() + "</a></li>" + "by " + album.artist());
      });
    }
  });
    return this;
  },

  showTracks: function () {
    
  }

});