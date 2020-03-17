var firebaseConfig = {
    apiKey: "AIzaSyDYuktSJLGiIONGJAVX--GPE0qaAptm3UM",
    authDomain: "irobrix-f7b78.firebaseapp.com",
    databaseURL: "https://irobrix-f7b78.firebaseio.com",
    projectId: "irobrix-f7b78",
    storageBucket: "irobrix-f7b78.appspot.com",
    messagingSenderId: "726815192697",
    appId: "1:726815192697:web:e96c6c6403e86749d086a8"
  };
  // Initialize Firebase
function Logout(){firebase.auth().signOut().then(function() {window.location.href='../index.html';});}
  firebase.initializeApp(firebaseConfig);

			var username="";
            var role="";
            var email="";
            var image="";
       
        
			 function fn(userId)

			{
				
				
return firebase.database().ref('/'+role+'/' + userId).once('value').then(function(snapshot) {
   username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
   
   $('#uname').html("<b> Hello "+username+"</b>");
   $("#lo").html("<a href=\"#\" onclick=\"Logout();\">\
        <b> Logout</b></a>");
    

}
);

}

function fn2() {
	var user=firebase.auth().currentUser;
	console.log(user);
	if(user)
{

  var fd=1;
  firebase.database().ref().child("Architects").orderByChild("emailID").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
    $('#role').html("Architect");
    role="Architects";
}
});
  firebase.database().ref().child("Architects").orderByChild("Email").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
    $('#role').html("Architect");
    role="Architects";
}
});

      firebase.database().ref().child("Engineers").orderByChild("emailID").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
     role="Engineers";

    $('#role').html("Engineer");
}
});
      firebase.database().ref().child("Engineers").orderByChild("Email").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
     role="Engineers";

    $('#role').html("Engineer");
}
});

        firebase.database().ref().child("Interior Designers").orderByChild("emailID").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
     role="Interior Designers";
    $('#role').html("Interior Designer");
}
});
        firebase.database().ref().child("Interior Designers").orderByChild("Email").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
     role="Interior Designers";
    $('#role').html("Interior Designer");
}
});
        firebase.database().ref().child("Users").orderByChild("emailID").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
     role="Users";
    $('#role').html("Customer");
}
});
	setTimeout(function(){ fn(user.uid) },2000);
	
}
else
{
$('#uname').html("<b> Login/Signup</b>");

}

}
$(function(){setTimeout(fn2,1500);
	


});

 