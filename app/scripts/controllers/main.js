'use strict';

/**
 * @ngdoc function
 * @name classeveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the classeveApp
 */
angular.module('classeveApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
  	$scope.sliderData = [
  	{
  		"image":"images/bg/IMG_01.jpg",
  		"key":"home, standard"
  	},
  	{
  		"image":"images/bg/IMG_02.jpg",
  		"key":"home, standard"
  	},
  	{
  		"image":"images/bg/IMG_03.jpg",
  		"key":"home, standard"
  	},
  	{
  		"image":"images/bg/IMG_04.jpg",
  		"key":"home, standard"
  	},
  	{
  		"image":"images/bg/IMG_05.jpg",
  		"key":"home, pro"
  	},
  	{
  		"image":"images/bg/IMG_06.jpg",
  		"key":"home"
  	},
  	{
  		"image":"images/bg/IMG_07.jpg",
  		"key":"home, standard"
  	},
  	// {
  	// 	"image":"images/bg/IMG_08.jpg",
  	// 	"key":"contact"
  	// },
  	{
  		"image":"images/bg/IMG_09.jpg",
  		"key":"home, pro"
  	},
   	{
  		"image":"images/bg/IMG_10.jpg",
  		"key":"home, pro"
  	},
    {
      "image":"images/bg/IMG_11.jpg",
      "key":"home, pro"
    },
  	];
  }])
  .controller('HomeCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
  	$rootScope.IMG_SET="home";
    $rootScope.activeRub = "home";
  	$timeout(function(){$rootScope.$apply();});
  	
  }])
  .controller('ParticulierCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
  	$rootScope.IMG_SET="standard";
    $rootScope.activeRub = "particuliers";
  	$timeout(function(){$rootScope.$apply();});
  	
  }])
  .controller('ProCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
  	$rootScope.IMG_SET="pro";
    $rootScope.activeRub = "pro";
  	$timeout(function(){$rootScope.$apply();});
  	
  }])
  .controller('MusiqueCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
  	$rootScope.IMG_SET="standard";
    $rootScope.activeRub = "musique";
  	$timeout(function(){$rootScope.$apply();});
  	
  }])
  .controller('TarifsCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
  	$rootScope.IMG_SET="standard";
    $rootScope.activeRub = "tarifs";
  	$timeout(function(){$rootScope.$apply();});
  	
  }])
  .controller('ContactCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
  	$rootScope.IMG_SET="contact";
    $rootScope.activeRub = "contact";
  	$timeout(function(){$rootScope.$apply();});
  }])
  .directive('collapse', ['$animate', function ($animate) {

    return {
      link: function (scope, element, attrs) {
        
        function expand() {
          element.removeClass('collapse').addClass('collapsing');
          $animate.addClass(element, 'in', {
            to: { height: element[0].scrollHeight + 'px' }
          }).then(expandDone);
        }

        function expandDone() {
          element.removeClass('collapsing');
          element.css({height: 'auto'});
        }

        function collapse() {

          element
            // IMPORTANT: The height must be set before adding "collapsing" class.
            // Otherwise, the browser attempts to animate from height 0 (in
            // collapsing class) to the given height here.
            .css({height: element[0].scrollHeight + 'px'})
            // initially all panel collapse have the collapse class, this removal
            // prevents the animation from jumping to collapsed state
            .removeClass('collapse')
            .addClass('collapsing');

          $animate.removeClass(element, 'in', {
            to: {height: '0'}
          }).then(collapseDone);
        }

        function collapseDone() {
          element.css({height: '0'}); // Required so that collapse works when animation is disabled
          element.removeClass('collapsing');
          element.addClass('collapse');
        }

        scope.$watch(attrs.collapse, function (shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
}])
.directive('randomBackground', ['$animate', function ($animate) {

    return {
      restrict:'A',
      scope:{
        data:'='
      },
      template:'<div class="slide fade-animate" back-img="{{image}}" ></div>',
      link: function (scope, element, attrs) {
        var total = scope.data.length;
        scope.image = scope.data[Math.floor(Math.random()*total)].image;
      }
    };
  }]);
