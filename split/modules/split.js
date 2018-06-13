define([
    '{angular}/angular',
    '{split-content}',
    '{split-version}',
    '{split-data}'
], function(angular, contentController, versionFilter, dataService) {
    'use strict';

	var module = angular.module('split', ['ngResource']);
    module.controller('ContentController', contentController);
    module.factory('DataService', dataService);
    module.filter('version', versionFilter);
	return {
		angularModules : [ 'split' ]
	};
});