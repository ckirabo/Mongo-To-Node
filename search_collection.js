var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){

    if (err) throw err;
    var mydb = db.db('prototype_db');
    mydb.collection('random_collection').find({}).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
        db.close();
    });

});