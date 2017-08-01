// let data = require("./data.js")
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 

exports.getAllData = function(req, res, next, renderIndex) {
    let data = []
    
    // Connection URL 
    var url = 'mongodb://localhost:27017/robot_directory';

    // Use connect method to connect to the Server 
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        let cursor = db.collection('robots').find()
        cursor.forEach((doc) => {
            console.log(doc)
            data.push(doc)
        }, function(){
            db.close()
            console.log(data)
            console.log(renderIndex)
            console.log("databaose closed")
            renderIndex(req, res, next, data)
        })

    });

}

exports.userProfileData = function(req, res, next, renderProfile) {
    let data = {}
    
    // Connection URL 
    var url = 'mongodb://localhost:27017/robot_directory';

    // Use connect method to connect to the Server 
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        console.log(req.params["username"])
        let cursor = db.collection('robots').find({"username": req.params["username"]})
        cursor.forEach((doc) => {
            data = doc
        }, function(){
            db.close()
            console.log("data:")
            console.log(data)
            console.log(renderProfile)
            console.log("databaose closed")
            renderProfile(req, res, next, data)
        })

    });
}