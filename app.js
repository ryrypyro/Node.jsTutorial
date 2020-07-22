// Regular JS.. 

function sayHello(name) {
    console.log('Hello ' + name); 
}

sayHello('Ryan!'); 
//* console.log(window); 

//! Node Core: 
// Node Module System: OS, fs, events, and http are built into the core of Node

//! Global Object: 
//* console.log(); // part of global scope 

// setTimeout() 
// clearTimeout(); 

//* setInterval() // used to repeatedly call a function after a given delay 
//* clearTimeout() // stops that function from being called repeatdely 

var message = ''; 
console.log(message); // global.message will not work because that var is not global, it's local.

// Modules 
/* var sayHello = function() {

}
window.sayHello; */ 

// we need to create small modules where we define our variables and functions

// at the core of node, we have a concept called a module 
// every file in a node application is considered a module 
// they are not available outside that module 
// if you want to use a variable or function defined in a module outsidethat module, you have to explicitly export/import it. 
console.log(module); 
// console.log(module); will give us details on our folder. 

// in node, every file is a module and the variables and functions defined in that file are a scope to that module, they are not available outside that module. 

//! Create and load a module
