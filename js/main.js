$(document).ready(function () {
    var currrentFloor = 2;
    var currrentFlats = 41;
    var floorPath = $(".home-image path");
    var flatsPath = $(".flats path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

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

    floorPath.on("click", toggleModal);
    modalCloseButton.on("click", toggleModal);
    viewFlatsButton.on("click", toggleModal);

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

    function toggleModal() {
        modal.toggleClass("is-open")
    }

});