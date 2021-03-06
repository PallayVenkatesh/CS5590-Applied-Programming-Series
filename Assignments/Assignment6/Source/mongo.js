/**
 * Created by chswa on 7/18/2017.
 */


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var app = express();

var url = 'mongodb://user1:user1@ds157702.mlab.com:57702/web_app';
var ObjectID = require('mongodb').ObjectID;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/create', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        else {
            insertDocument(db, req.body, function () {
                res.write("Successfully inserted");
                res.end();
            });
        }
    });
});

app.get('/get', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }

        db.collection('students').find().toArray(function(err, result){
            if(err)
            {
                res.write("get Failed");
                res.end();
            }else
            {

                res.send(JSON.stringify(result));
            }
            console.log("Got All Documents");

        });
    });

});

app.get('/delete/:toBeDeleted_id', function (req, res) {

    MongoClient.connect(url, function (err,db) {

        if(err)
        {
            res.write("Failed to delete, Error While connecting to database");
            res.end();
        }
        else{
            db.collection('students').find().toArray(function(err, result){
                if(err)
                {
                    res.write("get Failed");
                    res.end();
                }else
                {

                    res.send(JSON.stringify(result));
                }
                console.log("Got All Documents");

            });

        }

    });

});


app.get('/update/:toBeUpdated_id', function (req, res) {
    //3.connect to MongoDB. Handle the error and write the logic for updating the selected field
});


var insertDocument = function(db, data, callback) {
    db.collection('students').insertOne( data, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        else {
        console.log("Inserted a document into the  students collection.");
        callback();
        }
    });

};

var server = app.listen(10002, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});



