app.views.TrackView = Backbone.View.extend({

  template: JST['templates/track'],

	// render: function (){
 //    tracks = new app.collections.TrackList();
 //    var _this = this;
 //    $(this.el).html(this.template({}));
 //    tracks.fetch({
 //      success: function(tracks){
 //        tracks.forEach(function(track){
 //          _this.$el.find(".album-tracks").append(track)
 //        });
 //      }
 //    });
	// }

}); 

  // showTracks: function(){

  //   _this = this
  //   this.model.getTracks({
  //     success: function(tracks){
  //       console.log(tracks);
  //       tracks.forEach(function(track){
  //       _this.$el.find('.tracks').append("<li>"+track.attributes.title+"</li>");
  //       });
  //     }
  //   });
  // },