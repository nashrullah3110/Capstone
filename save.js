function save()
    {
   	var email=document.getElementById('email').value;
    var name=document.getElementById('name').value;
    var contact=document.getElementById('contact').value;
    var rootRef=firebase.database().ref().child('Users');
    var succ=rootRef.push().set({
          name: name,
          emailID: email,
          phoneNo : contact
      });
     }