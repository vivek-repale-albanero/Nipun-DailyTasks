/*
propert descriptor returns property flags of an object
property flags: 
Value 
writable - read only
configurable - allwoing to configure all the properties
enumerable - allowing to loop
*/

let data = {
name:"Nipun"
}
 let descriptor = Object.getOwnPropertyDescriptors(data);
 console.log(descriptor);
Object.defineProperty(data,'age',{
    value:22,
    // writable:false,
    // enumerable:false,
    writable:true,
    enumerable:true,
    configurable:true
})
//enumerable
for(let prop in data){
    console.log(prop);
}
//writable
data.age=40
console.log(data)
//configurable: false prevents changes of property flags and its deletion, while allowing to change its value.