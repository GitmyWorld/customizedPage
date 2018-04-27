define(['text!module2/tpl.html'],function (tpl){
	var View2 = Backbone.View.extend({
		el: '#container',
		events: {
			'click button': 'clickSpan'
		},
		initialize: function () {
            this.model.on('nameEvent', this.render, this);      //监听事件
        },
		render: function () {
			this.$el.html(_.template(tpl)({name: this.model.get('name')}))
		},
		clickSpan: function (e) {
			console.log(this.model.get('name'))
			alert('you click')
		}
	})
	return View2
})