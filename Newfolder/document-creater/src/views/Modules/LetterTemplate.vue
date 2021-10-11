<template>
  <v-card class="d-flex">
  <v-card tile> <ContentManagerComponent/></v-card>
  <v-card tile><DocumentComponents/></v-card> 
  <v-card tile><StyleManager/></v-card>
  </v-card>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import ContentManagerComponent from '../../components/LetterComponents/ContentManagerComponent/Template.vue'
import StyleManager from '../../components/LetterComponents/StyleManager/Template.vue'
import DocumentComponents from '../../components/LetterComponents/DocumentComponents/Template.vue'
@Component({
    components:{
ContentManagerComponent,
StyleManager,
DocumentComponents
    }
})
export default class Home extends Vue {

}
</script>

<style>

</style>