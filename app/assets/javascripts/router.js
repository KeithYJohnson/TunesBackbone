app.Router = Backbone.Router.extend({

  routes: {
    '' : 'home'

  },

  home: function() {
    var playlist = new app.collections.Playlists();

    var view = new app.views.Home({collection:playlist});
    $('#content').html(view.render().el); 
    // Assigning a new key(playlist, with the collection 'playlist' )
    var player = new app.views.PlaylistView({collection:playlist});
    $('#player').html(player.render().el);
  },


});