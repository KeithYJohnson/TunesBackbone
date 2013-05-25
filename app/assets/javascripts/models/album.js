app.models.Album = Backbone.Model.extend({

  // Add a URL Structure, configure in routes.rb
title: function() {
	return this.attributes.title;
}

  });

// var album = new app.models.Album();
