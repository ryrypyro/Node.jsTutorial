//! What is Node.js? 

// Node.js/Node is a runtime environment for executing JavaScript code outside a browser
// You can make things like API's out of them
// Web apps, mobile apps, etc are also partially made with Node. Node is like a back-end code type thing 
// Node is used to make highly-scalable, data-intensive and real-time apps

// What's so special about node? It's great for prototyping and agile development. It was used in PayPal, Uber, NetFlix, and so on. 
// OVERALL: Node.js is great for websites, especially in the backend
// Node applications use JavaScript, Node is a part of JavaScript 
// It has a large ecosystem of open-source libraries open to you. 

//! Architecture of Node.js - 

// Before node, we used JS only to build applications that run inside of a browserr
// Every browser has a JS engine that takes JS code, and translates it into understandable code for computers 
//!? Internet Explorter: Chakra 
//* FireFox: SpiderMonkey 
//TODO Google Chrome: v8

// Sometimes, JS can behave differently in one browser than the other. 
// In 2009, Ryan Dahl (Creator of Node), made a way to make it so that JS code can be executed out of a browser. He took Google's v8 engine, and embedded it inside of a C++ program, and called it NODE.
// Again, Node is a runtime environment for JS code. 
// It contains a JS engine that can execute our JS code. But, it has certain objects that provide an environment for our JS code. But these objects are different from what we have in browsers.

// As an example, in Node, we don't have "documen.getElementByID('');"
// some objects that can be used are: 
//* fs.readFile(), http.createServer() (We cannot do these inside of a browser)

// Node basically includes the v8 JS engine plus some other additional modules that give us capabilities that are not inside of a regular browser.
//! Node.js is NOT a programming language, nor is it a framework. 

//! How does Node.js work - 

// an asynchronous architecture is an event-based, non-blocking architecture. When an asynchronous call is made, event handlers are registered with the API providing synchronization services, in order to notify the caller that the something the caller is interested in has happened 
// When we recieve a request on the server, a thread is supposed to handle that request. It is likely that we are going to query a database. 
// When the database is executing a query, that thread is sitting there, waiting. It cannot be used to serve another client. We need a NEW thread to serve another client. 
// If we had a large number of clients, (servers) we will eventually run out of threads to serve these clients. So the clients must wait until there are clients that are free
// Or, there is another way to keep the threads to serve the clients: //* Add more hardware. 

//? Node applications are asynchronous by default. 
// In node, we have a single thread to handle all the requests. When the request arrives, a single thread is supposed to handle that request. 
// if we need to query a database, our thread doesnt have to wait for the database to return their data, while the database is executing our query that thread will be used to serve another client. 
// When the database prepares the result, it puts a message in what is called an "EVENT QUEUE". 
// Node is monitoring this queue in the background. When it finds an event in this queue, it will take it out and process it. 
// This kind of architeture makes node ideal for building apps that include a lot of network access 
// Node apps are highly scalable because we can serve more clients without the need to throw in more hardware 

// Do NOT use Node for CPU-intensive apps (This calls for video game and stuff like GTA V, Call of Duty, etc). 

// Since node apps are single threaded, when performing the calulations to serve one client, other clients must wait, that is why node shouldnt be used for CPU-type/video game applications. 
// it should ONLY be used to make data-intensive/realtime applications. 

// "Since Node.js is single-threaded, CPU-intensive tasks will block all requests from completing, until the task is completed. Therefore Node.js isn't a good solution for CPU-intense tasks".