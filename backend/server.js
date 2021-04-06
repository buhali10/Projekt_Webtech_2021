const express = require("express");
const cors = require('cors');

const app = express();
const bodyParser = require("body-parser");
app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/",cors(), (req, res) => {
    res.send('Welcome to Infinitus!');
});

require("./app/routes/cards.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
