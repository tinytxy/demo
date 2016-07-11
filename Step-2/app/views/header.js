define("app/views/header",["magix"],function(magix){
	var a = magix.View.extend({
		render : function() {
			this.setHTML(this.id,this.tmpl);
		}
	});
	return a;
});