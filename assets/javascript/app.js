//creat array to hold the buttons 

$(document).ready(function () {

    var cartoon = ["Scary", "Slapstick", "Eyes bug out", "Bouncing"

    ];
    // This function will create the buttons and add to the page
    function createButtons(arrayToExecute, classToGenerate, spaceToAddTo) {
        $(spaceToAddTo).empty();

        for (var i = 0; i < arrayToExecute.length; i++) {
            var a = $("<button>");
            a.addclass(classToGenerate);
            a.attr("data-type", arrayToExecute[i]);
            a.text(arrayToExecute[i]);
            $(spaceToAddTo).append(a);
        }
    }

    //function to pull images from giphy API 
    $(document.onabort("click", ".cartoon-button", function () {
        $("#images").empty();

        $(".cartoon-button").removeClass("active");
        $(this).addclass("active");

        var type = $(this).attr("date-type");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=j3YA34QeFY0DA4Os0xt2Vyt5wCJKRjSt&q=&limit=10&offset=0&rating=PG&lang=en";

        //Ajax code 

        $.ajax({
            url: queryURL,
            method: "GET"

        })

            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var cartoonDiv = $("<div class=\"cartoon-item\">");

                    var rating = results[i].rating;

                    var p = $("<p>").text("rating:" + rating);

                    var animation = results[i].images.fixed_height.url;

                    var still = results[i].images.fixed_height.url;

                    var cartoonImage = $("<img>");

                    cartoonImage.attr("src", still);
                    cartoonImage.attr("data-still", still);
                    cartoonImage.attr("data-animate", animated);
                    cartoonImage.attr("data-state", "still");
                    cartoonImage.addclass("cartoon-image");

                    cartoonDiv.append(a);
                    cartoonDiv.append(cartoonImage);

                    $("#images").append(cartoonDiv);


                }
            });
    }));

    //hover to animate from still to animation

    $(document).on("click",".cartoon-image",function(){
        var state = $(this).attr("data-state");

        if(state === "still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        
        }

        else{
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }


    });
        $("#add-cartoon")


})