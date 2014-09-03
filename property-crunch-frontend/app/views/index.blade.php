<!DOCTYPE html>
<html xmlns:ng="http://angularjs.org/" ng-app="PC">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{asset('assets/css/bootstrap/bootstrap.css')}}" rel="stylesheet">
        <link href="{{asset('assets/css/style.css')}}" rel="stylesheet">
        <link rel="shortcut icon" href="{{asset('assets/ico/favicon.ico')}}">
        <title>Property Crunch</title>

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <link href="css/ie_spritesheet.css" rel="stylesheet">
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
            
    </head>
    <body data-spy="scroll"  data-target=".navbar-collapse" ng-view>
        <!-- contents go in here. -->

        <script src="{{asset('assets/js/jquery.js')}}"></script>
        <script src="{{asset('assets/angular/angular.js')}}"></script>
        <script src="{{asset('assets/js/jquery.cookie.js')}}"></script>
        <script src="{{asset('assets/js/bootstrap.js')}}"></script>
        <script src="{{asset('assets/js/jasny-bootstrap.js')}}"></script>
        <script src="{{asset('assets/js/selectize.js')}}"></script>
        <script src="{{asset('assets/js/bootstrapValidator.min.js')}}"></script>
        <script src="{{asset('assets/angular-route/angular-route.js')}}"></script>

        <!-- Load Angular JS -->
        <!-- load module files -->
        <script src="{{asset('main.js')}}"></script>
        <script src="{{asset('components/search/module.js')}}"></script>
        <script src="{{asset('components/home/module.js')}}"></script>
        
        
        <!-- load factories -->

        <!-- load services --> 
        <script src="{{asset('components/search/search-service.js')}}"></script>

        <!-- load directives --> 


        <!-- load controllers -->
        <script src="{{asset('components/search/searchform-controller.js')}}"></script>
        <script src="{{asset('components/home/home-controller.js')}}"></script> 

	</body>
</html>