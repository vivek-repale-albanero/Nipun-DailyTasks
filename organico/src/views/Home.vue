<template>
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    -->
    <ProductsVue/>
  </div>
</template>

<script>
import ProductsVue from '../components/Products.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    ProductsVue
  }
}
</script>
