define(['module2/model2','module2/view2'], function (Model,View) {
	var controller = function (name) {
		var model = new Model();
		name && model.set({
			name: name
		})
		var view  = new View({model:model})
		view.render() // 利用Model定义的默认属性初始化界面
		model.fetch()
	};
	return controller
})