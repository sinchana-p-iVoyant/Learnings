console.log("----Spread Operator----");

function sum(name,...args){
	console.log(arguments);

	document.write(`Hello ${name} : `);

	let sum = 0;
	for(let i in args){
		sum += args[i];
	}

	document.write(`Sum is: ${sum}`);
}

var arr = [20,30,40];
sum("Yahoo Baba", ...arr);
 
// Spread Operator with Objects
 
var obj1 = {
	name : "Yahoo Baba",
	course : "Btech"
}

var obj2 = {
	age : 25
}

var obj3 = {...obj1, ...obj2};
	
console.log(obj3);
