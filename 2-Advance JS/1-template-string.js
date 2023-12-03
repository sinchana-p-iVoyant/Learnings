console.log("----Template string----")

// Before
 
var user = "Yahoo Baba";
var marks = 350;
document.write("Hello " + user + " your marks is "+marks);
console.log("Hello " + user + " your marks is "+marks)

// With Template String
 
var user = "Yahoo Baba";
var marks = 350;
document.write(`Hello  ${user}  your marks is ${marks} `);
console.log(`Hello  ${user}  your marks is ${marks} `);

// Template String with Function
 
let firstName = "Yahoo";
let lastName = "Baba";

function fullname(firstName, lastName){
   return `${firstName} ${lastName}`;
}

let hello = `Hello  ${fullname(firstName, lastName)}  Welcome to 2021.`;

document.write(hello);
console.log(hello);
