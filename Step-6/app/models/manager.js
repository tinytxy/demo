define('app/models/manager',['magix','app/models/model'],function(magix,Model){

	var Manager = magix.Manager.create(Model);
	Manager.registerModels({
		name: 'Campaings_list',
		url: 'api/list.json'
	});
	return Manager;
});