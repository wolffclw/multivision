var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	title: {type:String, required: '{PATH} is required'},
	featured: {type:Boolean, required: '{PATH} is required'},
	published: {type:Date, required: '{PATH} is required'},
	tags: [String]
});

courseSchema.methods = {
	
}

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
	Course.find({}).exec(function(err,collection) {
		if(collection.length === 0) {
			Course.create({title:'Bootstrap 101', featured:true, published: new Date('10/5/2013'), tags:['Frontend']});
			Course.create({title:'Angular Basics', featured:true, published: new Date('11/5/2013'), tags:['Frontend']});
			Course.create({title:'MongoDB', featured:true, published: new Date('12/5/2013'), tags:['DB']});
			Course.create({title:'Intro to NodeJS', featured:true, published: new Date('1/5/2014'), tags:['Node']});
			Course.create({title:'Express with Node', featured:true, published: new Date('2/5/2014'), tags:['Node']});
			Course.create({title:'Heroku', featured:false, published: new Date('10/8/2013'), tags:['Cloud']});
			Course.create({title:'Bower Package Manager', featured:true, published: new Date('10/10/2013'), tags:['Node']});
			Course.create({title:'Mongoose', featured:true, published: new Date('10/12/2013'), tags:['Node', 'DB']});
			Course.create({title:'Jade View Engine', featured:false, published: new Date('10/14/2013'), tags:['Frontend', 'Node']});
			Course.create({title:'Stylus', featured:false, published: new Date('12/12/2013'), tags:['Frontend']});
			Course.create({title:'Toastr Library', featured:false, published: new Date('12/20/2013'), tags:['Frontend']});
			Course.create({title:'Auth with Passport', featured:false, published: new Date('1/20/2013'), tags:['Node']});
		}
	})
}

exports.createDefaultCourses = createDefaultCourses;