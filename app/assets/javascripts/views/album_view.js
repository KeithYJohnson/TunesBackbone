app.views.AlbumView = Backbone.View.extend({

  tagName: 'div',
  id: 'album-page',
  template: JST['templates/album'],

	render: function (){
		// Find the HTML template content located somewhere in the HTML document, Setup the template engine
    var _this= this;
    // Get some HTML from somewhere
    var album = this.template({album: this.model });

    // console.log(this.model);
    console.log(album);
    console.log(this.model);
    album_info = this.model;
    // Append it to this view's div#bio element
    this.$el.html(album);

    return this;
  }

});