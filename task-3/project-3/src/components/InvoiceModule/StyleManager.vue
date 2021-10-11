<template>
<div class="container"> 
  <div class="row">
    <div class="col-7">
      <DocumentManager
        :backgroundSelected="backgroundSelected"
        :colorSelected="colorSelected"
        :sizeSelected="sizeSelected"
        :styleSelected="styleSelected"
        :BorderRadiusSelected="BorderRadiusSelected"
        :italicCheckboxSelected="italicCheckboxSelected"
        :boldCheckboxSelected2="boldCheckboxSelected2"
        :italicCheckboxSelected2="italicCheckboxSelected2"
        :textFont="textFont"
      />
    </div>
    <div class="col-5">
      <div class="container border">
        <br />
        <h5>Style Manager</h5>
        <br />
        <div class="accordion" id="accordian">
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse"
                aria-expanded="true"
                aria-controls="collapse"
              >
                Document
              </button>
            </h2>
            <div
              id="collapse"
              class="accordion-collapse collapse show"
              aria-labelledby="heading"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <p class="text">Text color</p>
                <select
                  class="form-select"
                  name="color"
                  v-model="colorSelected"
                >
                  <option v-for="(color, i) in Colors" :key="i">
                    {{ color }}
                  </option>
                </select>
                <br />
                <p class="text">Background color</p>
                <select
                  name="color"
                  class="form-select"
                  v-model="backgroundSelected"
                >
                  <option v-for="(color, i) in Colors" :key="i">
                    {{ color }}
                  </option>
                </select>
                <br />
                <p class="text">Border Radius</p>
                <select
                  name="color"
                  class="form-select"
                  v-model="BorderRadiusSelected"
                >
                  <option v-for="(size, i) in BorderRadius" :key="i">
                    {{ size }}
                  </option>
                </select>
                <p class="text">text Font</p>
              
                <select v-model="textFont" class="form-select">
                  <option v-for="(style, i) in styles" :key="i">
                    {{ style }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      
    </div>
  </div>
  </div>
</template>
<script>
import { Options, Vue } from "vue-class-component";
import { vxm } from "../../store/store.vuex";
import DocumentManager from "./DocumentManager.vue";
@Options({
  components: {
    DocumentManager,
  },
})
export default class App extends Vue {
  data = vxm.invoicestore;
  colorSelected = "";
  BorderRadiusSelected = 0;
  backgroundSelected = "";
  textFont=""
  sizes = ["10", "12", "14", "16", "20", "22"];
  styles = [
    "Cambria",
    "Garamond",
    "Georgia",
    "Consolas",
    "Brushstroke",
    "Andalus",
    "Arial",
    "Nyala",
  ];
  Colors = ["red", "orange", "black", "yellow", "green", "violet"];
  BorderRadius = ["2", "6", "8", "10"];
  
}
</script>
<style>

</style>