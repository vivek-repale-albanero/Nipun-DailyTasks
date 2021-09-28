<template>
<div class="main">
    <div class="container">
        <div class="left">
            <img  v-bind:src="product.product_image" alt="">
        </div>
        <div class="right">
            <div class="name">{{product.name}}</div> <br>
             <div class="category">{{product.category}}</div> <br>
            <div class="price">Rs.{{product.price}}</div> <br>
            <button type="button" id="btn">Add to cart</button> <br>
            <p class="desc">{{product.desc }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:"Detail",

computed:{
      product(){
        return this.$store.getters.getProducts.find((item)=>
        item.id===parseInt(this.$route.params.id))
      }
}
}
</script>

<style scoped>
.main{
    padding: 10rem;
}
.container{
    display: flex;
}
.container .right{
    margin-left: 15rem;
}
.container .left{
    background-color: grey;
    align-items: left;
    justify-content: left;
}
.right{
    padding: 0.3rem;
    padding-left: 0;
    
}
.price,.cetegory{
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
</style>