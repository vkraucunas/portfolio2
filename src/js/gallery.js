$(function() {
    $(".gallery li").on("mouseenter mouseleave", function(e) {

        /** the width and height of the current div **/
        var w = $(this).width();
        var h = $(this).height();

        /** calculate the x and y to get an angle to the center of the div from that x and y. **/
        /** gets the x value relative to the center of the DIV and "normalize" it **/
        var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);

        /** the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);**/
        /** first calculate the angle of the point,
         add 180 deg to get rid of the negative values
         divide by 90 to get the quadrant
         add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
        // var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        var direction = 0;


        var slideFrom = {
            "top": "-100%",
            "right": "0"
        };
        var slideTo = {
            "top": 0
        };


        if (e.type === 'mouseenter') {

            var element = $(this);

            element.find(".info").removeClass("transform").css(slideFrom);
            element.find("img").addClass("transform").css("transform", "matrix(1, 0, 0, 1, 0, 0)");

            setTimeout(function() {
                element.find(".info").addClass("transform").css(slideTo);
            }, 1.5);


        } else {

            var element = $(this);

            element.find(".info").addClass("transform").css(slideFrom);
            element.find("img").removeClass("transform").css("transform", "matrix(1, 0, 0, 1, 0, 0)");

            setTimeout(function() {
                element.find("img").addClass("transform").css("transform", "matrix(1, 0, 0, 1,0,0)");
            }, 1.5);

        }

    });

});
