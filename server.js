// require dependencies
const express = require("express");
const path = require("path");

// sets up express app and port to 3000
const app = express();
const port = process.env.PORT || 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// points server to route files to show how to respond when a user visit or request data from a URL
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// tells express to listen for request and starts the server
app.listen(port, function(){
    console.log("App listening on PORT: " + port)
})

