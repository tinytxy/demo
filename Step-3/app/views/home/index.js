define("app/views/home/index",["magix"],function(magix){
	var a = magix.View.extend({
		render : function() {
			console.log(this);
			this.setHTML(this.id,this.tmpl);
		}
	});
	return a;
});