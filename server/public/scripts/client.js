$(document).ready(start);

function start(){
    //appendBaseStart();
    appendNumberBtns();
    //addClickHandlers();
}

function appendNumberBtns() {
  for(var i = 0; i < 10; i += 1){
      $('#numBtns').append('<button id="num' + i + '">' + i + '</button>');
  }

//   var $opBtns = $('<div class="opBtns"></div>');
//   $opBtns.append('<button class="operator" id="add">ADD</button>');
//   $opBtns.append('<button class="operator" id="subtract">SUBTRACT</button>');
//   $opBtns.append('<button class="operator" id="multiply">MULTIPLY</button>');
//   $opBtns.append('<button class="operator" id="divide">DIVIDE</button><br>');
//   $opBtns.append('<button class="operator" id="equals">EQUALS</button><br>');
//   $opBtns.append('<button id="clear">CLEAR</button>');
//   //append to the DOM
//   $('.container').append('<h2 id="display">hey</h2>');
//   $('.container').append($numBtns);
//   $('.container').append($opBtns);
}

function addClickHandlers(){
    $numBtns.on('click', 'button', useNumber);
}

function useNumber(){
    $('#display').append($(this).text());
}

//create and append inputs and buttons to .container div
// function appendBaseStart(){
//     var $userInput = $('<div class="inputs"></div>');
//     $userInput.append('<label for="num1">First Number: </label><br>');
//     $userInput.append('<input type="number" id="num1"><br>');
//     $userInput.append('<label for="num2">Second Number: </label><br>');
//     $userInput.append('<input type="number" id="num2"><br>');
//     $userInput.append('<button class="operator" id="add">ADD</button>');
//     $userInput.append('<button class="operator" id="subtract">SUBTRACT</button>');
//     $userInput.append('<button class="operator" id="multiply">MULTIPLY</button>');
//     $userInput.append('<button class="operator" id="divide">DIVIDE</button>');
//     $userInput.append('<h2>RESULT: <span id="result"></span></h2>');
//     $userInput.append('<button id="clear">CLEAR</button>');
//     $('.container').append($userInput);
//     //add event handlers
//     $('.operator').on('click', sendOperation);
//     $('#clear').on('click', restart);
// }

// empty .container and then re-appendBaseStart() to the DOM
function restart(){
    $('.container').empty();
    appendBaseStart();

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