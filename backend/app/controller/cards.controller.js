const Card = require("../model/cards.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Card
    const card = new Card({
        front: req.body.front,
        back: req.body.back,
        setname: req.body.setname,
        notes: req.body.notes
    });

    // Save Card in the database
    Card.create(card, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating card."
            });
        else res.send(data);
    });
};

// Retrieve all Cards from the database.
exports.findAll = (req, res) => {
    Card.getAll((err, data) => {
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
    Card.findById(req.params.cardId, (err, data) => {
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
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const card = new Card({
        id: req.body.id,
        front: req.body.front,
        back: req.body.back,
        setname: req.body.setname,
        notes: req.body.notes
    });

    Card.updateById(
        req.params.cardId,
        card,
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
    Card.remove(req.params.cardId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found card with id ${req.params.cardId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete card with id " + req.params.cardId
                });
            }
        } else res.send({ message: `Card was deleted successfully!` });
    });
};

// Delete all Cards from the database.
exports.deleteAll = (req, res) => {
    Card.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all card."
            });
        else res.send({ message: `All Cards were deleted successfully!` });
    });
};
