define("app/ini",function(Magix){
	return {
		defaultView: 'app/views/default',
		defaultPath: '/app',
        routes: function(path) {
        	console.log(path);
            return this.defaultView;
        }
	}
});