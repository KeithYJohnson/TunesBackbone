app.views.Home = Backbone.View.extend({

  template: JST['templates/home'],

    render: function() {
    this.$el.html(this.template());

    // Find all the albums in the system
    var albums = new app.collections.AlbumList();
    albums.fetch();
    console.log(this.$el)
    console.log(this.template());
    console.log(albums);
    var _this = this;

    albums.fetch({
      success: function(albums, response, options) {
        albums.forEach(function(album) {
        _this.$el.find("#albums").append("<li><a href='#' class='album-link' data-id='" + album.id + "'>" + album.title() + "</a></li>" + "by " + album.artist());
        });
      }
    });

    // Add a <li> element containing a link to each profile page
    return this;
  },

});