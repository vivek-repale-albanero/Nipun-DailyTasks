<template>
<div>
  <div v-for="(category,index) in categories" :key="index">
    
    <button @click="getFilterProducts(category)" >{{category}}</button>
  </div>
  <div class="container" >
    <Product  v-for="product in getProducts" :key="product.id" :product="product"/>
  </div>
</div>
</template>

<script>
import Product from './Product.vue'
import {mapState} from "vuex"
export default {
    name:"Products",
    data(){
      return{
        filterProduct:"",
        categories:["T-shirt","Trouser"]
      }
    },
    components:{
        Product
    },
    computed:{
      ...mapState({
        products:"products"
      }),
      getCategories(){
      return this.$store.getters.getCategories
      },
      getProducts(){
        return this.$store.getters.getProducts
      }
    },
    methods: {
      getFilterProducts(category){
        console.log(category)
        this.$store.dispatch("filterProduct",category)
        this.categories=["T-shirt","Trouser"]
       
      }
    },
        
}
</script>

<style scoped>
.container {
  display: grid;
  margin: 24rem;
  margin-right: 10rem;
  grid-template-columns: repeat(3, minmax(300px, 500px));
  grid-gap: 50px;
  justify-content: space-around;
}
</style>