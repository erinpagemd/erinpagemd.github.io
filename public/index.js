'use strict'

//var $ = require('jquery'),
//    _ = require('lodash')

angular
.module('ErinApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {url:'/', templateUrl:'views/title.html'})
    .state('profile', {url:'/profile', templateUrl:'views/carousel.html'})
    .state('selfie', {url:'/selfie', templateUrl:'views/selfie.html'})
    .state('community', {url:'/community', templateUrl:'views/community.html'})
    .state('contact', {url:'/contact', templateUrl:'views/contactform.html'})
});
