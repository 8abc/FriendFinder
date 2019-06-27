// import list of friends
var friends = require("../data/friend.js");
// Routes
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // add a new friend
    app.post("/api/friends", function(req, res){
        // holds the best match friend
        var bestMatch = {
            name: "",
            photo: "",
            totalDifference: 100,
        };
        // holds results from user's survey
        var userInput = req.body;
        console.log("userInput: ", userInput);
        var userScores = userInput.scores;
        // used to calculate difference between the user's score and the scores of each friend in the database
        var totalDifference = 0;
        // loops through all existing friends
        for(var i =0; i<friends.length; i++) {
            var friend = friends[i];
            totalDifference = 0;
            // loops through each friend's score
            for (var x=0; x<friend.scores.length; x++) {
                var friendScore = friend.scores[x];
                var userScore = userScores[x];
                // calculates the difference between the scores and sum them into totalDifference
                totalDifference += Math.abs(parseInt(userScore)- parseInt(friendScore));
            }
            // show if the difference is less then the differences of the current best match
            if(totalDifference <= bestMatch.totalDifference) {
                // reset bestMatch to be the new friend
                bestMatch.name = friend.name;
                bestMatch.photo = friend.photo;
                bestMatch.totalDifference = totalDifference;
            }
        
        }
        // saves user's input into database
        console.log("got here");
        friends.push(userInput);
    // returns a JSON with the user's bestMatch
        res.json(bestMatch);

    });
};
