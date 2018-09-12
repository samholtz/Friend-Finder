var userData = require("../data/friends");


// ROUTING
// ===============================================================================
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(userData);
    });

    app.post("/api/friends", function (req, res) {
        if (userData.length < 50) {
            userData.push(req.body);
            res.json(true);
        }
        else {
            alert('You have too many friends!')
        }
    });

    app.post("/api/friends", function (req, res) {
        if (userData.length < 50) {
            userData.push(req.body);
            res.json(true);
        } else {
            alert('You have too many friends!')
        }
    });
};

