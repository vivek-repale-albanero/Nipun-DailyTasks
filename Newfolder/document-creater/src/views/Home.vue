<template>
<v-card>
  <v-card
    class="mx-auto"
    max-width="250"
    height="100px"
  >
    <v-card-text>
      <div class="text--primary">
      <router-link to="/Letter" >Create Letter</router-link>  <br>
      </div>
    </v-card-text>
   
  </v-card>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Home extends Vue {

}

  
</script>
