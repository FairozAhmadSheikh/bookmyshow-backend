const { MongoClient } = require('mongodb');
let mongoose = require("mongoose");
require("dotenv").config();


const mongoLiveURI = process.env.MONGO_LIVE_URL;




const connectToMongo = async () => {
  // Connecting to database using connection string  
  mongoose
    .connect( mongoLiveURI, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }
    )
    .then(() => {
      console.log("MONGO Database connected");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};

// Call the connect function to establish the connection
exports.connection = connectToMongo;
