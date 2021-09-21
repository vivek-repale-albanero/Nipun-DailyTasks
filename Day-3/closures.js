/* 
lexical scoping: having access to outer function variables .
A closure is a function having access to the parent scope, 
even after the parent function has closed.
*/
//Example-1
let count=0;

const init=()=>{
    let value=1;
    const child = () =>{
        console.log(++count+" " + ++value);
    }
    return child;
}
const ans=init();
console.log(ans);
ans();
ans();
//When ans is initiated it stores the refence of child func and not in action and parent is closed 
//Now again initialising ans ,it will return the result and updates the values 

//Example-2 
//ACHIEVED by IIFE :immediately invoked function expression
//Data Encapsulation is achieved here ,count has private access
const privatecounter = (() =>{
    let count=0;
    console.log("initial:"+count);
    return ()=>{count+=1;console.log(count)}
})();
privatecounter() ;
privatecounter() ;
//Tasks 
//1.The function picks up the latest value
/*
let name = "John";
function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";
sayHi();
*/
//When making it  private i.e., in function . Then it can't change.
function sayHi() {
    let name = "John";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "Pete";

  let work = sayHi();
  
  // call it
  work();
//3. Each invocation has its own lexical scope
  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // ? 0
  console.log( counter2() );//1

  //operator overloading
  function sum(a) {

    return function(b) {
      return a + b; // takes "a" from the outer lexical environment
    };
  
  }
  
  console.log( sum(1)(2) ); // 3
  console.log( sum(5)(-1) ); // 4
//sortbyname
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
// by name (Ann, John, Pete)
//users.sort((a, b) => a.name > b.name ? 1 : -1);
const byField = (fieldName)=>{
    return (a,b)=>a[fieldName]>b[fieldName]?1:-1;
}
users.sort(byField('name'));
console.log(users)