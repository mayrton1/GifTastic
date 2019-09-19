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
        $(document.onabort("click",".cartoon-button", function(){
            $("#images").empty();

            $(".cartoon-button").removeClass("active");
            $(this).addclass("active");

            var type =$(this).attr("date-type");
            var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key=j3YA34QeFY0DA4Os0xt2Vyt5wCJKRjSt&q=&limit=10&offset=0&rating=PG&lang=en";

            
        }))

})