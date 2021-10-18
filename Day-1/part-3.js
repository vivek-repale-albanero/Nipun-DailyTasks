//Data Types
console.log(parseInt('100px'));
let sum = 0.1 + 0.2;
console.log( sum.toFixed(2) );
//using backttics 
let guestList = `Guests:
  John
  Pete
  Mary
`;
console.log( guestList);
//Strings can't be changed
//String functions in js
//console.log();
let str = 'Widget with id';
console.log(str.charAt(9));
console.log( str.indexOf("id"));
console.log(str.includes("Widget") );
console.log(str.slice(0, 8));

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.length);
console.log(fruits.push("pine"));
console.log(fruits.pop());
console.log(fruits.shift());
delete fruits[0]
//Splice can be used to remove elmenets, add  at an index
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
arr.concat([3, 4])
//iterables 
function myIterable() {
    let counter = 0;
    return {
        next:function(){
            if (counter < 5) {
            counter++;
            return { done: false, value: counter };
            } else {
            return { done: true, value: undefined };
          }
    }
}
}
myIterable()
//Map and set 
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  recipeMap.set(1, 'num1');   
console.log(recipeMap.keys())
recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
  });

//Weakmap and weakset 
//Destructuring

let arr2 = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr2;
console.log(firstName)
// ... is rest operator , the rest of the array is assigned as an array to that element
let [name1, name2, ...name3] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name3)

let laptop = {
    name: "hp",
    ram: 8,
    rom: "1TB"
  };
  
  let {name, ram, rom} = laptop;

  //Json 
  let student = {
    name: 'Nipun',
    age: 22,
    isAdmin: false,
    courses: ['html', 'css', 'js']
  };
  
  let json = JSON.stringify(student);
  console.log(json)
  //Linked List 
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
//recursion 
function fib(n) {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2); // Fn-1 + Fn-2
  }
console.log(fib(10)) 
//NFE  :Named Function Expression 
let sayHi = function func(who) {
    alert(`Hello, ${who}`);
  };
  
  sayHi("John"); 