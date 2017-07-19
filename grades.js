console.log("Hi");
var grade = {
	_grades: [],
	gradeCount: function(){
		return this._grades.length;
	},
	addGrades: function(item){
		this._grades.push(item);
	}
};

var express = require('express');
var app = express();

app.listen(3000);
app.get('/',function(req,res){
res.write('Hello World!');
});

exports.grade = grade;

