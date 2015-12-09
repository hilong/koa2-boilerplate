angular.module('app', ['ngRouter', 'app.controllers', 'app.services'])

.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('/tab', {
		url: '/tab',
	})

})
