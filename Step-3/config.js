requirejs.config({
   baseUrl : '',    
	 paths:{
		  'magix' : 'app/common/requirejs-magix',
      'jquery' : 'app/common/jquery',
      'underscore' : 'app/common/underscore',
      'brix/event': 'app/common/brix/event',
      'mustache' : 'app/common/mustache',
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