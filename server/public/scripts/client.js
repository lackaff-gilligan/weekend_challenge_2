$(document).ready(start);

function start(){
    appendNumberBtns();
   
    //click handlers
    $('#numBtns').on('click','button', useNumber);
    $('.operator').on('click', useOperator);
    $('#equals').on('click', sendCalculation);
}
//will store all components of the calculation
var mathNumbers = [];
var myOperator;

//append number buttons to DOM
function appendNumberBtns() {
  for(var i = 0; i < 10; i += 1){
      $('#numBtns').append('<button id="num' + i + '">' + i + '</button>');
  }
}

//display and then store the number when its button is clicked
function useNumber(){
    $('#display').append($(this).text());
    console.log($('#display').text());
    mathNumbers.push($(this).text());   
}

//display and store the operator to be used in calculation
function useOperator(){
    myOperator = $(this).attr('id');
    console.log(myOperator);
    if(myOperator === 'add'){
        myOperator = '+';
    } else if(myOperator === 'subtract'){
        myOperator = '-';
    } else if(myOperator === 'multiply'){
        myOperator = '*';
    } else if(myOperator === 'divide'){
        myOperator = '/';
    }
    $('#display').append(" " + myOperator + " ");
}

function sendCalculation(){
    var mathBundle = {
        first: mathParts[0],
        second: mathParts[1],
        operator: myOperator
    }
    console.log('mathBundle object:', mathBundle);
    
    //make POST request
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: mathBundle
    }).done(function(response){
        console.log('response sent from server:', response);
        //will add function that makes GET req
    }).fail(function(message){
        console.log('Error', message);
    })
}

//     //add event handlers
//     $('.operator').on('click', sendOperation);
//     $('#clear').on('click', restart);
// }

// empty .container and then re-appendBaseStart() to the DOM
// function restart(){
//     $('.container').empty();
//     appendBaseStart();

// }

// function getResult(){
//     // make GET request
//   $.ajax({
//       method: 'GET',
//       url: '/calculate'
//   }).done(function(response){
//       var calculatedResult = response;

//       appendResult(calculatedResult.finalAns);
//   })
// }

// // display the result on the DOM
// function appendResult(myResult) {
//  $('#result').text(myResult);
// }