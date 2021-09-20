/*
1. Node.js Basics
Node is a runtime environment of javascript .i.e.; it lets js code to interact and execute code directly with computer.
Differences between js and node.js
*/

/* javascript Fundamenets-1 */
console.log("hello")
let x=1;
console.log(-x) //unary operator

console.log("hello" + "world") //string concat

console.log("1" + 2) //acts as a string
console.log( (2 - "1") + " "+(6/"2")) //converts into number
//let a = (1 + 2, 3 + 4);
//console.log(a)
let a = 2;
let y = 1 + (a *= 2); //can be assigned during an operation
console.log(y)
//Typical cases of Type conversion
console.log("4px" - 2 )
//== reular equality check , === stric equal check
//conditional statements

//ternary operator
//console.log( age> 18 ? "yes" : "no") 

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); 
//loops
for (let i = 0; i < 3; i++) {
    if(i==2)
    continue
    console.log(i); // 0, 1, 2
    //break
  }

//switch case
  let ab = 2 + 2;

switch (ab) {
  case 3:
    console.log( 'Too small' );
  case 4:
    console.log( 'Exactly!' );
   // break;
  case 5:
    console.log( 'Too big' );
  default:
    console.log( "I don't know such values" );
}
//functions
let userName = 'John';
/*
function showMessage(userName) {
  let message = 'Hello, ' + userName;
  console.log(message);
}
showMessage("Nipun") */
let func = (userName) => {
    let message = 'Hello, ' + userName;
    console.log(message);
}
func("Nipun")
let age2 = 19

let welcome = (age2 < 18) ?
  () => console.log('Hello') :
  () => console.log("Greetings!");

welcome();
//Task for writing arrow function 
