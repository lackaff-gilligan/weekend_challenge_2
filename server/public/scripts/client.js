$(document).ready(start);

function start(){
    appendStart();
    $('.operator').on('click', determineOperation);
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

function determineOperation(){
   var operator = $(this).attr('id');
   console.log(operator);
   
}

