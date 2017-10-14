$(document).ready(start);

function start(){
    appendStart();
    $('.operator').on('click', sendOperation);
}

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

function sendOperation(){
   //store the id name in a variable
    var operator = $(this).attr('id');
   console.log('var operator:', operator);
   // object will be data in POST request
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
    //make GET request when POST request is finished
    getResult();
   }).fail(function(message){
       console.log('Error', message);
   })
}

// make GET request
function getResult(){
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