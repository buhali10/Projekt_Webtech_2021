const express = require("express");

const app = express();

// simple route
app.get("/", (req, res) => {
    res.send('Welcome to Infinitus!');
});

require("./app/routes/cards.router.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
