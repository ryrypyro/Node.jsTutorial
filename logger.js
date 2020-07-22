// In this module, we are using a remote logging service, there are websites that give us a URL and we can send an HTTP reqeust to that URL to log messages in the cloud. 

var url = 'http://mylogger.io.log'; 

function log(message) {
    // Send an HTTP request
    console.log(message); 
}

module.exports.log = log; // "log" is the log function we have above. 
// we should be able to call this code from the app.js module, we need to make it public! 