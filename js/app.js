var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('tabController', function ($scope) {
	$scope.TabNames = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU', 'VWX', 'YZ'];
});