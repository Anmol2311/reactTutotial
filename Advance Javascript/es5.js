// ES5 features :-

// 1. String.trim(): remove white spaces
var str = "     Anmol     ";
console.log("1. String after trim: ", str.trim()); // "Anmol"

// 2. Array.isArray(): use to check whether the given object is array or not
var numbers = [45, 4, 9, 4, 16, 25];
console.log("2. Is an Array or not: ", Array.isArray(numbers)); // true

// 3. Array.forEach(): invoke a function for each array element
console.log("3. Iterate number array using forEach:");
numbers.forEach(n => console.log(n));

// 4. Array.map(): create a new array by invoking a function for each array element.
var employees = [
    { fname: 'anmol', lname: 'chaware' }, { fname: 'suhas', lname: 'kawale' }, { fname: 'ravi', lname: 'patil' }
]
var emps = employees.map(emp => emp.fname + " " + emp.lname);
console.log("4. Get employees name by manipulating employees array:",emps); // [ 'anmol chaware', 'suhas kawale', 'ravi patil' ]

// 5. Array.filter(): create a new array by invoking a function for each array element that pass a condition.
var nums = numbers.filter(n => n > 5);
console.log("5. Array of numbers greater than 5: ", nums);

// 6. Array.reduce(): finds the sum of all numbers in an array.
var total = numbers.reduce((prev, next) => prev += next);
console.log("6. Sum of all elements of numbers array: ", total);

// 7. Array.every(): return true if all elements passes a condition.
var allOver5 = numbers.every(n => n > 5);
console.log("7. All numbers greater than 5: ", allOver5); // false

// 8. Array.some(): return true if some elements passes a condition.
var allOver6 = numbers.some(n => n > 6);
console.log("8. All numbers greater than 6: ", allOver6); // true

// 9. Array.indexOf(): return the index of array element & search from left to right.  
console.log("9. Index of 4 using indexOf: ",numbers.indexOf(4));

// 10. Array.lastIndexOf(): return the index of array element & search from right to left.  
console.log("10. Index of 4 using lastIndexOf: ",numbers.lastIndexOf(4));

// 11. JSON.stringify(): convert object to string.
var employee = { name:'Anmol Chaware', post:'Angular Developer'};
var objToStr = JSON.stringify(employee);
console.log("11. Object to String: ",objToStr);

// JSON.parse(): convert string to object.
console.log("12. String to Object: ",JSON.parse(objToStr));