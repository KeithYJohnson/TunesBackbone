app.collections.AlbumList = Backbone.Collection.extend({

  model: app.models.Album,
  url: '/albums'


});

