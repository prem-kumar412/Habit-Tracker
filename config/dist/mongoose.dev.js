"use strict";

// Importing the Mongoose library to interact with MongoDB.
var mongoose = require('mongoose'); // Define the MongoDB connection URI, which points to a MongoDB Atlas cluster.


var DB = "mongodb+srv://premyadav18520:premkumar412@cluster0.htzhdao.mongodb.net/"; // Attempt to establish a connection to the MongoDB Atlas cluster using Mongoose.

mongoose.connect(DB).then(function () {
  // Connection successful: Log a success message.
  console.log('Connection successful!');
})["catch"](function (err) {
  // Connection failed: Log an error message with the error details.
  console.log("Connection error: " + err);
}); // Get a reference to the default Mongoose connection.

var db = mongoose.connection; // Listen for any errors that occur during the connection process.

db.on('error', console.error.bind(console, "Error connecting to MongoDB")); // Once the connection is open, execute this callback function.

db.once('open', function () {
  // Connection successful: Log a success message.
  console.log('Connected to Database :: MongoDB');
}); // Export the Mongoose connection object to make it available to other parts of the application.

module.exports = db;
//# sourceMappingURL=mongoose.dev.js.map
