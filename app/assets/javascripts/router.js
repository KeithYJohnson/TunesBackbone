app.Router = Backbone.Router.extend({

  routes: {
    '' : 'home',
    // 'users/:id' : 'userShow'
  },

  home: function() {

    var view = new app.views.Home();
    console.log(view);
    $('#content').html(view.render().el);
  }

  // userShow: function(user_id) {
  //   var user = new app.models.User({id: user_id});
  //   user.fetch({
  //     success : function(user){
  //           var view = new app.views.ProjectView({ model : user });
  //           $('#content').html(view.render().el);
  //     }
  //   });

  // }

});