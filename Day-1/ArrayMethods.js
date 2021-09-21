/*Array operations.
importance: 5
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:
*/
let styles = ["Jazz","Blues"]
styles.push("Rock-n-Roll")
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift())
styles.unshift("Rap","Reggae")
console.log(styles)

//Array Methods
//sort

function comparator(a, b) {
    if (a > b) return 1;
  }
  let arr = [ 1, 2, 15 ];
  arr.sort(comparator);
console.log(arr);
//split and join 
let names = 'Bilbo, Gandalf, Nazgul';
let arr2 = names.split(', '); //split after first , and converts to array
console.log(arr2)
let names2=['Bilbo', 'Gandalf', 'Nazgul'];
let str3 = names2.join(','); //join converts array to string
console.log(str3)

//splice  
let arr3 = ["I", "study", "JavaScript"]; 
arr3.splice(1,2) //strips away from 1 to 2
console.log(arr3)
arr3 = ["I", "study", "JavaScript","right","now"]; 
arr3.splice(0,3,"i","LIKE","DANCING") //remove elements and insert at the same time at beginning
console.log(arr3)
arr3 = ["I", "study", "JavaScript","right","now"]; 
arr3.splice(2, 0, "complex", "language"); 
console.log(arr3);

const items = [
    {name:"Bike" , price:100},
    {name:"TV",price:200} ,
    {name:"Album",price:60},
    {name:"computer",price:800}
]
//iterate over the object 

items.forEach((item)=>{
    console.log(item)
})
//Get all items <100
const filteredItems= items.filter((item)=>{
return item.price<=100
})
console.log(filteredItems)
//Get all values


const itemNames = items.map((item)=>{
    return console.log(item.name+": "+item.price)
})


// find if there is an element
const findItem = items.find((item)=>{
    return item.name === "TV";
})
console.log(findItem)

//return if any of the item is under 100 . returns true or false
const inExpensiveItems=items.some((item)=>{
    return item.price<=10;
})
console.log(inExpensiveItems)

//return if every item is under 100 . returns true or false
const inExpensiveItems2=items.every((item)=>{
    return item.price<=1000;
})
console.log(inExpensiveItems2)
//return the sum of prices
const total=items.reduce((curr,item)=>{
   return curr+item.price;
},0)
console.log(total)
//return if element is in the array
const temp =[1,2,6]
console.log(temp.includes(6))




//excercises 

filterRange = (arr5,a,b)=>{
let arr=[];
arr5.forEach((item)=>
(item>=a && item<=b) ?arr.push(item):[])
return arr;
}
let arr5 = [5, 3, 8, 1];

let filtered = filterRange(arr5, 1, 4);

console.log( filtered ); // 3,1 (matching values)
//unique elements
function unique(arr) {
  let strings=[]
  arr.forEach((item)=>[
      strings.includes(item)?null :strings.push(item)
  ])
  return strings;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O