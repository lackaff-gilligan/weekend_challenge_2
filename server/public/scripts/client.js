$(document).ready(start);

function start(){
    appendNumberBtns();
    getHistory();
    
    //click handlers
    $('#numBtns').on('click','button', useNumber);
    $('.operator').on('click', useOperator);
    $('#equals').on('click', sendCalculation);
    $('#clear').on('click', reset);
}

//will store the operator in a string
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
    var stringProblem = $('#display').text();
    //put the string of math in an object
    var solveThis = {
        problem: stringProblem
    }
    //make POST request
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: solveThis
    }).done(function(response){
        console.log('response sent from server:', response);
        //call function that makes GET req
        getAnswer();
    }).fail(function(message){
        console.log('Error', message);
    })
}

//make Get request for the answer
function getAnswer(){
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).done(function(response){
        console.log('success!');
        addAnswerToDOM(response);
        getHistory();
    })
}

function addAnswerToDOM(objReturned){
    var currentAns = objReturned.return;
    $('#answer').append(currentAns);
}

//make Get request for past calculations
function getHistory(){
    $.ajax({
        method: 'GET',
        url: '/history'
    }).done(function(response){
        console.log('success history!', response);
        appendHistory(response);
    })
}

function appendHistory(history){
    //reset from the start to avoid duplicates
    $('#pastCalculations').empty();
    console.log('in appendHistory:', history);
   for (var i = 0; i < history.length; i += 1){
  $('#pastCalculations').append('<li>' + history[i] + '</li>');
 }
}

function reset(){
    $('#display').text('');
    $('#answer').text('');
}
