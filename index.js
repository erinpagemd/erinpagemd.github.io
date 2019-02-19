'use strict'

//var $ = require('jquery'),
//    _ = require('lodash')

$(document).ready(initialize);
function initialize () {
  $('#submit-form').click(function(event) {
    console.log(event.type);
    event.preventDefault();
    $('#name').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#message').val("");
  })

}

