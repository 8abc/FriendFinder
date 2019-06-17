// import list of friends
var friends = require("../data/friend.js");
// Routes
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // add a new friend
    app.post("/api/friends", function(req, res){
        var userInput = req.body;
        var userScores = userInput.scores;
        // holds the best match friend
        var bestMatch = {
            name: "",
            photo: "",
            totalDifference: 100,
        };
        // used to calculate difference between the user's score and the scores of each friend in the database
        var totalDifference = 0;
        // loops through all existing friends
        for(var i =0; i<friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;
        }
    })
}
// a POST routes /api/friends which will be used to handle incoming survey results
// this route also handles the compatibility logic