//Objects 
let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  }
 // delete user.age;
console.log(user["likes birds"])
console.log(user)

console.log("John" in user);

//loop 
for (let key in user){
    //console.log(key);
    console.log(user[key]);
}


let fruit =  "apple";

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
}
console.log(bag);

//Task 
let user2 = {};
user2.name = "John";
user2.surname = "Smith";
user2.name = "Pete";
delete user2.name;
//copy reference
let user3 = { name: 'John' };

let admin = user3;

admin.name = 'Pete'; // it copies the reference and changes original name too 

console.log(admin.name);
let clone = Object.assign({}, user2); //it will clone the class
//this operator
function calculator(a,b){
//var Obj={}
//Obj.sum=a+b;
//Obj.mul =a*b;
//return Obj;
this.sum=a+b;
this.mul =a*b;
}
//console.log(calculator(7,8))
var x = new calculator(8,9)
console.log(x)
let calculator2 =(a,b) =>{
  
  calculator2.sum=a+b;
  calculator2.mul =a*b;
  
}
console.log(calculator2(9,9))
/*
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a =  0;
    this.b =  0;
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
*/
//optional chaining works like a ternary operator whn accessing objects
const person={
  name:"Nipun",
  age:18,
  vehicle:{
    year:1998
  }
}

const vehichleYear1 = person.vehicle?person.vehicle.year:undefined ;//undefined 
//const vehichleYear2 = person.vehicle?.year //1992 ;
//console.log(vehichleYear2)

//Symbols  - symbols are used for unique identifiers 
const id1 =Symbol();
const id2 =Symbol();
console.log(id1==id2) //returns false
// symbols are used for hidden properties
const k1 = Symbol('k1');
const k2 = Symbol('k2');

myObj = {};
myObj[k1] = "Nipun";
myObj[k2] = "Bathini";
myObj["name"] = "Good boy"
myObj[4] = "Good int"


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
//console.log(myObj.k2); // !! ALERT !!: cannot do this to get Nipun because it is same as myObj["k2"]


// Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key])
}