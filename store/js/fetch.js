
function Hire(employeruid,employeeuid,roled)
{
  
  var employername="";
  var employeremail="";
  if(role=="Users")
  {
   firebase.database().ref("/Users/"+employeruid).once('value').then(function(snapshot) {
   
      employername = (snapshot.val() && snapshot.val().name) || (snapshot.val() && snapshot.val().Name)||'Anonymous';
  employeremail = (snapshot.val() && snapshot.val().emailID) || (snapshot.val() && snapshot.val().Email)||'Not Feching';
   
});
   
    firebase.database().ref('/'+roled+'/' + employeeuid).once('value').then(function(snapshot) {
var notread = (snapshot.val() && snapshot.val().notread) ||0;
notread++;
firebase.database().ref('/'+roled+'/' + employeeuid+'/Notfications/').push("Hiring Request from "+employername+" Contact:"+employeremail);
firebase.database().ref('/'+roled+'/' + employeeuid).update({
    "notread":notread
    
  },function(error) {
    if (error) {
      console.log(error);
    } else {
      alert("Hiring Request Put Successfully");//This will refresh parent window.


    }
});

   
  });
    }
    else
    {
      alert("Only Customers can Hire! Create a \"Users\" Account");
      window.location.href="../Signup.html";
    }

}
function fetch11()
{
	var i=0;
  var flag=1;
  console.log(window.location.href);
   var url = new URL(window.location.href);
   var c = url.searchParams.get("Category");
   var carr=[];
   if(c!=null)
   {
   carr=c.split(',');
 }
  for(var xx=0;xx<carr.length;xx++)
  {
     
    if(carr[xx]=="Architect")
    {
      flag=0;
   firebase.database().ref("/Architects/").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    firebase.database().ref("/Architects/" + childKey).once('value').then(function(snapshot) {
var username = (snapshot.val() && snapshot.val().name) || (snapshot.val() && snapshot.val().Name)||'Anonymous';
   var email = (snapshot.val() && snapshot.val().emailID) || (snapshot.val() && snapshot.val().Email)||'Not Feching';
   var contact = (snapshot.val() && snapshot.val().phoneNo) || 'Not Given';
   var Type=(snapshot.val() && snapshot.val().Type) ||"Architect" ;
   var image = (snapshot.val() && snapshot.val().image) ||(snapshot.val() && snapshot.val().imageUrl)|| 'https://firebasestorage.googleapis.com/v0/b/irobrix-f7b78.appspot.com/o/profile.png?alt=media&amp;token=bed51a93-3097-4028-8e58-aef2f03434b9';
   var projects=(snapshot.val() && snapshot.val().project) || 'No Projects';
  var Exp = (snapshot.val() && snapshot.val().experience) || (snapshot.val() && snapshot.val().experience)||'None';
   var vio = (snapshot.val() && snapshot.val().Bio) || 'Bio Not added';
   var address = (snapshot.val() && snapshot.val().address) || 'Address Not added';
   i++;
   $("#profs").append("<div class=\"col-md-4 col-xs-6\">\
								<div class=\"product\">\
									<div class=\"product-img\">\
										<img src=\""+image+"\" alt=\"\">\
									</div>\
									<div class=\"product-body\">\
										<p class=\"product-category\">"+Type+"</p>\
										<h3 class=\"product-name\"><a href=\"../getProfile.php?id="+childKey+"&email="+email+"\">"+username+"</a></h3>\
										<span class=\"product-price\" style=\"font-size:20px;\">Exp:"+Exp+" <span class=\"product-old-price\">Projs:"+projects+"</span></span>\
										<div class=\"product-rating\">\
										</div>\
										<h6>Address:"+address+"</h6>\
									</div>\
									<div class=\"add-to-cart\">\
										<button class=\"add-to-cart-btn\" type=\"button\" onclick=\"Hire('"+firebase.auth().currentUser.uid+"','"+childKey+"','"+Type+"s');\"> Hire</button>\
									</div>\
								</div>\
							</div>");
   if(i%3==0)
   {
   	$("#profs").append("<div class=\"clearfix visible-lg visible-md\"></div>");
   }
  });
      
   
});
  });
 }
 if (carr[xx]=="Civil Engineer")
 {
  flag=0;
firebase.database().ref("/Engineers/").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    firebase.database().ref("/Engineers/"+ childKey).once('value').then(function(snapshot) {
   var username = (snapshot.val() && snapshot.val().name) || (snapshot.val() && snapshot.val().Name)||'Anonymous';
   var email = (snapshot.val() && snapshot.val().emailID) || (snapshot.val() && snapshot.val().Email)||'Not Feching';
   var contact = (snapshot.val() && snapshot.val().phoneNo) || 'Not Given';

   var Type=(snapshot.val() && snapshot.val().Type) ||"Civil Engineer" ;
   var image = (snapshot.val() && snapshot.val().image) ||(snapshot.val() && snapshot.val().imageUrl)|| 'https://firebasestorage.googleapis.com/v0/b/irobrix-f7b78.appspot.com/o/profile.png?alt=media&amp;token=bed51a93-3097-4028-8e58-aef2f03434b9';
   var projects=(snapshot.val() && snapshot.val().project) || 'No Projects';
  var Exp = (snapshot.val() && snapshot.val().experience) || (snapshot.val() && snapshot.val().experience)||'None';
   var vio = (snapshot.val() && snapshot.val().Bio) || 'Bio Not added';
   var address = (snapshot.val() && snapshot.val().address) || 'Address Not added';
   i++;
   


   $("#profs").append("<div class=\"col-md-4 col-xs-6\">\
								<div class=\"product\">\
									<div class=\"product-img\">\
										<img src=\""+image+"\" alt=\"\">\
									</div>\
									<div class=\"product-body\">\
										<p class=\"product-category\">"+Type+"</p>\
										<h3 class=\"product-name\"><a href=\"../getProfile.php?id="+childKey+"&email="+email+"\">"+username+"</a></h3>\
										<span class=\"product-price\" style=\"font-size:20px;\">Exp:"+Exp+" <span class=\"product-old-price\">Projs:"+projects+"</span></span>\
										<div class=\"product-rating\">\
										</div>\
										<h6>Address:"+address+"</h6>\
									</div>\
									<div class=\"add-to-cart\">\
										<button class=\"add-to-cart-btn\" type=\"button\" onclick=\"Hire('"+firebase.auth().currentUser.uid+"','"+childKey+"','"+Type+"s');\"> Hire</button>\
									</div>\
								</div>\
							</div>");
   if(i%3==0)
   {
   	$("#profs").append("<div class=\"clearfix visible-lg visible-md\"></div>");
   }
  });
      
   
});
  });
}
if(carr[xx]=="Interior Designer")
{ flag=0;
firebase.database().ref("/Interior Designers/").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    firebase.database().ref('/Interior Designers/' + childKey).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().name) || (snapshot.val() && snapshot.val().Name)||'Anonymous';
   var email = (snapshot.val() && snapshot.val().emailID) || (snapshot.val() && snapshot.val().Email)||'Not Feching';
   var contact = (snapshot.val() && snapshot.val().phoneNo) || 'Not Given';
   var Type=(snapshot.val() && snapshot.val().Type) ||"Interior Designer" ;
   var image = (snapshot.val() && snapshot.val().image) ||(snapshot.val() && snapshot.val().imageUrl)|| 'https://firebasestorage.googleapis.com/v0/b/irobrix-f7b78.appspot.com/o/profile.png?alt=media&amp;token=bed51a93-3097-4028-8e58-aef2f03434b9';
   var projects=(snapshot.val() && snapshot.val().project) || 'No Projects';
  var Exp = (snapshot.val() && snapshot.val().experience) || (snapshot.val() && snapshot.val().experience)||'None';
   var vio = (snapshot.val() && snapshot.val().Bio) || 'Bio Not added';
   var address = (snapshot.val() && snapshot.val().address) || 'Address Not added';
   i++;
   $("#profs").append("<div class=\"col-md-4 col-xs-6\">\
								<div class=\"product\">\
									<div class=\"product-img\">\
										<img src=\""+image+"\" alt=\"\">\
									</div>\
									<div class=\"product-body\">\
										<p class=\"product-category\">"+Type+"</p>\
										<h3 class=\"product-name\"><a href=\"../getProfile.php?id="+childKey+"&email="+email+"\">"+username+"</a></h3>\
										<span class=\"product-price\" style=\"font-size:20px;\">Exp:"+Exp+" <span class=\"product-old-price\">Projs:"+projects+"</span></span>\
										<div class=\"product-rating\">\
										</div>\
										<h6>Address:"+address+"</h6>\
									</div>\
									<div class=\"add-to-cart\">\
										<button class=\"add-to-cart-btn\" type=\"button\" onclick=\"Hire('"+firebase.auth().currentUser.uid+"','"+childKey+"','"+Type+"s');\"> Hire</button>\
									</div>\
								</div>\
							</div>");
   if(i%3==0)
   {
   	$("#profs").append("<div class=\"clearfix visible-lg visible-md\"></div>");
   }
  });
      
   
});
});
}

}
console.log(flag);
if(flag)
{
  firebase.database().ref("/Architects/").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    firebase.database().ref("/Architects/" + childKey).once('value').then(function(snapshot) {
var username = (snapshot.val() && snapshot.val().name) || (snapshot.val() && snapshot.val().Name)||'Anonymous';
   var email = (snapshot.val() && snapshot.val().emailID) || (snapshot.val() && snapshot.val().Email)||'Not Feching';
   var contact = (snapshot.val() && snapshot.val().phoneNo) || 'Not Given';
   var Type=(snapshot.val() && snapshot.val().Type) ||"Architect" ;
   var image = (snapshot.val() && snapshot.val().image) ||(snapshot.val() && snapshot.val().imageUrl)|| 'https://firebasestorage.googleapis.com/v0/b/irobrix-f7b78.appspot.com/o/profile.png?alt=media&amp;token=bed51a93-3097-4028-8e58-aef2f03434b9';
   var projects=(snapshot.val() && snapshot.val().project) || 'No Projects';
  var Exp = (snapshot.val() && snapshot.val().experience) || (snapshot.val() && snapshot.val().experience)||'None';
   var vio = (snapshot.val() && snapshot.val().Bio) || 'Bio Not added';
   var address = (snapshot.val() && snapshot.val().address) || 'Address Not added';
   i++;
   $("#profs").append("<div class=\"col-md-4 col-xs-6\">\
                <div class=\"product\">\
                  <div class=\"product-img\">\
                    <img src=\""+image+"\" alt=\"\">\
                  </div>\
                  <div class=\"product-body\">\
                    <p class=\"product-category\">"+Type+"</p>\
                    <h3 class=\"product-name\"><a href=\"../getProfile.php?id="+childKey+"&email="+email+"\">"+username+"</a></h3>\
                    <span class=\"product-price\" style=\"font-size:20px;\">Exp:"+Exp+" <span class=\"product-old-price\">Projs:"+projects+"</span></span>\
                    <div class=\"product-rating\">\
                    </div>\
                    <h6>Address:"+address+"</h6>\
                  </div>\
                  <div class=\"add-to-cart\">\
                    <button class=\"add-to-cart-btn\" type=\"button\" onclick=\"Hire('"+firebase.auth().currentUser.uid+"','"+childKey+"','"+Type+"s');\"> Hire</button>\
                  </div>\
                </div>\
              </div>");
   if(i%3==0)
   {
    $("#profs").append("<div class=\"clearfix visible-lg visible-md\"></div>");
   }
  });
      
   
});
  });
  firebase.database().ref("/Engineers/").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    firebase.database().ref("/Engineers/"+ childKey).once('value').then(function(snapshot) {
   var username = (snapshot.val() && snapshot.val().name) || (snapshot.val() && snapshot.val().Name)||'Anonymous';
   var email = (snapshot.val() && snapshot.val().emailID) || (snapshot.val() && snapshot.val().Email)||'Not Feching';
   var contact = (snapshot.val() && snapshot.val().phoneNo) || 'Not Given';

   var Type=(snapshot.val() && snapshot.val().Type) ||"Civil Engineer" ;
   var image = (snapshot.val() && snapshot.val().image) ||(snapshot.val() && snapshot.val().imageUrl)|| 'https://firebasestorage.googleapis.com/v0/b/irobrix-f7b78.appspot.com/o/profile.png?alt=media&amp;token=bed51a93-3097-4028-8e58-aef2f03434b9';
   var projects=(snapshot.val() && snapshot.val().project) || 'No Projects';
  var Exp = (snapshot.val() && snapshot.val().experience) || (snapshot.val() && snapshot.val().experience)||'None';
   var vio = (snapshot.val() && snapshot.val().Bio) || 'Bio Not added';
   var address = (snapshot.val() && snapshot.val().address) || 'Address Not added';
   i++;
   


   $("#profs").append("<div class=\"col-md-4 col-xs-6\">\
                <div class=\"product\">\
                  <div class=\"product-img\">\
                    <img src=\""+image+"\" alt=\"\">\
                  </div>\
                  <div class=\"product-body\">\
                    <p class=\"product-category\">"+Type+"</p>\
                    <h3 class=\"product-name\"><a href=\"../getProfile.php?id="+childKey+"&email="+email+"\">"+username+"</a></h3>\
                    <span class=\"product-price\" style=\"font-size:20px;\">Exp:"+Exp+" <span class=\"product-old-price\">Projs:"+projects+"</span></span>\
                    <div class=\"product-rating\">\
                    </div>\
                    <h6>Address:"+address+"</h6>\
                  </div>\
                  <div class=\"add-to-cart\">\
                    <button class=\"add-to-cart-btn\" type=\"button\" onclick=\"Hire('"+firebase.auth().currentUser.uid+"','"+childKey+"','"+Type+"s');\"> Hire</button>\
                  </div>\
                </div>\
              </div>");
   if(i%3==0)
   {
    $("#profs").append("<div class=\"clearfix visible-lg visible-md\"></div>");
   }
  });
      
   
});
  });
  firebase.database().ref("/Interior Designers/").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    firebase.database().ref('/Interior Designers/' + childKey).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().name) || (snapshot.val() && snapshot.val().Name)||'Anonymous';
   var email = (snapshot.val() && snapshot.val().emailID) || (snapshot.val() && snapshot.val().Email)||'Not Feching';
   var contact = (snapshot.val() && snapshot.val().phoneNo) || 'Not Given';
   var Type=(snapshot.val() && snapshot.val().Type) ||"Interior Designer" ;
   var image = (snapshot.val() && snapshot.val().image) ||(snapshot.val() && snapshot.val().imageUrl)|| 'https://firebasestorage.googleapis.com/v0/b/irobrix-f7b78.appspot.com/o/profile.png?alt=media&amp;token=bed51a93-3097-4028-8e58-aef2f03434b9';
   var projects=(snapshot.val() && snapshot.val().project) || 'No Projects';
  var Exp = (snapshot.val() && snapshot.val().experience) || (snapshot.val() && snapshot.val().experience)||'None';
   var vio = (snapshot.val() && snapshot.val().Bio) || 'Bio Not added';
   var address = (snapshot.val() && snapshot.val().address) || 'Address Not added';
   i++;
   $("#profs").append("<div class=\"col-md-4 col-xs-6\">\
                <div class=\"product\">\
                  <div class=\"product-img\">\
                    <img src=\""+image+"\" alt=\"\">\
                  </div>\
                  <div class=\"product-body\">\
                    <p class=\"product-category\">"+Type+"</p>\
                    <h3 class=\"product-name\"><a href=\"../getProfile.php?id="+childKey+"&email="+email+"\">"+username+"</a></h3>\
                    <span class=\"product-price\" style=\"font-size:20px;\">Exp:"+Exp+" <span class=\"product-old-price\">Projs:"+projects+"</span></span>\
                    <div class=\"product-rating\">\
                    </div>\
                    <h6>Address:"+address+"</h6>\
                  </div>\
                  <div class=\"add-to-cart\">\
                    <button class=\"add-to-cart-btn\" type=\"button\" onclick=\"Hire('"+firebase.auth().currentUser.uid+"','"+childKey+"','"+Type+"s');\"> Hire</button>\
                  </div>\
                </div>\
              </div>");
   if(i%3==0)
   {
    $("#profs").append("<div class=\"clearfix visible-lg visible-md\"></div>");
   }
  });
      
   
});
});
}
}
setTimeout(fetch11,4000);