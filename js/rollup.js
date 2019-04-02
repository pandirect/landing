function ready() {
    var DEFAULT_COORDINATE = 20;
    var START_VALUE_COORDINATE = 0;
    var VALUE_TIMER = 10;
    var BLOCK = "block";
    var NONE = "none";

    var scrollUp = document.getElementById("scrollUp"); 

    scrollUp.onclick = function() {
        var scrolled = window.pageYOffset;
        var timer = null;

        scroll();        

        function scroll() {
            if (scrolled > START_VALUE_COORDINATE) {
                window.scrollTo(START_VALUE_COORDINATE, scrolled);
                scrolled = scrolled - DEFAULT_COORDINATE;
                timer = setTimeout(function(){scroll()}, VALUE_TIMER);
            } else {
                clearTimeout(timer);
                window.scrollTo(START_VALUE_COORDINATE, START_VALUE_COORDINATE);
            }
        }
    }

    window.onscroll = function() {
        if ( window.pageYOffset > START_VALUE_COORDINATE ) {
            scrollUp.style.display = BLOCK;
        } else {
            scrollUp.style.display = NONE;
        }
    }
}

document.addEventListener("DOMContentLoaded", ready);