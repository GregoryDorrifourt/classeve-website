'use strict';

/**
* classeveApp Module
*
* Description
*/
angular.module('classeveApp')
	.directive('bgSlider', ['$q', '$http', '$window', '$location', '$timeout','$rootScope','$filter',function ($q, $http, $window, $location, $timeout, $rootScope,$filter) {
		return {
			restrict: 'AE',
			template:'<div class="slide fade-animate" ng-repeat="slide in data" back-img="{{slide.image}}" ng-hide="$index!==current"></div>',
			scope:{
				data : '='
			},
			link: function (scope, element, attrs) {
				scope.current = 0;
				var to, speed = 8;
				
				function next(){
					scope.current = scope.current===scope.data.length-1 ? 0:scope.current+1;
					$timeout.cancel(to);
					to = $timeout(next, speed*1000);
					TweenMax.set($('.slide',element).eq(scope.current),{scale:1});
					TweenMax.to($('.slide',element).eq(scope.current), speed+1, {scale:1.2, ease:Power0.easeNone});
					$timeout(function(){scope.$apply();});
				}

				next();
				
				
			}
		};
	}])
	.directive('backImg', function(){
	    return function(scope, element, attrs){
	        attrs.$observe('backImg', function(value) {
	            element.css({
	                'background-image': 'url(' + value +')',
	                'background-size' : 'cover',
	                'background-position':'center'
	            });
	        });
	    };
	});