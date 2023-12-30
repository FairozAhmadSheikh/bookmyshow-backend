const express = require("express");
const cors = require("cors");
const app = express();

const { connection } = require("./db/MongodbConnection");
const bodyParser = require("body-parser");
require("dotenv").config();

const bookingRoute = require("./Routes/movieRoute")

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( cors() );

// Connecting to database
connection();

// creating an api and seperating it.
app.get("/", async (req, res) => {
    res.send("Made with ❤️ from Fairoz")
})
app.use("/api", bookingRoute);

// listening backend on a port.
const port = process.env.PORT || 8080;
app.listen( port, () => console.log(`App listening on port ${port}!`) );

module.exports = app;
