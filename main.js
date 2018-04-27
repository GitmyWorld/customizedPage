/*
  create 2018-04-27 by wuguanyi
*/
(function(win){
	var baseUrl= document.getElementById('main').getAttribute('data-baseurl')

	var config = {
		baseUrl: baseUrl, 
		paths: {
			'zepto': 'lib/zepto.min',
			'jquery': 'lib/jquery-3.3.1.min',
			'underscore': 'lib/underscore-min',
			'backbone': 'lib/backbone-min',
			'text': 'lib/text'
		},
		shim: {
			'underscore': {
				exports: '_'
			},
			'jquery': {
				exports: '$'
			},
			'zepto': {
				exports: '$'
			},
			'backbone': {
				dep: ['underscore', 'jquery'],
				exports: 'Backbone'
			}
		}
	};

	require.config(config)

	//Backbone会把自己加到全局变量中
	    require(['backbone', 'underscore', 'router'], function(){
	        Backbone.history.start();   //开始监控url变化
	    });

})(window)