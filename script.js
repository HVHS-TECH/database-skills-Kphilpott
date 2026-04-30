/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");
const listenButton = document.getElementById("listenButton");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/

///fun startup segment :)
console.log("Database online. Initiating Program...");
console.log("Done");
console.log("Program Online. Current Version: 0.1.1.");
console.log("Have Fun");



///Read and Write tests
function helloWorld() {
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Hello World'
    }
  )
}

function goodbyeWorld() {
  console.log("Running goodbyeWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Goodbye'
    }
  )
}




///display the databases value for "message"
function display(snapshot) {
console.log("running display()... the message is: " + snapshot.val() + "!");
HTML_OUTPUT.innerHTML = snapshot.val();
}




///Display Functions
///Listen for when a value in the database changes and activate the request function
function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('/message').on('value', fb_logDatabaseRead);
  listenButton.remove();
}

///send a request for the data from firebase, and send the message to the display function
function fb_logDatabaseRead() {
  console.log ("Reading message...");
  firebase.database().ref('/').child('message').once('value', display);
console.log("leaving on Read...")
}

                  ////Worked first try, yippee!
