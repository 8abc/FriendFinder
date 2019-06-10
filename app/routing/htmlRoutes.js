// require dependencies
const path = require("path");
// a GET route to /survey which displays the survey page
module.exports = function (app) {
    // brings up the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // bring up the home page
    app.get("/home" , function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
// a default route that leads to home.html which displays the homepage