app.views.Home = Backbone.View.extend({

  template: JST['templates/home'],

  events: {
    'click #add-album' : 'albumSelect'
  },

  render: function() {        
    albumList = new app.collections.AlbumList();
    var _this = this;
    // This simply renders the template without passing any data to it
    $(this.el).html(this.template({}));
    // $albums will now refer to the part in the template we want to append to
    albumList.fetch({
      success: function(albums){
        albums.forEach(function(album){
          // console.log(album);

          var view = new app.views.AlbumView({
            model: album,
            collection: _this.collection
          });
          // append to the dom

          _this.$el.find('#albums').append(view.render().el);
        });
        return this;
      }
    });
    return this;
  }  

});