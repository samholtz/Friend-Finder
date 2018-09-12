var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Routes
// ===========================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});
app.get("/survey", function (req, res) {
    console.log('ere')
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});