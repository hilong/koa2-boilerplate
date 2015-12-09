angular.moudle('app.services', [])

.factory('Questions', function () {
	var questions = [
		{
			id: 1,
			title: 'question title 1',
			content: 'question content 1',
				}, {
			id: 2,
			title: 'question title 2',
			content: 'question content 2',
				}, {
			id: 3,
			title: 'question title 3',
			content: 'question content 3',
				}, {
			id: 4,
			title: 'question title 4',
			content: 'question content 4',
				}, {
			id: 5,
			title: 'question title 5',
			content: 'question content 5',
				}, {
			id: 6,
			title: 'question title 6',
			content: 'question content 6',
				}];
	return {
		all: function () {
			return questions;
		},
		remove: function (question) {
			questions.splice(questions.indexOf(question), 1);
		},
		get: function (questionId) {
			for (var i = 0; i < questions.length; i++) {
				if (questions[i].id === parseInt(questionId)) {
					return questions[i];
				}
			}
			return null;
		}
	};
})

.factory('Brands', function () {
	var brands = [
		{
			id: 1,
			brandName: '宝马',
			brandType: [{
				typeName: '宝马X1',
			}, {
				typeName: '宝马X3',
			}, {
				typeName: '宝马X5',
			}, {
				typeName: '宝马X7',
			}],
		}, {
			id: 2,
			brandName: '奥迪',
			brandType: [{
				typeName: '奥迪A1',
			}, {
				typeName: '奥迪A3',
			}, {
				typeName: '奥迪A4',
			}, {
				typeName: '奥迪A5',
			}, {
				typeName: '奥迪A6',
			}, {
				typeName: '奥迪A8',
			}, {
				typeName: '奥迪Q1',
			}, {
				typeName: '奥迪Q3',
			}, {
				typeName: '奥迪Q5',
			}, {
				typeName: '奥迪Q7',
			}],
		}, {
			id: 3,
			brandName: '沃尔沃',
			brandType: [{
				typeName: '沃尔沃XC60',
			}, {
				typeName: '沃尔沃XC90',
			}],
		}, {
			id: 2,
			brandName: '一汽大众',
			brandType: [{
				typeName: '奥迪A1',
			}, {
				typeName: '奥迪A3',
			}, {
				typeName: '奥迪A4',
			}, {
				typeName: '奥迪A5',
			}, {
				typeName: '奥迪A6',
			}, {
				typeName: '奥迪A8',
			}, {
				typeName: '奥迪Q1',
			}, {
				typeName: '奥迪Q3',
			}, {
				typeName: '奥迪Q5',
			}, {
				typeName: '奥迪Q7',
			}],
		}, {
			id: 2,
			brandName: '上海大众',
			brandType: [{
				typeName: '奥迪A1',
			}, {
				typeName: '奥迪A3',
			}, {
				typeName: '奥迪A4',
			}, {
				typeName: '奥迪A5',
			}, {
				typeName: '奥迪A6',
			}, {
				typeName: '奥迪A8',
			}, {
				typeName: '奥迪Q1',
			}, {
				typeName: '奥迪Q3',
			}, {
				typeName: '奥迪Q5',
			}, {
				typeName: '奥迪Q7',
			}],
		}];
	return {
		all: function () {
			return brands;
		},
		selected: function (brand) {
			brands.splice(brands.indexOf(brands), 1);
		},
		get: function (questionId) {
			for (var i = 0; i < questions.length; i++) {
				if (questions[i].id === parseInt(questionId)) {
					return questions[i];
				}
			}
			return null;
		}
	};
})
