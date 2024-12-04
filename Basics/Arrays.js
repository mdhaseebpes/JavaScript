//Arrays
//Stores value of different data types 
//Do not specify size , no bondaries set in size
//declaration = let names = ["A" ,30 ,true , 1000.50];

// Not defined position 6
let profile = ["Waiz",4,'male',true,undefined,null]
profile[7] = "Champion";

console.log(profile);


//sub arrays
let sports = ['cricket', "Football"]
let profile1 = ["Waiz",4,true,undefined,null, sports]
profile1[8] = "Champion";

console.log(profile1);
console.log(profile1[5][0]);
console.log(profile1.length);
console.log(profile1.length[7]); // value not present in array
console.log(profile1[7]); // value not present in array