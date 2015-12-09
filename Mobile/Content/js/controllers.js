angular.module('app.controllers', [])
	.controller('UserSettingQuestion', ['$scope', function ($scope, Questions) {
		$scope.questions = Questions.all();
		$scope.remove = function () {}
	}])
	.controller('UserOrder', ['$scope', function ($scope) {
		$scope.orders = Orders.all();
	}])
	.controller('SelectPinPai', ['$scope', function ($scope) {
		$scope.
	}])
