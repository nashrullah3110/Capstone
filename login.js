function signin()
{
    var email=document.getElementById('email').value;
    var pass=document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email,pass).then(function(){
    	var userId = firebase.auth().currentUser.uid;
        
    window.location.href="Home.html";

}).catch(function(error){
  var errorMessage = error.message;
  window.alert(errorMessage);
});
}