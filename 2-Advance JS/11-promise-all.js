console.log("----Promise-all----")

// eg.1
// console.log("----Ex.1----")
// var p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log("The first promise has resolved")
//         resolve(10)
//     }, 1*1000);
// })

// var p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("The second promise has resolved")
//         resolve(20)
//     }, 2*1000)
// })

// var p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("The third promise has resolved")
//         resolve(30)
//     }, 3*1000);
// })

// Promise.all([p1,p2,p3]).then((result) => {
//     console.log(`Result: ${result}`)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// });

// eg.2
// console.log("----Ex.2----")

// var p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log("The first promise has resolved")
//         resolve(100)
//     }, 1*1000);
// })

// var p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("The second promise has resolved")
//         resolve(200)
//     }, 2*1000)
// })

// var p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("The third promise has resolved")
//         resolve(300)
//         // reject("failed")
//     }, 3*1000);
// })

// var total = 0;
// Promise.all([p1,p2,p3]).then((result) => {
//     for(var i in result){
//         total += result[i]
//     }
//     console.log(`Result: ${result}`)
//     console.log(result)

//     console.log(`Total: ${total}`)
//     console.log(total)
// }).catch((error) => {
//     console.log(error)
// })

// eg.3
// Promise function
console.log("----Ex.3----")

let promiseCall = function(returnData, message){
    return function(resolve, reject){
        setTimeout(() => {
            console.log(`The ${message} promise has been resolved`)
        },returnData * 100);
    }
};

let prom11 = new Promise(promiseCall(10, "first"))
let prom22 = new Promise(promiseCall(20, "second"))
let prom33 = new Promise(promiseCall(30, "third"))