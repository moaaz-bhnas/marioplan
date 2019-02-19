// We access different properties and methods on this (functions) module
const functions = require('firebase-functions'); 

// Since we're gonna interact with Firebase services (auth - Firestore)
// we'll need to import admin
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase); // For some reason, we'll need to initialize the app with the admin :D

const createNotification = notification => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added ', doc));
}

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

// The trigger here is creating a new function.
exports.projectCreated = functions.firestore // Whenever 
  .document('/projects/{projectId}') // a new project (document) 
  .onCreate(doc => { // is created, fire this callback function.
    
    const project = doc.data(); // data about the project (title, content, authorFirstNAme ..)
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      // Stores the time this notification is created in this time property
      time: admin.firestore.FieldValue.serverTimestamp() 
    }

    return createNotification(notification);

})

// The trigger here is signing up.
exports.userJoined = functions.firestore
  .document('/users/{userId}')
  .onCreate(user => {

        const newUser = user.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp() 
        };

        return createNotification(notification);

});