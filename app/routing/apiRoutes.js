// connect our object of friends
var friends = require("../data/friend.js");
// a GET route with the url /api/friends which displays a json of possible friends
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        
    })
}
// a POST routes /api/friends which will be used to handle incoming survey results
// this route also handles the compatibility logic