//Import module from different file (calc.js)
var calc = require("./calc.js")


result0 = calc.sub(9,3)
console.log("The subtraction is : " + result0)

//Exported in calc at the time of intilization

result1 = calc.multiplication(3,3)
console.log("The multiplication is : " + result1)

//Existing module

function add(a,b){
    return a+b
 }
 
 result2 = add(4,5)
 console.log("The addition is : " + result2)
 