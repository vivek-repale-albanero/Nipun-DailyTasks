
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



const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
