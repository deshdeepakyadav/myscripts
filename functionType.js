// Regural Function, Called exciplitly by name
function getSum(){
    var sum = 3+4;
    console.log(sum);
}

getSum(); // Calling Regular Function

//Anonymous function stored in a variable and invoked by calling the variable name
var getMultiplication = function(){
    var multi = 3 * 4;
    console.log(multi);
}

getMultiplication();

//Immediately Invoked Function Expression (IIFE), runs as soon as browser finds it
(function(){
    var divide = 15/ 5;
    console.log(divide);
}());

