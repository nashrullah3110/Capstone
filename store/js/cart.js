var user;
var totalcart=0;
var tqty=0;
var FLAG=1;
function remove_cart(item)
{
   firebase.database().ref('/'+role+'/' + user.uid+"/").once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      if(childKey=="Amount Payable"){
              totalcart=childSnapshot.val();

           
    }
    });
  });
  firebase.database().ref('/'+role+'/' + user.uid+"/My Cart Items/").once('value').then(function(snapshot) {
      
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;

  firebase.database().ref('/'+role+'/' +user.uid+'/My Cart Items/'+childKey+'/').once('value').then(function(snapshot) {
    var item1=(snapshot.val() && snapshot.val().item_name) ||null;
    var amt=(snapshot.val() && snapshot.val().finalPrice) ||null;

    if(item==item1)

    {
      firebase.database().ref('/'+role+'/' +user.uid+'/My Cart Items/'+childKey).remove();
firebase.database().ref('/'+role+'/' + user.uid+"/").update( {
    "Amount Payable":(totalcart-amt)
           
    }

    );
load_cart();
        }
      });
   
    }
    );
    });
  
    
}
function add_to_cart(item,price,vendor,qty,desc,img,op)
{ 
  if(qty==0)
  {
     remove_cart(item);
     return;
  }
  FLAG=1;
    user=firebase.auth().currentUser;
    if(user&&role=="Users")
    {
         firebase.database().ref('/'+role+'/' + user.uid+"/My Cart Items/").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
   firebase.database().ref('/'+role+'/' +user.uid+'/My Cart Items/'+childKey+'/').once('value').then(function(snapshot) {
    var item1=(snapshot.val() && snapshot.val().item_name) ||null;
    var qty1=(snapshot.val() && snapshot.val().quantity) ||null;
    if(item==item1)
    {
      console.log("matching Item:"+FLAG);
  FLAG=0;
 console.log("Fag Reset:"+FLAG);
        firebase.database().ref('/'+role+'/' +user.uid+'/My Cart Items/'+childKey+'/').update({
   finalPrice: price*qty ,
   quantity :qty,
   storeDesc:desc,
   storeName:vendor,
   item_name:item,
    initialPrice:price
   
  
  });
  
 if(op==0)
{
  tqty-=1;
  totalcart-=price; 
}
else
{
   tqty+=1;
  totalcart+=price;
}
  firebase.database().ref('/'+role+'/' +user.uid).update({
   "Amount Payable": totalcart
   
  
  },function(error)
  {
    if(error)
    {
      alert(error);
    }
    else
    {
    load_cart();

    }
  });
    }

});
 });
    });
        
   if(FLAG==1 &&qty==1 &&op==1)
   {
    console.log("Inside If");
     console.log(FLAG);
    
    

    	 var newcartkey = firebase.database().ref('/'+role+'/' + user.uid).child("My Cart Items").push().key;
          totalcart+=price*qty;
          firebase.database().ref('/'+role+'/' +user.uid+'/My Cart Items/'+newcartkey+'/').set({
   finalPrice: price ,
   imageUrl: img,
   quantity :qty,
   storeDesc:desc,
   storeName:vendor,
   item_name:item,
   initialPrice:price
  
  },function(error)
  {
  	if(error)
  	{
  		alert(error);
  	}
  	else
  	{
  		console.log("success");
  	}
  });

firebase.database().ref('/'+role+'/' +user.uid).update({
   "Amount Payable": totalcart
   
  
  },function(error)
  {
  	if(error)
  	{
  		alert(error);
  	}
  	else
  	{
  	load_cart();
  	}
  });
}
    }
    else
    {
    	if(role!="Users")
    	{
    		alert("Only Customers are allowed! Create a 'Users' Account");
    		window.location.href="../Signup.html";
    	}
    	else
    	{
    	alert("Please login!");
    	window.location.href="../index.html";
    	}
    }
  }



function load_cart()
{
	var item;
	var price;
	var vendor;
	var qty;
	var desc;
	var img;
	 user=firebase.auth().currentUser;
	if(user)
	{
		$(".cart-list").html('');
		tqty=0;
	  firebase.database().ref("/"+role+"/" + firebase.auth().currentUser.uid+"/My Cart Items/").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    firebase.database().ref('/'+role+'/' + user.uid+"/My Cart Items/"+childKey+'/').once('value').then(function(snapshot) {
   price = (snapshot.val() && snapshot.val().initialPrice) ||null;
   img=(snapshot.val() && snapshot.val().imageUrl) ||null;
   qty=(snapshot.val() && snapshot.val().quantity) ||null;
   var vendor=(snapshot.val() && snapshot.val().vendor) ||null;
   tqty+=qty;
   desc=(snapshot.val() && snapshot.val().storeDesc) ||null;
   vendor=(snapshot.val() && snapshot.val().storeName) ||null;
   item=(snapshot.val() && snapshot.val().item_name) ||null;
  $(".cart-list").append("<div class=\"product-widget\">\
												<div class=\"product-img\">\
													<img src=\""+img+"\" alt=\"\">\
												</div>\
												<div class=\"product-body\">\
													<h3 class=\"product-name\"><a href=\"#\">"+item+"</a></h3>\
													<h4 class=\"product-price\"><span class=\"qty\" id='qty'>"+qty+"<span><b style='cursor: default;' onclick=\"add_to_cart('"+item+"',"+price+",'"+vendor+"',"+(qty+1)+",'"+desc+"','"+img+",1');\">+</b><b style='cursor: default;'onclick=\"add_to_cart('"+item+"',"+price+",'"+vendor+"',"+(qty-1)+",'"+desc+"','"+img+"',0);\">-</b></span></span>&#8377;"+price+"</h4>\
												</div>\
												<button class=\"delete\" onclick=\"remove_cart('"+item+"');\"><i class=\"fa fa-close\"></i></button>\
											</div>");


  });
    

   
  });
      firebase.database().ref('/'+role+'/' + user.uid+"/").once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    	var childKey = childSnapshot.key;
    	if(childKey=="Amount Payable"){
              totalcart=childSnapshot.val();

		       
		}
    });
   $("#totaled").html("SUBTOTAL: &#8377;"+totalcart);
   $("#tqty").html(""+tqty+" Item(s) selected");
   $("#qty").html(tqty);
  

  });
       
});
	}
}
setTimeout(load_cart,6000);