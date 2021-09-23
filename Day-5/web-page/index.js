btn.addEventListener("click",()=>{
    return console.log("hi")
})
fetch("./api.json").then((response)=>{
    return response.json();
}).then((data)=>{
    let product =document.getElementById("hello")
    for(let i=0;i<data.length;i++){
        product.innerHTML=`
    <div class="product-container>
    ${data.map((item,index) => {
    return` 
    <img class="product_image" src=${(item+1).product_image}>
    <div class="info">
    <h2 class='name'> ${data[index+1].name}</h2>
    <p class="desc"> ${item.desc} </p>
    <div class="price">Rs.${item.price}</div>
    <a class="btn">Add to cart </a>`}).join('')}
    </div>`;}
}).catch((error)=>{
    return console.log(error)
})


