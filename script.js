/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");
const listenButton = document.getElementById("listenButton");
let nscores = {
  game1: {
    users: {
      bob: 9,
      greg: 6,
      britton: 1,
    }
  },
  game2: {
    users: {
      bob: 4,
      greg: 16,
      britton: 0,
    }
  }
};

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
console.log("Program Online. Current Version: exp1.2");
console.log("Have Fun");



///Read and Write tests
function helloWorld() {
  console.log("Running helloWorld()")
  firebase.database().ref('/testing').update(
    {
      message: 'Hello World',
    }
  )
}

function goodbyeWorld() {
  console.log("Running goodbyeWorld()")
  firebase.database().ref('/testing').update(
    {
      message: 'Goodbye',
    }
  )
}


var dbdata;

///display the databases value for "message"
function display(snapshot) {
  dbdata = snapshot.val()
  console.log("running display()... the message is: " + snapshot.val() + "!");
  HTML_OUTPUT.innerHTML = snapshot.val();
  console.log(snapshot.val());
}



///Display Functions
///Listen for when a value in the database changes and activate the request function
function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('/').on('value', fb_logDatabaseRead);
  listenButton.style.display = "none";
}

///send a request for the data from firebase, and send the message to the display function
function fb_logDatabaseRead() {
  console.log("Reading message...");
  firebase.database().ref('/testing').child('message').once('value', display);
  console.log("leaving on Read...")
}

////The code above worked first try, yippee!

//                pain.



function scoresystem() {
  /*
let HighScores = Object.keys(scores);

  for (i = 0; - i < scores.length; i++) {
    let key = scores[i];
    console.log("Scores are: " + i + " for " + key + ". " + HighScores[key] + " points.");
  };
*/
console.log("Reading High Scores");
firebase.database().ref('/scores')
   .once('value', fb_displayHighScores);

}

function fb_displayHighScores(snapshot) {
  snapshot.forEach (fb_showOneScore);
}

function fb_showOneScore(child) {
  console.log(child.key+ ": " + child.val());
}


function fb_logDatabaseScores() {
  console.log("Reading message...");
  firebase.database().ref('/').child('scores').once('value', display);
  console.log("leaving on Read...")
}





//{user1: 4, user2: 568, user3: 57575757554554}user1: 4user2: 568user3: 57575757554554[[Prototype]]: Object
//console.log(dbdata["user2"])
//HTML_OUTPUT.innerHTML = dbdata["user2"]
//568