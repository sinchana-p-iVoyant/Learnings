console.log("----Promises----")

// eg.1
var complete = true;

var prom = new Promise(function(resolve, reject){
    if (complete){
        resolve("I am Successfull. ");
    }
    else{
        reject("I am failed. ");
    }
})

console.log(prom);

// eg.2
console.log("----Ex.2 ----")

function prom1(complete){
    return new Promise(function (resolve, reject){
        if(complete){
            resolve("I am Successful.")
        }
        else{
            reject("I am failed.")
        }
    })
}

console.log(prom1(true));
console.log(prom1(false));

// eg.3
console.log("----Ex.3----")

function prom2(complete){
    return new Promise(function (resolve, reject){
        if(complete){
            resolve("I am Successful.")
        }
        else{
            reject("I am failed.")
        }
    })
}

var onfulfilment = (result) => {
    console.log(result)
}

var onrejection = (error) => {
    console.log(error)
}

prom2(true).then(onfulfilment);
prom2(true).catch(onrejection);

// eg.4
console.log("----Ex.4----")

function prom3(complete){
    return new Promise(function(resolve, reject){
        console.log("Fetching data, please wait");
        setTimeout(() => {
            if (complete){
                resolve("I am Successful.")
            }else{
                reject("I am failed.")
            }
        }, 1000)
    });
};

var onfulfilment2 = (result) => {
    console.log(result)
}

var onrejection2 = (error) => {
    console.log(error)
}

prom3(false).then(onfulfilment2).catch(onrejection2);

// eg.5

console.log("----Ex.5----")

function prom4(complete){
    return new Promise(function(resolve, reject){
        console.log("Fetching data, please wait");
        setTimeout(() => {
            if (complete){
                resolve("I am Successful.")
            }else{
                reject("I am failed.")
            }
        }, 1000)
    });
};


prom4(true).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
});

// eg.6
console.log("----Ex.6----")


function prom5(a,b){
    return new Promise(function(resolve, reject) {
        console.log("Fetching Data, Please wait");
        var c=a/b;

        setTimeout(() => {
            if (a,b){
                resolve(`Your answer is: ${c}`)
            }else{
                reject("Failed to calculate.")
            }
        },1000)
    })
}


prom5(4,8).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

// eg.2      

console.log("----Ex.2----")

