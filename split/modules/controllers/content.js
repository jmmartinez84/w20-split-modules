define(function () {
    var SplitContent = function ($scope, dataService) {
		$scope.versionNumber = "1.0.0.0";
		dataService.get(function (data) {
            $scope.versionNumber = data.version;           
        });
	}
	return ["$scope","DataService", SplitContent];
});
