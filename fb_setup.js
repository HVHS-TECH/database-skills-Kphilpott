/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4zRYZ8D9Exhm4XOr6whJf88DsIa0bu3k",
  authDomain: "kees-philpott-12comp.firebaseapp.com",
  databaseURL: "https://kees-philpott-12comp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kees-philpott-12comp",
  storageBucket: "kees-philpott-12comp.firebasestorage.app",
  messagingSenderId: "269860776866",
  appId: "1:269860776866:web:0243dd5ab3dfe4062020fb",
  measurementId: "G-3SZ6X8X9P3"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
