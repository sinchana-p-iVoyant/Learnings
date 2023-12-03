console.log("----Oops Introduction----");

class hello0{

    message(){
      console.log("Hello Everyone");
    }                                                                                             
   }
   
   var a = new hello0();
   
   console.log("Type of a is: " + typeof a);
   
   a.message();
   
//    1. Constructor function in class
   class student0{

     constructor(){
        console.log("Constructor Function is called automatically whenever a new object is created ")
     }	
   }
       
   var a = new student0();
   
//    Initilize Property
   class student1{
     constructor(){
       var studentname;
     }	
   }
   
   var a = new student1();
   
   a.studentname = "Yahoo Baba";
   
//    Initilize Property with constructor
   class student2{
     constructor(name){
       console.log("Hello " + name);
     }	
   }
   
   var a = new student2("Yahoo Baba");
   
//    2. Prototype method
   class student3{
     constructor(name){
       this.studentname = name;
     }
     hello1(){
       console.log("Hello " + this.studentname);
     }	
   }
   
   var a = new student3('Yahoo Baba');
   a.hello1();
   
//    3. Static Method
   class student4{
     static staticMethod(){
       console.log("Static Method");
     }
   }
   
   student4.staticMethod();