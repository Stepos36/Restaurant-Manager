let path = require("path")

module.exports = function(app) {
    app.get("/toppingreport", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/html/reports", "toppingReport.html"));
    });

    app.get("/dayofweek", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/html/reports", "dayofweek.html"));
    })
}