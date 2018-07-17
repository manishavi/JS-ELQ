function fizzbuzz() {
    for(let x = 1; x <= 100; x++) {
        if (x%3 === 0) {
            console.log('Fizz');
        } 
        if (x%5 === 0) {
            console.log('Buzz');
        } 
        if (x%3 === 0 && x%5 === 0) {
            console.log('FizzBuzz');
        }
        else {
            console.log(x);
        }
    }
}

fizzbuzz();

// Solution 

function fizzbuzz2() {
    for (var n = 1; n <= 100; n++) {
        var output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
    }
}

fizzbuzz2();