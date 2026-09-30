console.log("HOISTING:");


console.log(x);
var x=5;   //var x = undefined; (internally)

console.log(y);
let y = 5;  //ReferenceError: Cannot access 'y' before initialization

console.log(z);
const z = 10;  //ReferenceError: Cannot access 'z' before initialization