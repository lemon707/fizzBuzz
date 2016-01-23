var fizzBuzzOnConsole = function(){
    
    for(var i = 1; i <= 100; i += 1) {
        
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

var fizzBuzz = function(){
    
    var strToReturn = "";

    for(var i = 1; i <= 100; i += 1) {
        
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

fizzBuzzOnConsole();

document.getElementById("demo").innerHTML = fizzBuzz();
