// 1. default function
function greet(){
    return "Good Morning";
}
console.log("Greeting: ",greet()) // Good 

// 2. parametarized function
function sum(x,y){
    return x+y;
}
console.log("Sum of 4 & 7: ",sum(4,7)); // 11

// 3. anonymous function
var mul = function(x,y){
    return x * y;
}
console.log("Multiplication of 4 & 5: ",mul(4,5));

// 4. arrow function
var checkEvenOdd = (x) => {
    if(x % 2 === 0){
        return "Even Number";
    }else{
        return "Odd Number";
    }
}
console.log(checkEvenOdd(5));
// note: the above function can check the number is even or odd

// 5. function with optional parameters
var getFullName = (_fname, _lname, _mname = "") => {
    if (_mname) {
        return `${_fname} ${_mname} ${_lname}`;
    } else {
        return `${_fname} ${_lname}`;
    }
}
console.log("Fullname: ",getFullName('Anmol','Chaware','M.')); // Anmol M. Chaware
console.log("Fullname: ",getFullName('Anmol','Chaware')); // Anmol Chaware
// note: in the above funcction middle name parameter is optional

// 6. function with rest parameter
var addition = (...nums) => {
    return nums.reduce(
        (total,num) => total += num 
    );
}
console.log(addition(2,4)); // 6
console.log(addition(2,2,2,2,2)); // 10
// note: the above function can take n number of parameters & return addition of all number