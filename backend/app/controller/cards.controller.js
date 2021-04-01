const Cards = require("../model/cards.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Card
    const card = new Cards({
        front: req.body.front,
        back: req.body.back,
        setname: req.body.setname,
        note: req.body.note
    });

    // Save Card in the database
    Cards.create(card, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating card."
            });
        else res.send(data);
    });
};

// Retrieve all Card from the database.
exports.findAll = (req, res) => {
    Cards.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving cards."
            });
        else res.send(data);
    });
};

// Find a single card with a cardId
exports.findOne = (req, res) => {
    Cards.findById(req.params.cardId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Card with id ${req.params.cardId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Card with id " + req.params.cardId
                });
            }
        } else res.send(data);
    });
};

// Update a Card identified by the cardId in the request
exports.update = (req, res) => {
    // Validate Request

    Cards.updateById(
        req.params.cardId,
        new Cards(res.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found card with id ${req.params.cardId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating card with id " + req.params.cardId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a card with the specified cardId in the request
exports.delete = (req, res) => {
    Cards.remove(req.params.cardsId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found card with id ${req.params.cardsId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete card with id " + req.params.cardsId
                });
            }
        } else res.send({ message: `Card was deleted successfully!` });
    });
};

// Delete all Cards from the database.
exports.deleteAll = (req, res) => {
    Cards.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all card."
            });
        else res.send({ message: `All Cards were deleted successfully!` });
    });
};
