<template>
<div class="container"> 
  <div class="row">
    <div class="col-8">
      <DocumentManager
        :backgroundSelected="backgroundSelected"
        :colorSelected="colorSelected"
        :sizeSelected="sizeSelected"
        :styleSelected="styleSelected"
        :BorderRadiusSelected="BorderRadiusSelected"
        :italicCheckboxSelected="italicCheckboxSelected"
        :boldCheckboxSelected2="boldCheckboxSelected2"
        :italicCheckboxSelected2="italicCheckboxSelected2"
      />
    </div>
    <div class="col-4">
      <div class="container border">
        <br />
        <h5>Style Manager</h5>
        <br />
        <div class="accordion" id="accordian1">
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading1">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                Document
              </button>
            </h2>
            <div
              id="collapse1"
              class="accordion-collapse collapse show"
              aria-labelledby="heading1"
              data-bs-parent="#accordion1"
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
              </div>
            </div>
          </div>
          <br />
          <!--From -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading2">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                From
              </button>
            </h2>
            <div
              id="collapse2"
              class="accordion-collapse collapse"
              aria-labelledby="heading2"
              data-bs-parent="#accordian1"
            >
              <div class="accordion-body">
                <p class="text">Text size</p>
                <select v-model="sizeSelected.Fromsize" class="form-select">
                  <option v-for="(size, i) in sizes" :key="i">
                    {{ size }}
                  </option>
                </select>
                <br />
                <p class="text">Text Style</p>
                <select v-model="styleSelected.Fromstyle" class="form-select">
                  <option v-for="(style, i) in styles" :key="i">
                    {{ style }}
                  </option>
                </select>
                <br />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="italicCheckboxSelected.FromitalicCheckbox"
                    @click="
                      italicCheckboxSelected.FromitalicCheckbox === false
                        ? (italicCheckboxSelected2.FromitalicCheckbox =
                            'italic')
                        : (italicCheckboxSelected2.FromitalicCheckbox =
                            'normal')
                    "
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Italic Checkbox
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="boldCheckboxSelected.FromboldCheckbox"
                    @click="
                      boldCheckboxSelected.FromboldCheckbox === false
                        ? (boldCheckboxSelected2.FromboldCheckbox = 'bold')
                        : (boldCheckboxSelected2.FromboldCheckbox = 'normal')
                    "
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Bold Checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>
          <!--To-->
          <br />

          <div class="accordion-item">
            <h2 class="accordion-header" id="heading3">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                To
              </button>
            </h2>
            <div
              id="collapse3"
              class="accordion-collapse collapse"
              aria-labelledby="heading3"
              data-bs-parent="#accordian1"
            >
              <div class="accordion-body">
                <p class="text">Text size</p>
                <select v-model="sizeSelected.Tosize" class="form-select">
                  <option class="" v-for="(size, i) in sizes" :key="i">
                    {{ size }}
                  </option>
                </select>
                <br />
                <p class="text">Text Style</p>
                <select v-model="styleSelected.Tostyle" class="form-select">
                  <option v-for="(style, i) in styles" :key="i">
                    {{ style }}
                  </option>
                </select>
                <br />

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="italicCheckboxSelected.ToitalicCheckbox"
                    @click="
                      italicCheckboxSelected.ToitalicCheckbox === false
                        ? (italicCheckboxSelected2.ToitalicCheckbox =
                            'italic')
                        : (italicCheckboxSelected2.ToitalicCheckbox =
                            'normal')
                    "
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Italic Checkbox
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="boldCheckboxSelected.ToboldCheckbox"
                    @click="
                      this.boldCheckboxSelected.ToboldCheckbox === false
                        ? (this.boldCheckboxSelected2.ToboldCheckbox = 'bold')
                        : (this.boldCheckboxSelected2.ToboldCheckbox = 'normal')
                    "
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Bold Checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>

          <br />
          <!--Subject-->

          <div class="accordion-item">
            <h2 class="accordion-header" id="heading4">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                Subject
              </button>
            </h2>
            <div
              id="collapse4"
              class="accordion-collapse collapse"
              aria-labelledby="heading4"
              data-bs-parent="#accordian1"
            >
              <div class="accordion-body">
                <p class="text">Text size</p>
                <select v-model="sizeSelected.Subjectsize" class="form-select">
                  <option class="" v-for="(size, i) in sizes" :key="i">
                    {{ size }}
                  </option>
                </select>
                <br />
                <p class="text">Text Style</p>
                <select
                  v-model="styleSelected.Subjectstyle"
                  class="form-select"
                >
                  <option v-for="(style, i) in styles" :key="i">
                    {{ style }}
                  </option>
                </select>
                <br />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    v-model="italicCheckboxSelected.SubjectitalicCheckbox"
                    @click="
                      italicCheckboxSelected.SubjectitalicCheckbox === false
                        ? (italicCheckboxSelected2.SubjectitalicCheckbox =
                            'italic')
                        : (italicCheckboxSelected2.SubjectitalicCheckbox =
                            'normal')
                    "
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Italic Checkbox
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="boldCheckboxSelected.SubjectboldCheckbox"
                    @click="
                      this.boldCheckboxSelected.SubjectboldCheckbox === false
                        ? (this.boldCheckboxSelected2.SubjectboldCheckbox =
                            'bold')
                        : (this.boldCheckboxSelected2.SubjectboldCheckbox =
                            'normal')
                    "
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Bold Checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>

          <br />
          <!--content-->
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading5">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
              >
                Content
              </button>
            </h2>
            <div
              id="collapse5"
              class="accordion-collapse collapse"
              aria-labelledby="heading5"
              data-bs-parent="#accordian1"
            >
              <div class="accordion-body">
                <p class="text">Text size</p>
                <select v-model="sizeSelected.Contentsize" class="form-select">
                  <option class="" v-for="(size, i) in sizes" :key="i">
                    {{ size }}
                  </option>
                </select>
                <br />
                <p class="text">Text Style</p>
                <select
                  v-model="styleSelected.Contentstyle"
                  class="form-select"
                >
                  <option v-for="(style, i) in styles" :key="i">
                    {{ style }}
                  </option>
                </select>
                <br />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    v-model="italicCheckboxSelected.ContentitalicCheckbox"
                     @click="
                      italicCheckboxSelected.ContentitalicCheckbox === false
                        ? (italicCheckboxSelected2.ContentitalicCheckbox =
                            'italic')
                        : (italicCheckboxSelected2.ContentitalicCheckbox =
                            'normal')
                    "
                    
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Italic Checkbox
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="boldCheckboxSelected.ContentboldCheckbox"
                    @click="
                      this.boldCheckboxSelected.ContentboldCheckbox === false
                        ? (this.boldCheckboxSelected2.ContentboldCheckbox =
                            'bold')
                        : (this.boldCheckboxSelected2.ContentboldCheckbox =
                            'normal')
                    "
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Bold Checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
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
  data = vxm.user;
  colorSelected = "";
  BorderRadiusSelected = 0;
  backgroundSelected = "";
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
  sizeSelected = {
    Fromsize: "",
    Tosize: "",
    Subjectsize: "",
    Contentsize: "",
  };
  styleSelected = {
    Fromstyle: "",
    Tostyle: "",
    Subjectstyle: "",
    Contentstyle: "",
  };
  boldCheckboxSelected = {
    FromboldCheckbox: false,
    ToboldCheckbox: false,
    SubjectboldCheckbox: false,
    ContentboldCheckbox: false,
  };
  boldCheckboxSelected2 = {
    FromboldCheckbox: false,
    ToboldCheckbox: false,
    SubjectboldCheckbox: false,
    ContentboldCheckbox: false,
  };

  italicCheckboxSelected = {
    FromitalicCheckbox: false,
    ToitalicCheckbox: false,
    SubjectitalicCheckbox: false,
    ContentitalicCheckbox: false,
  };
  italicCheckboxSelected2 = {
    FromitalicCheckbox: false,
    ToitalicCheckbox: false,
    SubjectitalicCheckbox: false,
    ContentitalicCheckbox: false,
  };
}
</script>
<style>
.container{
   overflow: auto;
   max-height: 100%;
}
</style>