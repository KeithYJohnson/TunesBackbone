app.views.Home = Backbone.View.extend({

  template: JST['templates/home'],

  events: {
    'click #add-album' : 'albumSelect'
  },

  initialize: function (){
    // The reset event is fired when a group of models is loaded into a collection
    // this.collection.bind('reset', this.render);
  },

  render: function() {
    // Find ul list element from the current element's markup
    // and insert some rendered views into it
        
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
            model: album
          });
          // append to the dom

          _this.$el.find('#albums').append(view.render().el);
        });
        return this;
      }
    });
    return this;
  }  

    //   console.log(album);
    //   var view = new apps.views.AlbumView({
    //     model: album
    //   });
    //   // Append to the DOM
    //   $albums.append(view.render().el);
    // });
    // return this;

  // albums.fetch({
  //   success: function(albums, response, options) {
  //     albums.forEach(function(album) {
  //     _this.$el.find("#albums").append("<li><button class='btn btn-primary' img='add.png' id='add-album'>Add</button><a href='#' class='album-link' data-id='" + album.id + "'>" + album.title() + "</a></li>" + "by " + album.artist());
  //     });
  //   }
  // });
  //   return this;
  // },
});