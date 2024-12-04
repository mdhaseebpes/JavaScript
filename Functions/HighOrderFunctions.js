// Higher order function

//1. Assign a function to a variable
//2. Function can be passed as a argument within a another function 
//3. Return function from function

//addition
//subtraction
//divide 
//multiply

// Function can be passed as a argument within a another function 
function calculate(a,b,fn) {

    return fn(a,b);

}

//addition
function sum(a,b) {
    return a+b;
}

//subtraction
function subtract(a,b) {
    return a-b;
}

//divide
function divide(a,b) {
    return a/b;
}

//multiply
function multiply(a,b) {
    return a*b;
}

const result =calculate(8,4,multiply);
console.log(`calculate result is ${result} `);

console.log("---------------------------")

function outCome(a, b){
    return function addition(a, b) {
        let c  = a + b;
      console.log(`sum is : ${c}`);
    }
}

const result1 = outCome(10,33);
//console.log(result1);
console.log(`out come is result1 -  ${result1}`);

console.log("---------------------------")

function out(a, b) {
     function addition(a, b) {
        let c  = a + b;
       console.log(`sum is : ${c}`);
    }
    return addition(a, b)
}

const result2 = out(10,33);
//console.log(result1);
console.log(`out come is result2 - ${result2}`);


console.log("---------------------------")

function outResults(a, b) {
   function add(a, b) {
        return a + b;
      
    }
    const r1 = add(a, b)
    return r1;
 
}

const result3 = outResults(10,33);
//console.log(result1);
console.log(`out come is result3 - ${result3}`);

