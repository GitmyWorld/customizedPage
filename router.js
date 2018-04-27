/*
  create 2018-04-27 by wuguanyi
*/
define(['backbone'], function () {
	var Router = Backbone.Router.extend({
		routes: {
			'module1': 'module1',
			'module2(/:name)': 'module2',
			'*actions': 'defaultAction'
		},

		// 路由初始化
		initialize: function () {

		},

		module1: function () {
			var url = 'module1/controller1.js'
		    require([url], function (controller){
		    	controller()
		    })
		},

		// name 和路由配置:name一致
		module2: function(name) {
			var url = 'module2/controller2.js'
			require([url],function(controller){
				controller(name)
			})
		},

		defaultAction: function () {
		  console.log(404)
		  location.hash = 'module2'
		}
	});

	var router = new Router();
	router.on('route',function(route, params){
		console.log('hash change',arguments)
	})
	return router;    //这里必须的，让路由表执行
})