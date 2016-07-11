define("app/views/default",["magix"],function(magix){
	console.log(arguments);
	var a = magix.View.extend({
		render : function() {
			console.log(this);
			this.setHTML(this.id,this.tmpl);
		}
	});
	console.log(a);
	return a;
});