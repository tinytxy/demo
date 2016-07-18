define("app/models/model",["magix"],function(magix){
	return magix.Model.extend({
		sync : function(callback){
			var me = this;
			$.ajax({

				url: me.get('url'),
				dataType: 'json',
				success: function(data){
					callback(null,{
						list:data
					});
				},
				error: function(xhr,msg){
					callback(msg);
				}
			});
		}
	});
});