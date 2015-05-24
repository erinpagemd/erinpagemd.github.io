angular
.module('ErinApp')
.controller('CarouselCtrl', function ($scope, $location, $anchorScroll){
  $scope.hovering = false;

  $scope.gotoHor = function (){
    $location.hash('hor-div');
  }
})
