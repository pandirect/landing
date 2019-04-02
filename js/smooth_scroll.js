function ready() {
    var START_COORDINATE = 0;
    var DEFAULT_VALUE_COORDINATE = 20;
    var VALUE_TIMER = 5;

    var aboutUsLink = document.getElementById("aboutUsLink");
    var portfolioLink = document.getElementById("portfolioLink");
    var getInTouchLink = document.getElementById("getInTouchLink");
    var aboutUs = document.getElementById("aboutUs");
    var portfolio = document.getElementById("portfolio");
    var getInTouch = document.getElementById("portfolio");

    var scrolled = window.pageYOffset;
    var timer = null;
    var coordinate;

    function scroll(coordinate, scrolled) {
        if (scrolled < coordinate) {
            window.scrollTo(START_COORDINATE, scrolled);
            scrolled = scrolled + DEFAULT_VALUE_COORDINATE;
            timer = setTimeout(function () {
                scroll(coordinate, scrolled)
            }, VALUE_TIMER);
        } else {
            clearTimeout(timer);
            window.scrollTo(START_COORDINATE, coordinate);
        }
    }

    aboutUsLink.onclick = function () {
        coordinate = aboutUs.getBoundingClientRect().top;
        scroll(coordinate, scrolled);
    }

    portfolioLink.onclick = function () {
        coordinate = portfolio.getBoundingClientRect().top;
        scroll(coordinate, scrolled);
    }

    getInTouchLink.onclick = function () {
        coordinate = getInTouch.getBoundingClientRect().top;
        scroll(coordinate, scrolled);
    }
}

document.addEventListener("DOMContentLoaded", ready);