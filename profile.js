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
  firebase.initializeApp(firebaseConfig);

			var username="";
            var role="";
            var email="";
            var image="";
       function fn22()
       {     var namein=document.getElementById("name1").value;
             var emailin=document.getElementById("email1").value;
             var contactin=document.getElementById("contact").value;
             var addressin=document.getElementById("address1").value;
             var g=document.getElementById("Gender").value;
             var projin="None";
             var expin="None";
             var voin="Bio Not Added";
             if(role!="Users")
             {
             var projin=document.getElementById("projects").value;
             var expin=document.getElementById("Experience").value;
             var voin=document.getElementById("Bio").value;
             }
            firebase.database().ref('/'+role+'/' +firebase.auth().currentUser.uid).update({
    name: namein ,
    emailID: emailin,
    phoneNo :contactin,
    gender:g,
    address:addressin,
    project:projin,
    experience:expin,
    Bio:voin
  
  },function(error)
  {
  	if(error)
  	{
  		alert(error);
  	}
  	else
  	{
  		window.location.reload();
  	}
  });
        }
			 function fn(userId)

			{
				
				
return firebase.database().ref('/'+role+'/' + userId).once('value').then(function(snapshot) {
username = (snapshot.val() && snapshot.val().name) || (snapshot.val() && snapshot.val().Name)||'Anonymous';
    email = (snapshot.val() && snapshot.val().emailID) || (snapshot.val() && snapshot.val().Email)||'Not Feching';
   var contact = (snapshot.val() && snapshot.val().phoneNo) || 'Not Given';
    image = (snapshot.val() && snapshot.val().image) ||(snapshot.val() && snapshot.val().imageUrl)|| 'https://firebasestorage.googleapis.com/v0/b/irobrix-f7b78.appspot.com/o/profile.png?alt=media&amp;token=bed51a93-3097-4028-8e58-aef2f03434b9';
   var projects=(snapshot.val() && snapshot.val().project) || 'No Projects';
  var Exp = (snapshot.val() && snapshot.val().experience) || (snapshot.val() && snapshot.val().experience)||'None';
   var vio = (snapshot.val() && snapshot.val().Bio) || 'Bio Not added';
   var address = (snapshot.val() && snapshot.val().address) || 'Address Not added';
   var notread = (snapshot.val() && snapshot.val().notread) || 0;
   var g=(snapshot.val()&&snapshot.val().gender)||"MALE";
   if(role!="Users")
    {
      $("#wrapper").html("<div class='profile'>\
    <div class='inner'>\
      <center>\
    <img class='profile_pic' id='pp' src='' height='150px' width='150px' alt='Loading Image'>\
    <p><a href='test.html' onclick='centeredPopup(this.href,'myWindow','700','300','yes');return false'><img class='icon' src='photo-camera1.png'></a></p>\
    <br><br>\
    <h4 id='uname'> Loading Name</h4>\
    <h6 id='role'>Loading Role</h6>\
    <br>\
    <button id='Ntfn'>Notification</button><br><br>\
    <h6 id='email'></h6>\
    <span id='exp'></span><br>\
    <span id='exp2'></span>\
    <br>\
    <p id='address'></p>\
  </div>\
  <div class='inner2'><div class='bio'><p id='bio'>Not Added</p>\
\
  <center><div id='dou'></div></center>\
  </div>\
\
  <h4 class='hello'><b>Hello</b></h4>\
  <h5 class='name'>Loading Name</h5>\
  <br>\<br>\
  <button class='edit_profile' button type='button' data-toggle='modal' data-target='#myModal'>Edit Profile</button>\
  </div>\
  <div class='inner3' id='inner3'>\
    \
  </div>\
    <p id='share-profile'></p>\
    </center>\
  </div>");
    var dat="";
     firebase.database().ref("/"+role+"/" + firebase.auth().currentUser.uid+"/Works/").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
  dat+="<img class='work_pic' src="+childData+" height='100px' width='150px'>";
  });
      $("#inner3").html(dat);  
      $("#dou").html("<a href='test1.html' class='edit_bio' onclick='centeredPopup(this.href,'myWindow','700','300','yes');return false'>Upload Works</a>");  
   
});
    }
    else
    {

      $("#wrapper").attr("style","background-image: url('building_cc0_city_89485_A1_Rectangle_308_pattern@2x.png');padding-bottom:10%;padding-top:3%;background-size:cover; background-repeat: no-repeat;");
      $("#wrapper").html("<div id='profile'>\
      <center>\
    <div class='inner'>\
    <br>\
<h3>Profile Details:</h3>\
    <img class='profile_pic' id='pp' src='' height='150px' width='150px' alt='Loading Image'>\
    <p><a href='test.html' onclick='centeredPopup(this.href,'myWindow','700','300','yes');return false'><img class='icon' src='photo-camera1.png'></a></p>\
    <br>\
    <h4 id='uname'> Loading Name</h4>\
    <h6 id='role'>Customer</h6>\
    <br>\
    <h5 id='Gender'></h6>\
    <h6 id='email'></h6>\
    <span id='exp'>  <button class='edit_profile' button type='button' data-toggle='modal' data-target='#myModal'>Edit Profile</button></span><br>\
    <span id='exp2'></span>\
    <br>\
    <p id='address'></p>\
    <a class='myorderup' href='store/myorders.html'><button class='myorder'>MyOrders</button></a>\
  </div>\
  </center>"
  );
    $("#profile").attr("style","position:relative;left:35%;height:400px;");
    $(".inner").attr("style","background:white;border: 1px solid #000000;")
    }
   $('#uname').html("<b>"+username+"</b>");
  $("#form-wrapper").html("");
   $('.name').html(username);
    $('#email').html(email);
    $("#pp").attr("src",image);
    $("#email1").attr("value",email);
    $("#name1").attr("value",username);
    $("#contact").attr("value",contact);
    $("#projects").attr("value",projects);
    $("#address1").attr("value",address);
    $("#address").html(address);
    $("#Experience").attr("value",Exp);
    $("#Bio").html(vio);
    $("#bio").html(vio);
    console.log(g);
    document.getElementById("Gender").value=g;
    if(role!="Users")
    {
      $("#role").html(role);
    	$('#exp').html("Projects&nbsp;Experience");
    $('#exp2').html(projects+"&nbsp;&nbsp;"+Exp);
    $("#Ntfn").html("Notification("+notread+")");
    $("#Ntfn").click(function(){window.location.href="Notifications.html";});
    }

}
);

}
function fn3(role,userId)
	{

	}
  function Logout(){firebase.auth().signOut().then(function() {window.location.href='index.html';});}
function fn2() {
	var user=firebase.auth().currentUser;
	console.log(user);
	if(user)
{
	url="http://localhost/Ecommerce/capstone-20191102T201003Z-001/capstone/getProfile.php?id="+user.uid+"&email="+user.email;
	$("#share-profile").html("<b>shareable profile link:</b><a href='"+url+"'>"+url+"</a>");
  $("#lo").html("<a href=\"#\" onclick=\"Logout();\">\
        <b> Logout</b></a>");

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

  setTimeout(function(){  fn(user.uid)},5000);
	if(role!="Users")
{
 setTimeout(function(){  fn3(role,user.uid)},5000);

     
}
}
else
{
	alert("Please login");
	window.location.href="index.html";
}

}
$(function(){setTimeout(fn2,5000);
  


});