$(document).ready(initialize);

var BASE_URL = 'https://erinpagemd.firebaseio.com/';
var fb = new Firebase(BASE_URL);
var messagesfb = fb.child('messages');


function initialize () {
  $('#submit-form').click(sendForm);
}

function sendForm (event) {
  event.preventDefault();

  messagesfb.push({
    name: getName(),
    email: getEmail(),
    phone: getPhone(),
    message: getMessage()
  });
}

function getName () {
  var name = $('#name').val();
  $('#name').val('');
  return name;
}

function getEmail () {
  var email = $('#email').val();
  $('#email').val('');
  return email;
}

function getPhone () {
  var phone = $('#phone').val();
  $('#phone').val('');
  return phone;
}

function getMessage () {
  var message = $('#message').val();
  $('#message').val('');
  return message;
}
