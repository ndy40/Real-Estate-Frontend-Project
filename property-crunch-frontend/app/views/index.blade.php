<!DOCTYPE html>
<html data-ng="http://angularjs.org/" data-csrf="{{csrf_token()}}">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="fragment" content="!"> 
        <meta name="author" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="{{asset('favicon.ico')}}">
        <title>nello - a smarter way to find properties</title>
        <base href="/">

        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
        
        <!-- Google Analytics -->
        <script async type="text/javascript">
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-57851758-1', 'auto');ga('send', 'pageview');
        </script>
        
        <!--Start of Zopim Live Chat Script-->
        <script async type="text/javascript">
        window.$zopim||(function(d,s){var z=$zopim=function(c){
        z._.push(c)},$=z.s=
        d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
        _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
        $.src='//v2.zopim.com/?2wlt9HE6fuWsKsAQLOZQ89PhPYma8xbQ';z.t=+new Date;$.
        type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
        </script>
        <!--End of Zopim Live Chat Script-->
    </head>
    <body>
        <div pc-loader></div>
        
        <!-- contents go in here. -->
        <div ng-view></div>

        <script async src="{{asset('assets/js/requirejs/require.min.js')}}" data-main="{{asset('dist/main.js')}}"></script>
    </body>
</html>
