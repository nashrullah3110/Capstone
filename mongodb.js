var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017//MongoDatabase";
MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(err,db){
	if (err) throw err;
	console.log("database created!");
	db.close();
});