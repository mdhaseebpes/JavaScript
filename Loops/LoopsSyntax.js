// 3 types of loops in javascript 
/** 
1. classical for loop  -- example : for(let i=0;i<5;i++);
2. for of loop -- example  : for(const val of arrays);  used for iterables items  like arrays
3. for in loop - example : for(const key in Object);
*/

//classical for Loops
console.log("For loop")

for(let i=0; i<5; i++) {
    console.log("I will become expert in Javascript and TypeScript");
}


console.log("For loop using arrays")
let marks = [55, 64, 78,89,99];

for(let i=0; i< marks.length; i++){
    console.log(marks[i]);
}


//for of loop  -- works on the value directly , does not work on the index position
//const is used as during run time value cannot be modified . if we use 'let' we can modify the variable
console.log("For of loop")
for(const i of marks){
    console.log(i);
}


//While loop
console.log("While loop")
let i = 0;

while(i<=5) {
    console.log("I will become SDET expertise ");
    i++;
    
}

