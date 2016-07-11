requirejs.config({    
	 paths:{
		  'magix' : 'js/requirejs-magix',
      'jquery' : 'js/jquery',
      'underscore' : 'js/underscore',
      'brix/event': 'js/brix/event',
      'app' : 'app/'
	 }
  });
  require(['magix'], function(Magix) {
      Magix.start({
        iniFile: 'app/ini',
        error: function(e) {
            throw e
        }
      });
  });