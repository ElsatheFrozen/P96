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

  user_name = localStorage.getItem("User Name");
    document.getElementById("user_name").innerHTML = "Welcome " +user_name+ "!";

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }

  function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("Room Name", room_name);
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
       //End code
       });});}
 getData();
 
 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("Room Name", name);
       window.location = "kwitter_page.html";
 }

 function logout()
{
      localStorage.removeItem("User Name");
      localStorage.removeItem("Room Name");
      window.location = "index.html";
}
 