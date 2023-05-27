require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_DB_URL;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Cluster0");
  var myobj = {  item: 'canvas',
  qty: 100,
  tags: ['cotton'],
  size: { h: 28, w: 35.5, uom: 'cm' } };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});