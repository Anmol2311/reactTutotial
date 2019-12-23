// ES6 features:

// 1. let: allow us to declare a variable with block scope.
function Product() {
    let productName = "Laptop";
    return productName;
}
console.log("Product Name: ", Product());
// note: productName variable has a local scope & only accessible inside the function

// 2. const: allow us to declare a constant variable with a constant value.
const companyName = "Neosoft Technology";

// 3. arrow function:
var sum = (a, b) => {
    return a + b;
}
console.log("Sum of 4 & 6: ", sum(4, 6));

// 4. default parameter or optional parameter
var fullName = (_fname, _lname, _mname = "") => {
    if (_mname) {
        return `${_fname} ${_mname} ${_lname}`;
    } else {
        return `${_fname} ${_lname}`; // ;
    }
}
console.log("Fullname of Anmol: ", fullName("Anmol", "Chaware", "M.")); // return only first middle & last name
console.log("Fullname of Suhas: ", fullName("Suhas", "Kawale")); // return only first & last name

// 5. rest operator: use to define rest parameter that collects all parameters as a array element.
var stdList = (...std) => std;
console.log("Student List: ", stdList("Anmol", "Abhi", "Rupesh", "Manohar"));

// 6. spread operator: the spread operator split the array elements & properties of object.
var employee = { name: 'Anmol Chaware', post: 'Angular Developer' };
var empDetail = { ...employee, company: 'Neosoft Technology' }; // split properties of employee obj using spread operator
console.log("Employee Details: ", empDetail); // { name: 'Anmol Chaware', post: 'Angular Developer', company: 'Neosoft Technology' }
var arr1 = [1, 2, 3] // 1,2,3
var arr2 = [...arr1, 4, 5] // 1,2,3,4,5

// 7. template literal: they provide an easy way to interpolate variables and expressions in strings
console.log(`${employee.name} is a ${employee.post}`);

// 8. destructuring: extract the properties form object or elements from aray.
var { name } = employee;
console.log("Employee Name:", name) // Anmol Chaware

var colors = ["Pink", "Yellow", "Blue"];
var [color1, , color3] = colors; // destructuring
console.log(color3); // blue

// 9. Array.find: invoke a function for each element to test condition & return first occurance.  
var numbers = [45, 4, 9, 4, 16, 25];
var numOver7 = numbers.find(num => num > 7);
console.log(numOver7); // 45

// 10. Array.findIndex: invoke a function for each element to test condition & return index of first occurance.  
var indexOver7 = numbers.findIndex(num => num > 7);
console.log(indexOver7); // 0

// 11. class:
class Car {
    constructor(brand) {
        this.carname = brand;
    }
}
var mycar = new Car("Ford");

// 12. exponentiation: it produces the same result as Math.power(5,2)
var x = 5;
var z = x ** 2; // 25
// note: z will return the square of 5.