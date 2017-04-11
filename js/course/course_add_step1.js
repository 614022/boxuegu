define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'template', 'jqueryForm'], 
	function($, common, undefined, undefined, nprogress, loading, template, undefined) {
	
	/**
	 * 1、获取url查询字符串中的cs_id
	 * 2、利用这个cs_id请求接口获取当前课程的基本信息，渲染页面进行数据回显
	 * 3、初始化表单提交插件
	 * */
	
	// 1、获取url查询字符串中的cs_id
	var csId = common.parseSearch('cs_id');
	
	// 2、利用这个cs_id请求接口获取当前课程的基本信息，渲染页面进行数据回显
	$.get('/v6/course/basic', { cs_id: csId }, function(data) {
		if(data.code == 200) {
			$('.steps').html(template('add-step1-tpl', data.result));
		}
	});
	
	nprogress.done();
});
