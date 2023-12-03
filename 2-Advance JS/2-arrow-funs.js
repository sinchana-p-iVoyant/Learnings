console.log("----Arrow funs----")

// Before
 
var welcome = function(name){
   return `Welcome ${name}`;
}

console.log(welcome("Yahoo Baba"));

// With Arrow Function
 
var welcome = (name) => {
   return `Welcome ${name}`;
}

console.log(welcome("Yahoo Baba"));

// Arrow Function with Multiple Parameters
 
var welcome = (name,age) => {
 return `Welcome ${name} ${age}`;
}
	
console.log(welcome("Yahoo Baba", 30));
