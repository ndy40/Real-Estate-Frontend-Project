require.config( {
     paths : {
        'domReady' : "assets/requirejs-domready/domReady",
        'angular'  : "assets/angular/angular.min",
        'ngRoute'  : "assets/angular-route/angular-route.min", 
        "app"      : "components/app"
    },
    shim : {
        'angular' : {exports : "angular"},
        'ngRoute' : ['angular'],
        'app'     : ['angular', 'ngRoute']
    },

    deps : [
        "assets/js/jquery",
        "assets/js/jquery.cookie",
        "assets/js/bootstrap",
        "assets/js/jasny-bootstrap",
        "assets/js/html5shiv",
        "assets/js/respond.min",
        "assets/js/owl.carousel",
        "assets/js/selectize",
        "assets/js/script",
        "components/bootstrap", 
    ]

});