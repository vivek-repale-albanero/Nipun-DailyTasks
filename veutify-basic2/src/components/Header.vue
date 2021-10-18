<template>
  <v-card color="black"  height="5px" tile>
    <v-toolbar dense color="black" class="white--text" flat>
<div class="hidden-md-and-up">       
<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text "></v-app-bar-nav-icon>
</div> 
        <v-toolbar-title class="red--text darken-1 ml-3">Netflix</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-md-and-down"> 
        <v-btn text class="white--text">Movies</v-btn>
        <v-btn text class="white--text ">Tv-shows</v-btn>
        <v-btn icon class="purple--text ">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn text class="white--text">Account</v-btn>
        </div>
        </v-toolbar>
         
    <v-navigation-drawer
      v-model="drawer"
      app
      class="black"
      style=""
    >
      <v-list >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title><v-btn text class="white--text">Movies</v-btn></v-list-item-title>
        <v-list-item-title><v-btn text class="white--text">Tv-shows</v-btn></v-list-item-title>
        <v-list-item-title><v-btn text class="white--text">Account</v-btn></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
 

 <Hero/>
     
  </v-card>

  
</template>

<script>
import Hero from "./Hero.vue" 
export default{
    components:{
        Hero
    },
    data: () =>({
        
            drawer:false
        
    })
}
</script>

<style>
</style>