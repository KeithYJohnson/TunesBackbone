app.views.PlaylistView = Backbone.View.extend ({
	tag: 'section',
	className: 'playlist',
	
	template: JST['templates/playlist'],

	events: {
		'click .album-remove' : 'removeAlbum',
	},

	initialize: function (){
		this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'remove',this.render);
	},

	render: function () {
		$(this.el).html(this.template({albums: this.collection}));
		// this.$('button.play').toggle(this.player.isStopped());
		// this.$('button.pause').toggle(this.player.isPlaying());

	return this;
	},

	removeAlbum: function () {
		var cid = $(event.target).data('cid');
		var remove = this.collection.findWhere({cid : cid});
		this.collection.remove(remove);
		// event.currentTarget
	}

});