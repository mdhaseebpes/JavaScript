//Boolean
 let num1 = 8;
 let num2 = 10;

 let isGreater = (num1>=num2);
console.log(isGreater);
console.log(typeof isGreater);

//logical operations

let gender = "male";
let age = 17;

console.log("AND operator")

// AND
if((gender == "male") && (age >=18 )){
    console.log("Eligible")
}
else{
    console.log("Not eligible");
}

//OR
let score = 30;
let attendance = 70;
let result = "PASS";

console.log("OR operator")

if((score >=35) || (attendance >=80)){
    console.log("PASS")
}
else {
    console.log("FAIL");
}

console.log("Negation !")
// NEGATION !
if(!((gender == "male") && (age >=18 ))){  // 
    console.log("Eligible")
}
else{
    console.log("Not eligible");
}


//equality
// = assigment
//== loose comparison
// === strict comparison

let number1  = 100;
let number2 = "100";

console.log("Loose Comparison")
//loose comparison  // JS will convert dataTypes if possible
if(number1 == number2) {   // (78 == "78") (78 == 78) // true not checking the type loosly types
    console.log(number1 + " Equal to " + number2);
} else {
    console.log(number1 + " Not Equal " + number2);
}

let number3  = 100;
let number4 = "Hundred";

if(number3 == number4) {  
    console.log(number3 + " Equal to " + number4);
} else {
    console.log(number3 + " Not Equal to " + number4);
}


//strict comparison
console.log("Strict Comparison")
if(number1 === number2) {   // (78 === "78") (78 === NAN) // false  checking the type strict 
    console.log(number1 + " Equal to " + number2);
} else {
    console.log(number1 + " Not Equal " + number2);
}

//

