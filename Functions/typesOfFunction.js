//Types of Functions
//what is first class function - Higher order functions refer as first class function
/**
 * Arrow function
 * Call back function
 * Normal function (functin declaration)
 * Anonymous function (function expersion) - a function without name
 * Constructor function 
 * Higher order function
 */


//function declaration
function sum(a,b) {
    let c = a + b;
    //console.log(`sum of ${a} and ${b} is ${c}`);
    return c ;
}

const result  = sum(4,6);
console.log(`Sum result is ${result}`);


//Anonymous function (function expersion) - a function without name
console.log("Anonymous function")
const sub = function(c,d) {
    let e = c - d;
    console.log(`subtract of ${c} and ${d} is ${e}`);
}

sub(8, 2);

//reusability
const sub1 = sub
sub1(8,9);
console.log(typeof sub1);

//Anonymous function without parameters
const an = function() { 
    console.log("Anonymous function without parameters")
}

an();


//Arrow function 
console.log("Arrow function")
const arr = (a,b) => {
    let c = a + b ;
    console.log("result of arrow function  is " + c);
}

arr(10,66);

//Arrow function without parameters
const arr1 = () => console.log("Arrow function without parameters");
arr1();
console.log(typeof arr1);

//In arrow for a single line of code we dont need to specify the return type
//it implicit assigns it 

console.log("Arrow function --single line of code")

const age = (year) => 2024 - year;
console.log(age(1987));

const printName = () => "HASEEB";

printName(); //no output
console.log(printName);  //[function :printName]
console.log(typeof printName); //function
console.log(printName());  //[function :HASEEB]
console.log(typeof printName()); //string

