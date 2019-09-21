//creat array to hold the buttons 

$(document).ready(function () {

    var cartoons = ["scary", "funny", "sleepy", "bouncing"

    ];
    // This function will create the buttons and add to the page
    function createButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        for (var i = 0; i < arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-cartoons", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
        }
    }

    //function to pull images from giphy API 
    $(document).on("click", ".cartoon-button", function () {
        $("#images").empty();
        // event.preventDefault();
        $(".cartoon-button").removeClass("active");
        $(this).addClass("active");

        var cartoons = $(this).attr("data-cartoons");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoons +  "&api_key=j3YA34QeFY0DA4Os0xt2Vyt5wCJKRjSt&q=cartoons&limit=10&offset=25&rating=PG&lang=en";

        //Ajax code 

        $.ajax({
            url: queryURL,
            method: "GET"

        })

            .then(function (response) {

                console.log(queryURL);

                console.log(response);
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var cartoonDiv = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating:" + rating);

                    var animated = results[i].images.fixed_height.url;

                    var still = results[i].images.fixed_height_still.url;

                    var cartoonImage = $("<img>");

                    cartoonImage.attr("src", still);
                    cartoonImage.attr("data-still", still);
                    cartoonImage.attr("data-animate", animated);
                    cartoonImage.attr("data-state", "still");
                    cartoonImage.addClass("cartoon-image");

                    

                    cartoonDiv.append(p);
                    cartoonDiv.append(cartoonImage);

                    $("#images").append(cartoonDiv);

                    console.log(cartoonDiv);
                }
                
            });
    });

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
        $("#add-cartoon").on("click", function(event){
            event.preventDefault();
            var newCartoon =$("input").eq(0).val();

            if (newCartoon.length > 2 ) {
                cartoons.push(newCartoon);
            }

            createButtons(cartoons, "cartoon-button", "#cartoon-buttons");
        });

       
        createButtons(cartoons, "cartoon-button", "#cartoon-buttons");
    });