console.log("----Rest Operator----");

function sum(name, ...args){
    console.log(arguments)
    console.log("args: " + args);
    document.write(`Hello ${name} <br>
                     Your Marks : `);
    
    let sum = 0;
    for(let i in args){
        sum += args[i];
    }

    document.write(sum);
}

sum("Yahoo Baba",10,20,30,40,50);

