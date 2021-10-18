// const person:object ={
//     name : "Nipun",
//     age:09
// }
//person.nickNAme
// person.name  (error)
// const person:{
//     name:string;
//     age:number
// }= {
//     name : "Nipun",
//     age:09
// }
//enum -human readable labels 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person 
// :{
//     name:string ,
//     age:number,
//     hobbies:string[],
//     role:[number,string] //making a tuple
// }
= {
    name: "Nipun",
    age: 09,
    hobbies: ["swimming", "reading"],
    //role:[12,"author"], //going to make into a tuple
    role: Role.ADMIN
};
//let activiies:string[]
// activiies=["Sports",1] error
//tuple in js , is an array with fixed length and type
//person.role.push(19) //it works fine for a tuple also
// person.role[2]="hello" // it does not work ,bcz it can't be changed
//person.role = [0,"n"] //accepted 
// person.role=[1,'1',p] //not accepted
if (person.role === Role.ADMIN)
    console.log("is admin");
var input1;
//functions 
function add(n1, n2) {
    return n1 + n2;
}
//return type :void
function printResult(num) {
    console.log('Result' + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(6, 7));
//callback function :
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(9, 9, function (result) {
    console.log(result);
});
//unknown 
var userInput;
var userName;
userInput = 5;
userInput = 'Hi!';
//userName=userInput //error 
//Never - It returns nothing 
// function generateError(message:string,code:number){
//     throw {message:message,errorCode:code}
// }
// generateError('An error occured!',500);
var users = [];
users.push({ Name: "hi" });
console.log(users);
