
/*
fetch("./api.json").then((response)=>{
    return response.json();
}).then((data)=>{
    let html = '';
    for(let i=0;i<data.length;i++){

       html=`
      
       ${data.map((item,index) => {
           return` 
           <div class="container">
           <div class="row">
           <div class="col">
           <div class="product-container">
           <img class="product_image" src="${item.product_image}" />
           <div class="info">
             <h2 class="name">${item.name}</h2>
             <p class="desc">${item.desc}</p>
             <div class="price">${item.price}</div>
             <button type="button" id="btn">Add to cart</button>
           </div>
           </div>
           </div>
           </div>
           </div>`}).join('')}
    <br> <br><br>` ;}
    hello.innerHTML= html
}).catch((error)=>{
    return console.log(error)
})
*/
let arr =[
    {
        "id":1,
        "product_image":"https://www.seekpng.com/png/full/415-4158786_park-vi-game-jersey-black-color-t-shirt.png",

        "name":"Mens Short Sleeve Crew Neck-",
        "desc":"White",
         "price":450
    },
    {
        "id":2,
        "product_image":"2-t-shirt-png-image.png",
        "name":"Womens Short Sleeve Crew Neck-",
        "desc":"Black",
         "price":500
    },
    {
        "id":3,
        "product_image":" ",
        "name":"mens Short Sleeve Crew Neck-",
        "desc":"Burgendy",
         "price":450
    },
    {
        "id":4,
        "product_image":"",
        "name":"mens  Sleeve Crew Neck-",
        "desc":"Dusk Blue",
         "price":450
    },
    {
        "id":5,
        "product_image":"",
        "name":"Mens Short Sleeve Crew Neck- ",
        "desc":"navy-blue",
         "price":450
    },
    {
        "id":6,
        "product_image":"",
        "name":"Mens Short Sleeve Crew Neck- ",
        "desc":"green",
        "price":450
    },
    {
        "id":7,
        "product_image":"",
        "name":"Womens Short Sleeve V Neck-",
        "desc":"copper",
         "price":450
    },
    {
        "id":8,
        "product_image":"",
        "name":"Short Sleeve Crew Neck",
        "desc":"Mens",
         "price":450
    },
    {
        "id":9,
        "product_image":"",
        "name":"Short Sleeve Crew Neck",
        "desc":"Mens",
         "price":450
    },
    {
        "id":10,
        "product_image":"",
        "name":"Short Sleeve Crew Neck",
        "desc":"Mens",
         "price":450
    },
    {
        "id":11,
        "product_image":"",
        "name":"Short Sleeve Crew Neck",
        "desc":"Mens",
         "price":450
    }
]
const app = Vue.createApp({
    data(){
        return{
                arr
        }
    },
})

app.mount("#app")





function select(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("default").click();