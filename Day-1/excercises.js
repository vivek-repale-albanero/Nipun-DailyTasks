/* Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/
const user ={
    name:"John",
    surname:"Smith"
}
user.name="Pete"
console.log(user)
delete user.name 
console.log(user)
//Sum of the object properties 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let ans1=0;
for(let key in salaries){
    ans1+=salaries[key];
}
console.log(ans1)

// before the call
//passing objects to another function and manipulating values
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
function multiplyNumeric(object){
    for(key in object){
        if(typeof object[key] == "number")
        object[key]*=2;
    }
}
 multiplyNumeric(menu);
  console.log(menu)



 
  /* Create a calculator
importance: 5
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/
let calculator = {
    // ... your code ...
    read(){
        this.a=6;
        this.b=7
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
  };
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );