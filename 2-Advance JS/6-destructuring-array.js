console.log("----Destructuring Array----");

var user = ["Yahoo Baba", 25, "Delhi"];
		
var [name, age, city] = user;

console.log(name);
console.log(age);
console.log(city);

// Using Default Value
var user = ["Yahoo Baba", 25, "Delhi"];
		
var [name, age = 20, city] = user;

// With Nested Array
var user = ["Yahoo Baba", 25, "Delhi", ["Male", 25000]];
var [name, age = 20, city, [gender, salary]] = user;

console.log(gender);
console.log(salary);

// Using Rest Operator 
var user = ["Yahoo Baba", 25, "Delhi"];

var [name, ...args] = user;

console.log(name);
console.log(args);

// Using with function
function user1([name, age = 20, city]){
	console.log(name);
	console.log(age);
	console.log(city);
}

user1(["Yahoo Baba", 25, "Delhi"]);

// Return an Array from Function
function user2(){
   return ["Yahoo Baba", 25, "Delhi"];
}

var [name, age = 20, city] = user2();

console.log(city); 
