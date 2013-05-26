app.collections.AlbumList = Backbone.Collection.extend({

  model: app.models.Album,
  // tells backbone to go and retrieve info at this path from rails server	
  url: '/albums'


});

