var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/vsdb";

MongoClient.connect(url, function(err, db){

if (err) throw err;
console.log("Database vsdb has been created!");
db.close();


});