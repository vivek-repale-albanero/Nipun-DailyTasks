<template>
  <v-card class="d-flex">
  <v-card tile> <ContentManagerComponent/></v-card>
  <v-card tile></v-card> 
  <v-card tile></v-card>
  </v-card>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import ContentManagerComponent from '../../components/LetterComponents/ContentManagerComponent/Template.vue'
@Component({
    components:{
ContentManagerComponent
    }
})
export default class Home extends Vue {

}
</script>

<style>

</style>