<template>
  <v-card 
  width="500px"
  class="p-2">
    
   <v-card>
       <v-text>To</v-text>
   </v-card>
   <v-card>
       <v-text>Subject</v-text>
   </v-card>
   <v-card>
       <v-text>Content</v-text>
   </v-card>
   <v-card>
       <v-text :style="{color,size}">From</v-text>
   </v-card>
  </v-card>
</template>
<script>
import Vue from 'vue'
import Component from "vue-class-component";
@Component({
    props:{
        selectedSize
    }
})
export default class extends Vue {
    // data = vmx.user;
   size=this.selectedSize
}
</script>

<style>

</style>