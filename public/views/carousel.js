angular
.module('ErinApp')
.controller('CarouselCtrl', function ($scope, $location, $anchorScroll){
  $scope.hovering = false;

  $scope.gotoHor = function (){
    $location.hash('hor-div');
  }

  $scope.gotoAppchiever = function (){
    $location.hash('appchiever')
  }

  $scope.gotoChismosas = function (){
    $location.hash('chismosas')
  }

  $scope.gotoNerd = function (){
    $location.hash('nerd')
  }

  $scope.gotoBook = function (){
    $location.hash('book')
  }

  $scope.gotoRecycle = function (){
    $location.hash('recycle')
  }

  $scope.gotoBattle = function (){
    $location.hash('battle')
  }

  $scope.gotoWon = function (){
    $location.hash('won')
  }

  $scope.gotoHoney = function (){
    $location.hash('honey')
  }

  $scope.gotoStock = function (){
    $location.hash('stock')
  }

  $scope.gotoPush = function (){
    $location.hash('push')
  }
})
