function ready() {
    var DEFAULT_CHANGE_OPACITY = 0.05;
    var START_VALUE_OPACITY = 0;
    var END_VALUE_OPACITY = 1;
    var VALUE_TIMER = 10;
    var BLOCK = "block";
    var NONE = "none";

    var showMore = document.getElementById("showMore"); 
    var prosContainer = document.getElementById("addInformation");
    var isAnyAction = false;
    var timer = null;

    showMore.onclick = function() {
        var opacityOpen = START_VALUE_OPACITY;
        function page_open() {
            prosContainer.style.display = BLOCK;
            isAnyAction = true;
            if (opacityOpen <= END_VALUE_OPACITY) {
                opacityOpen = opacityOpen + DEFAULT_CHANGE_OPACITY;
                prosContainer.style.opacity = opacityOpen;
                timer = setTimeout(function(){page_open()}, VALUE_TIMER);
            }
            if (opacityClose > END_VALUE_OPACITY) {
                isAnyAction = false;
            }
            showMore.text = "Show less";
        }

        var opacityClose = END_VALUE_OPACITY;
        function page_close() {
            isAnyAction = true;
            if (opacityClose >= DEFAULT_CHANGE_OPACITY) /*тоже чтобы не уходило в минус*/{
                opacityClose = opacityClose - DEFAULT_CHANGE_OPACITY;
                prosContainer.style.opacity = opacityClose;
                timer = setTimeout(function(){page_close()}, VALUE_TIMER);
            } else {
                prosContainer.style.display = NONE;
                isAnyAction = false;
                showMore.text = "Show more";
            }
        }
        
        if (prosContainer.style.display !== BLOCK && !isAnyAction) {
            page_open();
        } else {
            page_close();
        }
    }
}

document.addEventListener("DOMContentLoaded", ready);