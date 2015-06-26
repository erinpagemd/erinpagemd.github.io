angular
.module('ErinApp')
.controller('CarouselCtrl', function ($scope, CarouselService, $location, $anchorScroll){

  $scope.projects = CarouselService;


  // $scope.gotoHor = function (){
  //   $location.hash('hor-div');
  // }

})
