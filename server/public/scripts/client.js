$(document).ready(start);

function start(){
    appendStart();
    $('.operator').on('click', sendOperation);
    $('#clear').on('click', restart);
}

//create and append inputs and buttons to .container div
function appendStart(){
    var $userInput = $('<div class="inputs"></div>');
    $userInput.append('<label for="num1">First Number: </label><br>');
    $userInput.append('<input type="number" id="num1"><br>');
    $userInput.append('<label for="num2">Second Number: </label><br>');
    $userInput.append('<input type="number" id="num2"><br>');
    $userInput.append('<button class="operator" id="add">ADD</button>');
    $userInput.append('<button class="operator" id="subtract">SUBTRACT</button>');
    $userInput.append('<button class="operator" id="multiply">MULTIPLY</button>');
    $userInput.append('<button class="operator" id="divide">DIVIDE</button>');
    $userInput.append('<h2>RESULT: <span id="result"></span></h2>');
    $userInput.append('<button id="clear">CLEAR</button>');
    $('.container').append($userInput);
}

// empty .container and then re-appendStart() to the DOM
function restart(){
    $('.container').empty();
    appendStart();
    $('.operator').on('click', sendOperation);
    $('#clear').on('click', restart);
}

function sendOperation(){
   //store the id name in a variable
    var operator = $(this).attr('id');
   console.log('var operator:', operator);
   // object that will be the data in POST request
   var mathParts = {
       first: $('#num1').val(),
       second: $('#num2').val(),
       type: operator
   }
   console.log('mathParts object:', mathParts);
   
   // make POST request
   $.ajax({
       method: 'POST',
       url: '/calculate',
       data: mathParts
   }).done(function(response){
       console.log('response sent from server:', response);
    //once POST req is finished, call function that will make a GET req
    getResult();
   }).fail(function(message){
       console.log('Error', message);
   })
}

function getResult(){
    // make GET request
  $.ajax({
      method: 'GET',
      url: '/calculate'
  }).done(function(response){
      var calculatedResult = response;

      appendResult(calculatedResult.finalAns);
  })
}

// display the result on the DOM
function appendResult(myResult) {
 $('#result').text(myResult);
}