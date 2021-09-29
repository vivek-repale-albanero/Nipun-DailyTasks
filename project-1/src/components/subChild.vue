<template>
  <div  class="child">
      <div v-if="show"> 
      <h1>Hello from subChild</h1>
      </div>
  </div>
</template>

<script>
export default {
props:{
    show:Boolean
}
}
</script>

<style>
.child{
    position:relative,
    
}
</style>