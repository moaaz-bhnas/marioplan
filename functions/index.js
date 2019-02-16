// We access different properties and methods on this (functions) module
const functions = require('firebase-functions'); 

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

/* 
- For each function we create, we attch it to the export object
- 'https.onRequest' means that 'helloWorld' is a type of function that we can request.
- 'onRequest(the rest ..)' means that we the request is recieved o the server, respond with 'Hello ..'.
*/

// This means that we can request our functions to be run via HTTP requests
// The trigger here is going to a specific url (endpoint)
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Moaaz!");
});
