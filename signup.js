
function fn()
{
	window.location.href="index.html";
}
function signup()
{
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    var name=document.getElementById('name').value;
    var contact=document.getElementById('contact').value;
    var roles=document.getElementById('role').value;
    var g=document.getElementById('Gender').value;
    firebase.auth().createUserWithEmailAndPassword(email,pass).then(function()
   {

firebase.database().ref('/'+roles+'/' +firebase.auth().currentUser.uid).set({
    name:name,
    emailID: email,
    gender:g,
    imageUrl:"https://firebasestorage.googleapis.com/v0/b/irobrix-f7b78.appspot.com/o/sample_image.jpg?alt=media&token=cbe6a035-112c-446f-b9a8-f27b247299be",
    phoneNo :contact,
    project:"None",
    experience:"None"
  
  });
setTimeout(fn,5000);

   
}).catch(function(error){
  var errorMessage = error.message;
  window.alert(errorMessage);
});
}
