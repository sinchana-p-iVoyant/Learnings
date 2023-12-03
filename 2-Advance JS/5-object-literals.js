console.log("----Object Literals----");

// Before
var name = "Yahoo Baba",
	course = "Btech";

var obj = {
	name : name,
	course : course
};

console.log(obj);
console.log(obj.name);

// With Object Literals
var name = "Yahoo Baba",
	course = "Btech";

var obj = {
   name,
   course 
};

console.log(obj);
console.log(obj.name);

// Variable as a property name
var n = "name";

var obj = {
   [n] : "Yahoo Baba",
   course : "Btech", 
   detail(){
	return `${this.name} is student of ${this.course}`;
   }
};

// Computed property name  
var name = 'student';

var obj = {
   [name + "name"] : "Yahoo Baba",
   course : "Btech", 
   detail(){
	return `${this.studentname} is student of ${this.course}`;
   }
};

// Declare function in object "before" Object Literals 
var obj = {
	 name,
	 course, 
	 detail : function(){
	    return `${this.name} is student of ${this.course}`;
	 }
};

console.log(obj.detail());

// Declare function in object "with" Object Literals 
var obj = {
	 name,
	 course, 
	 detail(){
       return `${this.name} is student of ${this.course}`;
     }
};

console.log(obj.detail());

// New Way to view object's property value
console.log(obj['name']);
console.log(obj['detail']());

// Return Function value as a Object Literal 
var fname = 'Ram',
    lname = 'Kumar',
    course = 'Btech'

function student(fname, lname, course){
	var fullname = fname + " " + lname;

	return {fullname, course};
}

console.log(student(fname, lname, course));

// lets take variable "s" as Object 
function student(fname, lname, course){
	var fullname = fname + " " + lname;

	return {fullname, course};
}

var s = student("Ram","Kumar", "Bcom");

console.log(s.fullname);
console.log(s.course);


// 

console.log("---abc---")
var name = 'sinch', age = 25;

var a = {
    name, age
}

function abc(a){
    var b = {...a}
    console.log(b);
       
};

abc(a)