const sql = require("./cards.js");

// constructor
const CARDS = function(card) {
    this.front = card.front;
    this.back = card.back;
    this.setname = card.setname;
    this.note = card.note;
};

CARDS.create = (newCard, result) => {
    sql.query("INSERT INTO cards SET ?", newCard, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created card: ", { id: res.insertId, ...newCard });
        result(null, { id: res.insertId, ...newCard });
    });
};

CARDS.findById = (cardId, result) => {
    sql.query(`SELECT * FROM cards WHERE id = ${cardId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found card: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found CARDS with the id
        result({ kind: "not_found" }, null);
    });
};

CARDS.getAll = result => {
    sql.query("SELECT * FROM cards", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("cards: ", res);
        result(null, res);
    });
};

CARDS.updateById = (id, card, result) => {
    sql.query(
        "UPDATE cards SET front = ?, back = ?, setname = ?, note = ? WHERE id = ?",
        [card.front, card.back, card.setname, card.note , id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated card: ", { id: id, ...card });
            result(null, { id: id, ...card });
        }
    );
};

CARDS.remove = (id, result) => {
    sql.query("DELETE FROM cards WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found CARDS with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted card with id: ", id);
        result(null, res);
    });
};

CARDS.removeAll = result => {
    sql.query("DELETE FROM cards", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} card`);
        result(null, res);
    });
};

module.exports = CARDS;
