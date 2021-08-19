$(document).ready(function () {
    var currrentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");

    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
        currrentFloor = $(this).attr("data-floor")
        $(".counter").text(currrentFloor);
    });

    counterUp.on("click", function () {
        if (currrentFloor < 18) {
            currrentFloor++;
            usCurrentFlor = currrentFloor.toLocaleString("en-US", {
                minimumIntegerDigits: 2, useGrouping: false
            });
            $(".counter").text(usCurrentFlor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFlor}]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function () {
        if (currrentFloor > 2) {
            currrentFloor--;
            usCurrentFlor = currrentFloor.toLocaleString("en-US", {
                minimumIntegerDigits: 2, useGrouping: false
            });
            $(".counter").text(usCurrentFlor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFlor}]`).toggleClass("current-floor");
        }
    });

});