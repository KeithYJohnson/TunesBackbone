window.app.views.AlbumView = Backbone.View.extend({

  tagName: 'div',
  id: 'album-page',
  template: JST['templates/album'],

  events: {
    'click .queue-add' : 'selectAlbum',
    'click .show-tracks' : 'showTracks'
  },

	render: function (){
    var newalbum = this.template({album : this.model});
    this.$el.html(newalbum);
    return this;
  },

  selectAlbum: function(){
    this.collection.add(this.model);
  },

  showTracks: function(){
    // this.model.tracks = new app.collections.TrackList();
    // this.model.tracks.url = '/albums/' + this.model.id + '/tracks';
    // tracks = this.model.tracks.fetch();
    // console.log(tracks);
    _this = this
    tracks = this.model.getTracks();
    tracks.forEach(function(track){
        console.log(track);
        console.log(track.attributes.title);
        _this.$el.find('.album-info').append(track.attributes.title);
 
    });
    return this;
  //   .forEach(function(track){
  //     console.log(track);
  //   });

  }

});

//    render: function() {
//      this.$el.html(this.template({ project : this.model }));
// +    var _this = this;
// +    this.model.getSkills().forEach(function(skill) {
// +      var skill_html = new app.views._Skill({
// +        project: _this.model,
// +        model: skill
// +      });
// +      _this.$el.find('.skill-list').append(skill_html.render().el);
// +    });
// +
//      return this;
//    },