angular.module('app').controller('mvMainCtrl', function($scope) {
	$scope.courses = [
		{name: 'Node', featured: true, published: new Date('1/1/2013')},
		{name: 'Express', featured: true, published: new Date('2/1/2013')},
		{name: 'Angular', featured: false, published: new Date('3/1/2013')},
		{name: 'NPM', featured: false, published: new Date('3/1/2013')},
		{name: 'Bower', featured: false, published: new Date('3/1/2013')},
		{name: 'Heroku', featured: false, published: new Date('3/1/2013')},
		{name: 'MongoLab', featured: false, published: new Date('3/1/2013')},
		{name: 'Sublime Text', featured: false, published: new Date('3/1/2013')},
		{name: 'Bootstrap', featured: false, published: new Date('3/1/2013')},
		{name: 'Mongoose', featured: false, published: new Date('3/1/2013')},
		{name: 'Stylus', featured: false, published: new Date('3/1/2013')},
		{name: 'Jade', featured: false, published: new Date('3/1/2013')},
		{name: 'NodeMon', featured: false, published: new Date('3/1/2013')},
		{name: 'MongoDB', featured: true, published: new Date('4/1/2013')}
	]
});