// var axios = require("axios");

    $("#submit").on("click", function(){
        event.preventDefault();
            var userInput = {
                name: $("#name").val().trim(),
                photo: $("#photoLink").val().trim(),
                scores: [
                    $("#question1").val(),
                    $("#question2").val(),
                    $("#question3").val(),
                    $("#question4").val(),
                    $("#question5").val(),
                    $("#question6").val(),
                    $("#question7").val(),
                    $("#question8").val(),
                    $("#question9").val(),
                    $("#question10").val(),
                ]
            };
            console.log(userInput);

            axios.post("/api/friends", userInput)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                })
            
    });