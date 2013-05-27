app.views.Home = Backbone.View.extend({

  template: JST['templates/home'],

  events: {
    'click #add-album' : 'albumSelect'
  },

  render: function() {        
    albumList = new app.collections.AlbumList();
    var _this = this;  
    $(this.el).html(this.template({}));
    albumList.fetch({
      success: function(albums){
        albums.forEach(function(album){
          var view = new app.views.AlbumView({
            model: album,
            collection: _this.collection
          });
          _this.$el.find('#albums').append(view.render().el);
        });
        return this;
      }
    });
    return this;
  }  

});