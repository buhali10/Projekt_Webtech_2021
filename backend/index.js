const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

// simple route
app.get("/",cors(), (req, res) => {
    res.send('Welcome to Infinitus!');
});

require("./app/routes/cards.router.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
