console.log('====================================');
console.log("----CLASS INHERITANCE----");
console.log('====================================');

class employee0{
    constructor(){
      console.log("constructor Function Employee");
    }
  }
  
  class manager extends employee0{ 
                                                                           
  }
  
  var a = new manager();
  
//   Use Consturctor of derived class
  class employee1{
    constructor(){
      console.log("constructor Function Employee");
    }
  }
  
  class manager1 extends employee1{
   constructor(){
     super();
     console.log("constructor Function Manager");
   }
  }
  
  var a = new manager1();
  
//   Advance Example
  class employee2{
            constructor(name, age, salary){
                this.empname = name;
                this.empage = age;
                this.empsalary = salary;
              //console.log("Constructor : Employee");
            }
  
            info(){
                document.write(`<h3>Employee Class</h3>
                                            Name : ${this.empname} <br>
                                            Age : : ${this.empage} <br>
                                            Salary : ${this.empsalary} <br>`)
            }
          }
  
          class manager2 extends employee2{
  
              info(){
                // this.info();
                document.write(`<h3>From Super</h3>`)
                super.info();

                var ta = 1000;
                var pa = 300;
                var totalsalary = this.empsalary + ta + pa;
                
                // this.info()
                document.write(`<h3>Manager Class</h3>
                                            Name : ${this.empname} <br>
                                            Age : : ${this.empage} <br>
                                            Salary : ${totalsalary} <br>`)
            }
          }

          var x = new manager2("ABC", 21, 50000)
          var y = new employee2("XYZ", 25, 80000)

        //   document.write(`<h1>From objects</h1>`)
        //   x.info()
        //   y.info()
  
        //   Multi Level Inheritance
          class test extends manager2{
  
          }
  
          var a = new test("Yahoo Baba", 25, 20000);
          var b = new employee2("Ram Kumar", 22, 12000);
  
          a.info();
          b.info();


          