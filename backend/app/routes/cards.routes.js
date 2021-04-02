module.exports = app => {
    const cards = require("../controller/cards.controller");

    // Create a new Cards
    app.post("/cards", cards.create);

    // GET all Cards
    app.get("/cards", cards.findAll);

    // GET one single Cards with cardId
    app.get("/cards/:cardId", cards.findOne);

    // Update one Card with cardId
    app.put("/cards/:cardId", cards.update);

    // Delete the Card with cardId
    app.delete("/cards/:cardId", cards.delete);

    // Delete all cards
    app.delete("/cards", cards.deleteAll);
};
