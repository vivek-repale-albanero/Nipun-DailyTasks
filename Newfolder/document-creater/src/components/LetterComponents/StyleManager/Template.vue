<template>
  <v-card>

    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>Document</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col cols="12">
            <v-select :items="Colors" label="Background color" v-model="BackgroundColor"></v-select>
          </v-col>
          <v-col cols="12">
            <v-select :items="BorderRadius" label="BorderRadius" v-model="BorderRadius"></v-select>
          </v-col>
          <v-col cols="12">
            <v-select :items="Colors" label="text color" v-model="FontColor"></v-select>
          </v-col>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>From</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col cols="12">
            <v-select :items="Size" label="Font Size" v-model="selectedSize"></v-select>
          </v-col>
          <v-col cols="12">
            <v-select :items="Fonts" label="Font " v-model="Font"></v-select>
          </v-col>
          <v-checkbox v-model="BoldCheckbox" label="BoldCheckbox" > </v-checkbox>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>To</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col cols="12">
            <v-select :items="Size" label="Font Size" v-model="selectedSize"></v-select>
          </v-col>
          <v-col cols="12">
            <v-select :items="Fonts" label="Font " v-model="Font"></v-select>
          </v-col>
          <v-checkbox v-model="BoldCheckbox" label="BoldCheckbox" > </v-checkbox>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Subject</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col cols="12">
            <v-select :items="Size" label="Font Size" v-model="selectedSize"></v-select>
          </v-col>
          <v-col cols="12">
            <v-select :items="Fonts" label="Font " v-model="Font"></v-select>
          </v-col>
          <v-checkbox v-model="BoldCheckbox" label="BoldCheckbox" > </v-checkbox>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Content</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col cols="12">
            <v-select :items="Size" label="Font Size" v-model="selectedSize"></v-select>
          </v-col>
          <v-col cols="12">
            <v-select :items="Fonts" label="Font " v-model="Font"></v-select>
          </v-col>
          <v-checkbox v-model="BoldCheckbox" label="BoldCheckbox" > </v-checkbox>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class=".d-lg-none .d-xl-flex">
   <Document :selectedSize="selectedSize"/>
    </div>
  </v-card>
</template>

<script>
// import Vue from 'vue'
// import Component from "vue-class-component";
// @Component
// export default class extends Vue {
// Fonts= ['Ariel', 'Fizz', 'Buzz']
// Colors=['Red','Orange','Black','Yellow','Green','Violet']
// Size=['10','12','14','16','18','20','24']
// BorderRadius=['2','6','8','10']
// BoldCheckbox=false
// }
import Document from '../DocumentComponents/Template'
export default {
    components:{
        Document
    },
  data: () => ({
    Fonts: ["Bold","Regular","Italic"],
    Colors: ["Red", "Orange", "Black", "Yellow", "Green", "Violet"],
    Size: ["10", "12", "14", "16", "18", "20", "24"],
    // Colors: ["Red", "Orange", "Black", "Yellow", "Green", "Violet"],
    BorderRadius: ["2", "6", "8", "10"],
    BoldCheckbox: false,
    Font:"",
    FontColor:"",
    BackgroundColor:"",
    selectedSize:"",
    selectedBorderRadius:"",
    // selectedBoldCheckbox:""

  }),
};
</script>

<style>
</style>