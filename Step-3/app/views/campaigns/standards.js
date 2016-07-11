define("app/views/campaigns/standards",["magix","mustache"],function(magix,mustache){
	var a = magix.View.extend({
		render : function() {
			var me = this;
			$.ajax({
				url: 'api/list.json',
                dataType: 'json',
                success: function(data) {
                	var html = mustache.to_html(me.tmpl, {
                		list: data
                	});
                    me.setHTML(me.id,html); 
                },
                error: function(xhr, msg) {
                    me.setHTML(me.id,msg); //出错时，直接显示错误
                }
			});
		}
	});
	return a;
});