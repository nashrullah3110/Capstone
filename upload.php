<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>

	<link rel="icon" type="text/css" href="irobrixqw1.png">
	<title>Profile</title>
	<script src="https://www.gstatic.com/firebasejs/7.2.3/firebase.js"></script>
    <script>
  // Your web app's Firebase configuration
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

</script>
  <script type="text/javascript">
  	var role="";
  	function fn5()
{
	window.location.href='Profile.html';
}
  	function fn3(role,userId,img)
  	{  var storageRef = firebase.storage().ref();
  		var uploadTask = storageRef.child("images/"+img).put(img);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion

uploadTask.on('state_changed', function(snapshot){
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  // Handle unsuccessful uploads
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    return firebase.database().ref('/'+role+'/' + userId).once('value').then(function(snapshot) {
   username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
   email = (snapshot.val() && snapshot.val().emailID) || 'Anonymous';
   var contact = (snapshot.val() && snapshot.val().phoneNo) || 'Anonymous';
   var proj = (snapshot.val() && snapshot.val().projects) || 'None';
   var exp= (snapshot.val() && snapshot.val().experience) || 'None';

  
   firebase.database().ref('/'+role+'/' +firebase.auth().currentUser.uid).set({
    name: username,
    emailID: email,
    phoneNo :contact,
    image: downloadURL,
    project:proj,
    experience:exp
    
  }

  );
   setTimeout(fn5,2000);

   

}
);
  });
});
  	}
  	function fn2(img) {
	var user=firebase.auth().currentUser;
	console.log(user);
	if(user)
{

	var fd=1;
	firebase.database().ref().child("Architects").orderByChild("emailID").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
    $('#role').html("Architect");
}
});
      firebase.database().ref().child("Engineers").orderByChild("emailID").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
     role="Engineers";

}
});

        firebase.database().ref().child("Interior Designers").orderByChild("emailID").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
     role="Interior Designers";
}
});
        firebase.database().ref().child("Users").orderByChild("emailID").equalTo(user.email).on("value", function(snapshot) {
if (snapshot.exists() && fd==1) {
     fd=0;
     role="Users";
}
});
	setTimeout(function(){ fn3(role,user.uid,img) },3000);
	
}
else
{
	alert("Please login");
	window.location.href="Login.html";
}

}
  </script>
</head>
<body>
<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "<script> var img='uploads/". basename( $_FILES["fileToUpload"]["name"]). "';
       
        	setTimeout(function()
        	{fn2(img);
        		},3000);
            

         </script>";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
Uploading Image
</body>
</html>