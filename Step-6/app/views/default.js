define("app/views/default",["magix"],function(magix){
	//console.log(arguments);
	var a = magix.View.extend({
		init : function() {
			this.observeLocation({
				path: true
			});
		},
		render : function(e) {
			if (!e) {
				console.log(this);
				console.log(this.tmpl);
				this.setHTML(this.id, this.tmpl);
				//var vframe = magix.VOM.get('magix_vf_main');
				//var viewPath = 'app/views/default';
            	//vframe.mountView(viewPath);
            	/*
            		magix 中 fetchTmpl 方法
					var file = Paths[name] + path.substring(idx + 1) + '.html';
					Paths 是 空Object {},
					name 是app, Paths["name"] 是undefined

					//初始化 Paths
					if (!Paths[name]) {
                    	Paths[name] = require.s.contexts._.config.paths[name];
                	}
                	//这里 requirejs 跟 magix 建立联系
                	require.s.contexts._.config.paths：
						brix/event "app/common/brix/event"
						jquery "app/common/jquery"
						magix "app/common/requirejs-magix"
						mustache "app/common/mustache"
						underscore "app/common/underscore"
            	*/
			}
			this.mountMainFrame();
		},
		mountMainFrame: function () {
			var path = this.location.path;
			var pns = path.split('/');
			pns.shift();
			if (pns[0] == 'home') {
				pns.push('index'); //特殊处理home
			}

			var viewPath = 'app/views/' +  pns.join('/');
			console.log(viewPath);
            var vframe = magix.VOM.get('magix_vf_main');
  
            vframe.mountView(viewPath);
		}
	});
	//console.log(a);
	return a;
});