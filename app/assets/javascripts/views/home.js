app.views.Home = Backbone.View.extend({

  template: JST['templates/home'],

  events: {
    // 'click .album-link' : 'showAlbum'
  },

    render: function() {
    this.$el.html(this.template());

    // Find all the albums in the system
    var albums = new app.collections.AlbumList();
    console.log('hello');
    console.log(albums);
    var _this = this;
    console.log(_this);
    albums.fetch({
      success: function(albums, response, options) {
        albums.forEach(function(album) {

        _this.$el.find("#albums").append("<li><a href='#' class='user-link' data-id='" + album.id + "'>" + album.title() + "</a></li>");
        });
      }
    });

    // Add a <li> element containing a link to each profile page
    return this;
  },

});