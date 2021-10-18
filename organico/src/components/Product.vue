<template>
    <div>
      <div>
        
      </div>
    <div class="product-container">
        <div class="info">
            <img  v-bind:src="product.product_image" alt="">
            <h2 class="name">{{product.name}}</h2>
             <p class="desc">{{product.category}}</p>
            <div class="price">Rs.{{product.price}}</div>
            <button type="button" id="btn">Add to cart</button>
        </div>
        <router-link :to="{name:'Detail',params:{id:product.id}}">View</router-link>
    </div>
  </div>
</template>

<script>
export default {
props:["product"],
}
</script>

<style scoped>
*{
    padding:0 ;
    margin: 0;  
}
*:before,
*:after{
    box-sizing: border-box;
}
 .product-container{
    
    width: 18.5rem;
    background: white;
    transform: translate(-50%,-50%);
    border: 2px solid whitesmoke;
    box-shadow: 5px 5px 5px 5px whitesmoke ;
    border-radius: 1rem;    
}
.product_image{
    height: 18.375;
    width: 16.563rem;
    padding: 0.5rem;
    border-radius: 1rem;
}
.info{
    padding: 0.3rem;
    padding-left: 0;
    
}
.price,.desc{
    text-align: center;
}
.name{
    font-size: 1rem;
    padding: 0.2rem;
    color: green;
    text-align: center;
}
#btn{
    display: block;
    margin-top: 0.5rem;
    padding: 0.5rem;
    width: 90%;
    background-color: black;
    text-align: center;
    text-decoration: none;
    border: 1px;
    transform: 3s;
    color: white;
    cursor: pointer;
    border-radius: 1.5rem;
    margin-left: 0.5rem;
   
}
.btn-nav,#btn:hover{
    background-color: green;
}
img{
    
    height: 300px;
    width: auto;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    padding-bottom: 1rem;
}

</style>