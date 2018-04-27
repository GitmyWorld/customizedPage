define(['text!module1/tpl.html'],function (tpl) {
	var View1  = Backbone.View.extend({
		el: '#container',
		initialize: function () {

		},
		render: function (name) {
			// this.$el.html(_.template(tpl, {"name": name})) //错误

			// var compiled  = _.template(tpl)
			// this.$el.html(compiled({'name': name}))
			this.$el.html(_.template(tpl)({"name": name})) 
		}
	});
	return View1
})