var fizzBuzz = function(num){
    
    var strToReturn = "";

    for(var i = 1; i <= num; i += 1) {
        
        var str = "";
        
        if(i % 3 === 0) {
            str += "Fizz";
        }
        
        if (i % 5 === 0) {
            str += "Buzz";
        }
        
        strToReturn += (str || i) + '<br />';
        
    }

    return strToReturn;
    
};

var fizzBuzzOnConsole = function(num){
    
    for(var i = 1; i <= num; i += 1) {
        
        var str = "";
        
        if(i % 3 === 0) {
            str += "Fizz";
        }
        
        if (i % 5 === 0) {
            str += "Buzz";
        }
        
        console.log(str || i);
        
    }
    
};

var upperLimit = prompt("Please type an integer between 1 and 100");


if(upperLimit > 1 && upperLimit % 1 === 0 && upperLimit !== NaN) {

    var number = parseInt(upperLimit);
    
    document.getElementById("demo").innerHTML = fizzBuzz(number);

    fizzBuzzOnConsole(number);

}

else {

    alert("Try again!");

    upperLimit = prompt("Please type an integer between 1 and 100");

    var number = parseInt(upperLimit);

    document.getElementById("demo").innerHTML = fizzBuzz(parseInt(upperLimit));
    
    fizzBuzzOnConsole(number);

}



