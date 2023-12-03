// let a = "Hello TS!"
// console.warn(a)
// export {}
// class App {
//     test() {
//         console.warn("Test function working fine")
//     }
// }
// let x = new App()
// x.test()
// 1. TYPE :
// var b = 10
// console.warn(b)
// var a:number = 10.10
// console.warn(a)
// var c:string=10  // Error: Type 'number' is not assignable to type 'string'.
// console.warn(c)
// var d:string = "hello"
// console.warn(d)
// var e:boolean = true;
// console.warn(e)
// 2. ARRAY:
// let data = ['anil', 'joe', 'mario', 10, false]
// data.push(true)  //  Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// data.push(100)  // Argument of type 'number' is not assignable to parameter of type 'string'.
// data[3] = true
// console.warn(data)
// let data1:string[] = ['anil', 'joe', 'mario']  
// data.push("peter")
// console.warn(data1)
// let data1:string[] = ['anil', 'joe', 'mario', 100]  //Type 'number' is not assignable to type 'string'. 
// console.warn(data1)
// 3. OBJECT:
// let users = {
//     name: "bruce",          // default: string
//     age: 30,                // default: number
//     address: 'USA'          // default: string
// }
// users.name=200        // Type 'number' is not assignable to type 'string'.
// console.warn(users)
// users.name = "peter"
// console.warn(users)
// users.email = "peeter@gmail.com"  //  Property 'email' does not exist on type '{ name: string; age: number; address: string; }'
//  ---- define a custom type for object & any
// interface usersTyped{
//     name: string,
//     age: number,
//     address: any
// }
// let users1:usersTyped = {
//     name: "bruce",          // default: string
//     age: 30,                // default: number
//     address: 100          // default: string
// }
// console.warn(users1)
// ----- any 
// let users2:any = {
//     name: "bruce",          // default: string
//     age: 30,                // default: number
//     address: 100          // default: string
// }
// users2.name = 100
// console.warn(users2)
// 4. UNION Types:  |
// --- issue:
// let data2:string = "anil"
// // data2=30    //Type 'number' is not assignable to type 'string'.
// console.warn(data2)
//  --- Solution: instead of "any", use Union |.
// let data3: string | number | boolean = "anil"
// data3 = 107
// data3 = true
// console.warn(data3)
// 5. Interface in TS
// interface userType{
//     name:string,
//     age:number,
//     getName: () => string       // datatype of "return" value
// }
// let mydata:userType = {
//     name: 'sinchana',
//     age: 21,
//     getName: () => {return "Hello from getName function!"}
// }
// console.log(mydata.getName())
// 6. Functions:
// --- normal
// function Cals(){
//     return 10+10
// }
// console.warn(Cals())
// --- Define return value of function
// function Cals1():number
// {
//     return "Hello"  // Type 'string' is not assignable to type 'number'.
// }
// console.warn(Cals())
// --- pass parameters
// function Cals2(a):number
// {
//     return a  
// }
// console.warn(Cals2(100))
// function Cals3(a:number, b:number):number
// {
//     return a+b  
// }
// console.warn(Cals3(170, 50))
// --- optional parameter
// function Cals4(a:number, b?:number):number
// {
//     return b?a+b:a  
// }
// console.warn(Cals4(170))
// 7. Class:
// class App {
//     name = "Sinch"
//     constructor(){
//         console.warn("Constuctor called")
//     }
//     getName()
//     {
//         console.warn(this.name)
//     }
// }
// let a2 = new App()
// a2.getName()
// --- pass name by constructor
// class App {
//     name;
//     constructor(name){
//         this.name=name
//         console.warn("Constuctor called")
//     }
//     getName()
//     {
//         console.warn(this.name)
//     }
// }
// let a2 = new App("Bear")
// a2.getName()
// --- Define Data Types for Properties:
// class App {
//     name:string;
//     constructor(name:string){
//         this.name=name
//         console.warn("Constuctor called")
//     }
//     getName():string        // :void - if it returns nothing
//     {
//         console.warn(this.name)
//         return this.name
//     }
// }
// let a2 = new App("Bear")
// console.warn(a2.getName())
// 8. INHERITANCE:
// class Parent{
//     name
//     setName(name){
//         this.name=name
//     }
// }
// class Child extends Parent{
//     getName(){
//         return this.name
//     }
// }
// let c1 = new Child()
// c1.setName("Sinch")
// console.log(c1.getName())
//
// class Parent{
//     name:string
//     setName(name:string):void
//     {
//         this.name=name
//     }
// }
// class Child extends Parent{
//     getName():string
//     {
//         return this.name
//     }
// }
// let c1 = new Child()
// c1.setName("Sinch")
// console.log(c1.getName())
// 9. NAMESPACE:
var UserUtils;
(function (UserUtils) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "Sinch";
        };
        return Users;
    }());
    UserUtils.Users = Users;
})(UserUtils || (UserUtils = {}));
var u1 = new UserUtils.Users();
console.log(u1.getName());
