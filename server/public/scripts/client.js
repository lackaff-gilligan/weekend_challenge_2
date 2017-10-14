$(document).ready(start);

function start(){
    appendStart();
    $('.operator').on('click', sendOperation);
}

function appendStart(){
    var $userInput = $('<div class="inputs"></div>');
    $userInput.append('<input type="number" id="num1"><br>');
    $userInput.append('<input type="number" id="num2"><br>');
    $userInput.append('<button class="operator" id="add">ADD</button>');
    $userInput.append('<button class="operator" id="subtract">SUBTRACT</button>');
    $userInput.append('<button class="operator" id="multiply">MULTIPLY</button>');
    $userInput.append('<button class="operator" id="divide">DIVIDE</button>');
    $userInput.append('<button id="clear">CLEAR</button>');
    $('.container').append($userInput);
}

function sendOperation(){
   var operator = $(this).attr('id');
   console.log(operator);
   // object will be data in POST request
   var mathOperation = {
       x: $('#num1').val(),
       y: $('#num2').val(),
       type: operator
   }
   console.log('mathOperation:', mathOperation);
   // make POST request
   $.ajax({
       method: 'POST',
       url: '/calculate',
       data: mathOperation
   }).done(function(response){
       console.log(response);
    //get req function will be called here
   }).fail(function(message){
       console.log('Error', message);
   })
}

