var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://mvuser:multivision@ds047458.mongolab.com:47458/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}