function loadCss(url) {
    'use strict';
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

loadCss("assets/css/style.min.css");