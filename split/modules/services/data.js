define(function () {
    var DataService = function ($resource) {
        return  $resource(require.toUrl('{split}/data/data.json'));
	}
	return ["$resource", DataService];
});
