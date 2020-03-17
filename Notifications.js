<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'/>
  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'>
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
  <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js'></script>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'/>

  <link rel='icon' type='text/css' href='irobrixqw1.png'>
  <title>Profile</title>
  

  <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
  
<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>
  <!-- Add Firebase products that you want to use -->
  
    <link href='vendor/mdi-font/css/material-design-iconic-font.min.css' rel='stylesheet' media='all'>
    <link href='vendor/font-awesome-4.7/css/font-awesome.min.css' rel='stylesheet' media='all'>
    <!-- Font special for pages-->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i' rel='stylesheet'>

    <!-- Vendor CSS-->
    <link href='vendor/select2/select2.min.css' rel='stylesheet' media='all'>
    <link href='vendor/datepicker/daterangepicker.css' rel='stylesheet' media='all'>

    <!-- Main CSS-->
    <link href='css/main.css' rel='stylesheet' media='all'>
    <script language='javascript'>
var popupWindow = null;
function centeredPopup(url,winName,w,h,scroll){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
popupWindow = window.open(url,winName,settings)
}
</script>

 
  <style type='text/css'>
    body
    {
      font-family: Segoe UI;
    }
    .container
    {
      height: 100%;
      width: 100%;
    }
    
    h3
    {
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 7px;
    }
    a
    {
      text-decoration: none;
    }
    nav ul
    {
      margin-left: 360px;
      display: flex;
    }
    nav ul li
    {
      list-style: none;
      
    }
    a
    {
      text-decoration: none;
    }
    nav ul li a
    {

      font-weight: bold;
      font-family: Segoe UI;
      font-size: 15px;
      padding: 1rem 0;
      margin: 0 3rem;
      position: relative;
      letter-spacing: 1px;
      color: black;
      transition: .5s;
    }
    nav ul li a:last-child
    {
      margin-right: 0;
    }
    nav ul li a::before,
    nav ul li a::after
    {
      text-decoration: none;
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: #E52E2E;
      transition: all.5s;
      transform: scaleX(0);

    }
    nav ul li a:hover:before
    {
      transform: scaleX(1);
      transform-origin: left;
    }
    nav ul li a:after
    {
      top: 0;
    }
    nav ul li a:before
    {
      bottom: 0; 
    }
    nav ul li a:hover:after
    {
      transform: scaleX(1);
      transform-origin: right;
    }
    nav ul li a:hover
    {
      text-decoration: none;
      color: #E52E2E;
      transition-delay: .1s;
    }
    nav
    {
      padding-top: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      font-size: 15px;
    }
    .container_animated_slideInLeft , .logo
    {
      float: left;
      margin-top: 5px;
    }
    .container_animated_slideInLeft
    {

      margin-left: 150px;
    }
    .logo
    {
      margin-top: 30px;
      margin-left: 50px;
    }
    .profile
    {
      margin-top: 40px;
      margin-left: 80px;
      border-radius: 4px;
      height: 500px;
      width: 85%;
      box-shadow: 4px 4px 8px 4px #888888;
    }
    .profile_pic
    {
      border-radius: 50%;
      margin-top: 30px;
    }
    .name
    {
      margin-left: 50px;
      font-size: 20px;
      text-decoration-style: bold;
    }
    .inner
    {
      font-family: Segoe UI;
      border-radius:4px;
      align-items: center;
      height: 500px;
      width: 250px;
    }
    .inner2
    {
      font-family: Segoe UI;
      height: 150px;
      width: 870px;
    }
    .inner3
    {
      font-family: Segoe UI;
      height: 350px;
      width: 870px;
    }
    .inner, .inner2 , .inner3
    {
      float: left;
    }
    span
    {
      word-spacing: 50px;
    }
    button
    {
      background-color: #FFCF4c;
      border-radius:4px;
      border-style: none;
      color: white;
    }
    .bio
    {
      font-family: Segoe UI;
      height: 100px;
      width: 600px;
      float: right;
      margin-top: 10px;
    }
    .edit_bio
    {
      background-color: red;
      color: white;
      width: 100px;
      height: 25px;
      border-radius:4px;
      border-style: none;
    }
    .name, .hello
    {
      margin-left: 50px;
    }
    .name
    {
      font-size: 15px;
      color: grey;
    }
    .hello
    {
      color: black;
    }
    .edit_profile
    {
      margin-left: 50px;
      border-style: none;
      background-color: red;
      color: white;
      width: 100px;
      height: 25px;
    }
    .work_pic
    {
      margin-left: 50px;
      margin-top: 25px;
    }
    {box-sizing: border-box;}

/* Button used to open the chat form - fixed at the bottom of the page */


/* The popup chat - hidden by default */


/* Add styles to the form container */

  </style>
</head>
<body>


<!-- Modal -->
<div id='myModal' class='modal fade' role='dialog'>
  <div class='modal-dialog'>

<!-- Modal content-->
<div class='modal-content'>
<div class='modal-header'>
<button type='button' class='close' data-dismiss='modal'>×</button>
<h4 class='modal-title'>Profile Update</h4>
</div>
<div class='modal-body'>

        <form role='form' method='post' id='reused_form' >
        <p>
            Send your message in the form below and we will get back to you as early as possible.
        </p>

        <div class='form-group'>
            <label for='name'>
                Name:</label>
            <input type='text' class='form-control'
            id='name1' name='name'  value=''>

        </div>
        <div class='form-group'>
            <label for='email'>
                Email:</label>
            <input type='email' class='form-control'
            id='email1' name='email' value=''>
        </div>
        <div class='form-group'>
            <label for='contact'>
                contact:</label>
            <input type='text' class='form-control'
            id='contact' name='contact' value=''>
        </div>
        <div class='form-group'>
            <label for='address'>
                Address:</label>
            <input type='text' class='form-control'
            id='address1' name='address' value=''>
        </div>
        <div class='form-group'>
            <label for='projects'>
                Projects(Not For Customer Only Users):</label>
            <input type='text' class='form-control'
            id='projects' name='projects' value=''>
        </div>
        <div class='form-group'>
            <label for='Experience'>
                Experience(Not For Customer Only Users)::</label>
            <input type='email' class='form-control'
            id='Experience' name='Experience' value=''>
        </div>
        <div class='form-group'>
            <label for='name'>
                Bio:</label>
            <textarea class='form-control' type='textarea' name='Bio'
            id='Bio'  value=''
            maxlength='6000' rows='7'></textarea>
        </div>




        <button type='button' class='btn btn-lg btn-success btn-block' id='btnContactUs' onclick='fn22();'>Update it! →</button>

    </form>
    <div id='success_message' style='width:100%; height:100%; display:none; '>
        <h3>Sent your message successfully!</h3>
    </div>
    <div id='error_message'
    style='width:100%; height:100%; display:none; '>
        <h3>Error</h3>
        Sorry there was an error sending your form.

    </div>
</div>

</div>

 </div>
</div>

<div class='container'>

  <div class='logo'><a href='Home.html'><img src='irobrixqw1.png' height='32px' width='34px'></a></div>
  <div class='container_animated_slideInLeft'>
    <nav>
      
      <ul>
        <li><a href='home.html'>Home</a></li>
        <li><a href='store/store.php'>Store</a></li>
        <li><a href='gallery.html'>Portal</a></li>
        <li><a href='about.html'>About Us</a></li>
        <li><a href='Contact_us.html'>Contact Us</a></li>
        <li id="lo"></li>
      </ul>
    </nav>
  </div>
  <br>
</div>


<div id='wrapper'>

  Loading Profile Please Wait
</div>
<script> var firebaseConfig = {
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
             var projin=document.getElementById("projects").value;
             var expin=document.getElementById("Experience").value;
             var voin=document.getElementById("Bio").value;
            firebase.database().ref('/'+role+'/' +firebase.auth().currentUser.uid).update({
    name: namein ,
    Name:namein,
    emailID: emailin,
    Email:emailin,
    phoneNo :contactin,
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
   if(role!="Users")
    {
      $("#wrapper").html("<div class='profile'>\
    <div class='inner'>\
      <center>\
    <img class='profile_pic' id='pp' src='' height='150px' width='150px' alt='Loading Image'>\
    <p><a href='test.html' onclick='centeredPopup(this.href,'myWindow','700','300','yes');return false'><i class='material-icons'>border_color</i></a></p>\
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
    </center>\
  </div>\
  <div class='inner2'><div class='bio'><p id='bio'>Not Added</p>\
\
  <center><div id='dou'></div></center>\
  </div>\
\
  <h4 class='hello'><b>Hello</b></h4>\
  <h5 class='name'>Loading Name</h5>\
  <br>\
  <button class='edit_profile' button type='button' data-toggle='modal' data-target='#myModal'>Edit Profile</button>\
  </div>\
  <div class='inner3' id='inner3'>\
    \
  </div>\
    <p id='share-profile'></p>\
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

      $("#wrapper").attr("style","background-image: url('building_cc0_city_89485_A1_Rectangle_308_pattern@2x.png');padding-bottom:20%;padding-top:3%;background-size:cover; background-repeat: no-repeat;");
      $("#wrapper").html("<div id='profile'>\
      <center>\
    <div class='inner'>\
<h3>Profile Details:</h3>\
    <img class='profile_pic' id='pp' src='' height='150px' width='150px' alt='Loading Image'>\
    <p><a href='test.html' onclick='centeredPopup(this.href,'myWindow','700','300','yes');return false'><i class='material-icons'>border_color</i></a></p>\
    <br><br>\
    <h4 id='uname'> Loading Name</h4>\
    <h6 id='role'>Customer</h6>\
    <br>\<br>\
    <h6 id='email'></h6>\
    <span id='exp'></span><br>\
    <span id='exp2'></span>\
    <br>\
    <p id='address'></p>\
  </div>\
  </center>"
  );
    $("#profile").attr("style","position:relative;left:35%;height:400px;");
    $(".inner").attr("style","background:white;border: 1px solid #000000;")
    }
   $('#uname').html("<b>"+username+"</b>");
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
  function Logout(){firebase.auth().signOut().then(function() {window.location.href='Signup.html';});}
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
	window.location.href="Login.html";
}

}
$(function(){setTimeout(fn2,5000);
  


});</script>