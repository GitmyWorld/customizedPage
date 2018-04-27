// 严格mvc
define([],function(){
	var Model2 = Backbone.Model.extend({
		// 模型默认数据
		defaults: function () {
			return {
				name :'noname'
			}
		},
		// 定义方法
		fetch: function () {
			var o  = this

			setTimeout(function () {
				o.set({name:'vivi'});
				o.trigger('nameEvent'); // 向view触发事件
			}, 1000);
		}
	})
	return Model2
})