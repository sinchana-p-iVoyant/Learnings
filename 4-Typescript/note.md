# Tutorial: Code Step By Step

# 1. Type in Typescript

int a=10
var a:number = 10

# 2. Array in TS

-- Array: is a collection of data types
- Array without Data Type
- push and update array operations in TS
- Mixed array
- Define array type

# 3. Typed Object

- default typed object
- update property
- add new property
- define a custom type for object
- use any with object

# 4. Union Types

- allows u to define, one or more data types in a variable.

# 5. Interface in TS

- why use interface
- how to use interface
- interface example with object (template)

Syntax
    interface interface_name {
        property_type: data_type,
        property_type: data_type,
    }

# 6. Function in TS

- Define a normal function
- Define function type
- Add params in function
- Define params type
- Optional params with type

# 7. Class in TS
-- file & class name shd be same always. (e.g., app.js & App)

- Define a Class
- Create an object for class
- Make property
- Make function
- Define data type of function and property
- Define data type to params

# 8. Inheritance in TS

- what is inheritance
- make a parent class
- make a child class
- inherit a class
- example

# 9. Namespace in TS
-- it is block of code, which have inter-related code

- What is namespace
- how to use it
- example for namespace

# 10. Module
-- Modules - is a block of code, it has related code - related functions, related variables, related classes.
-- same function names can be used in different modular files

- run: tsc *.ts -w
- tsc app.js (works)

- module in typescript 
- what is  module
- make 2 files and make the module
- use them in single file

# 11. Generics in TS

- What is Generics in TypeScript
- Why we need it 
- Make a program with Generics
- Make a program without Generics
- Check difference

# 12. Enum in TS
-- Enum: Is a set of values

- enum in TypeScript
- what is enum 
- Make a Program with enum 
- Use enum with variables
- Use enum with Function

# 13. Symbol
-- Symbol: primitive datatype in JS.
-- gives unique id, which we cannot see.

- Symbol in TypeScript
- what is Symbol 
- Make a Program with Symbol 
- Use Symbol as key of object 
- Use Symbol as function  of class

# 14. TSCONFIG FILE

- Configuration file in TypeScript
- How to make it 
- What we can config
- Try out with  some configuration

- CMD: tsc --init

- Edit tsconfig.json file:
    "rootDir": "./src", 
    "outDir": "./public", 
