window.app.views.AlbumView = Backbone.View.extend({

  tagName: 'div',
  id: 'album-page',
  template: JST['templates/album'],

  events: {
    'click .queue-add' : 'selectAlbum',
    'click .queue-remove' : 'removeAlbum'
  },

	render: function (){
		// Find the HTML template content located somewhere in the HTML document, Setup the template engine
    // Get some HTML from somewhere
    var newalbum = this.template({album : this.model});

    // Append it to this view's div#album-page element
    this.$el.html(newalbum);

    return this;
  },

  selectAlbum: function(){
    console.log(this.model);
    this.collection.add(this.model);
    console.log(this.model.cid);
  },

  removeAlbum: function() {
    console.log('bye');
  }

});

