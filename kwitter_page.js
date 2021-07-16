// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1Hcc8UmT5JBKyltvKgJOpEJqa9n6qYzc",
    authDomain: "cp93-d0af0.firebaseapp.com",
    databaseURL: "https://cp93-d0af0-default-rtdb.firebaseio.com",
    projectId: "cp93-d0af0",
    storageBucket: "cp93-d0af0.appspot.com",
    messagingSenderId: "942767678396",
    appId: "1:942767678396:web:82cd9ed1537303f87dc1b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Room Name");
    user_name = localStorage.getItem("User Name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}