var convergenApp = angular.module('convergenApp', ['ngRoute', 'ngAnimate']);

convergenApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'pages/beranda.html'
		})
		.when('/detil', {
			templateUrl : 'pages/detil.html'
		})
		.when('/paket', {
			templateUrl : 'pages/paket.html'
		})
		.when('/client', {
			templateUrl : 'pages/client.html'
		})
		.when('/kontak', {
			templateUrl : 'pages/kontak.html'
		})
		.when('/fitur', {
			templateUrl : 'pages/fitur.html'
		})
		.when('/sample', {
			templateUrl : 'pages/sample.html'
		})
		.when('/paket2', {
			templateUrl : 'pages/paket2.html'
		})
		.when('/profile', {
			templateUrl : 'pages/profile.html'
		})
});

convergenApp.directive('colorbox', function() {
   return function(scope, element, attrs) {
       element.colorbox();
   }
});

convergenApp.controller('NavController', function ($scope, $location) {
   $scope.getClass = function (path) {
    if(path === '/') {
        if($location.path() === '/') {
            return "active";
        } else {
            return "";
        }
    }
	 
	var getPath = $location.path().substr(0, path.length);
	

	if (getPath == '/fitur' || getPath == '/sample' || getPath == '/sampl'){
		getPath = '/detil';
	}

	if (getPath == '/paket2'){
		getPath = '/paket';
	}
    if (getPath === path) {
        return "active";
    } else {
        return "";
    }
}
});

 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46999947-1', 'convergen.co');
  ga('send', 'pageview');