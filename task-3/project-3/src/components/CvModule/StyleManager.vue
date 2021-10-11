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
            <!--PersonalDetails -->
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
                  PersonalDetails
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
                  <select
                    v-model="sizeSelected.PersonalDetailssize"
                    class="form-select"
                  >
                    <option v-for="(size, i) in sizes" :key="i">
                      {{ size }}
                    </option>
                  </select>
                  <br />
                  <p class="text">Text Style</p>
                  <select
                    v-model="styleSelected.PersonalDetailsstyle"
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
                      value=""
                      id="flexCheckDefault"
                      v-model="
                        italicCheckboxSelected.PersonalDetailsitalicCheckbox
                      "
                      @click="
                        italicCheckboxSelected.PersonalDetailsitalicCheckbox ===
                        false
                          ? (italicCheckboxSelected2.PersonalDetailsitalicCheckbox =
                              'italic')
                          : (italicCheckboxSelected2.PersonalDetailsitalicCheckbox =
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
                      v-model="boldCheckboxSelected.PersonalDetailsboldCheckbox"
                      @click="
                        boldCheckboxSelected.PersonalDetailsboldCheckbox ===
                        false
                          ? (boldCheckboxSelected2.PersonalDetailsboldCheckbox =
                              'bold')
                          : (boldCheckboxSelected2.PersonalDetailsboldCheckbox =
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
                  <select
                    v-model="sizeSelected.Educationsize"
                    class="form-select"
                  >
                    <option class="" v-for="(size, i) in sizes" :key="i">
                      {{ size }}
                    </option>
                  </select>
                  <br />
                  <p class="text">Text Style</p>
                  <select
                    v-model="styleSelected.Educationstyle"
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
                      v-model="boldCheckboxSelected.EducationboldCheckbox"
                      @click="
                        this.boldCheckboxSelected.EducationboldCheckbox ===
                        false
                          ? (this.boldCheckboxSelected2.EducationboldCheckbox =
                              'bold')
                          : (this.boldCheckboxSelected2.EducationboldCheckbox =
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
            <!--WorkExperience-->

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
                  WorkExperience
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
                  <select
                    v-model="sizeSelected.WorkExperiencesize"
                    class="form-select"
                  >
                    <option class="" v-for="(size, i) in sizes" :key="i">
                      {{ size }}
                    </option>
                  </select>
                  <br />
                  <p class="text">Text Style</p>
                  <select
                    v-model="styleSelected.WorkExperiencestyle"
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
                      v-model="
                        italicCheckboxSelected.WorkExperienceitalicCheckbox
                      "
                      @click="
                        italicCheckboxSelected.WorkExperienceitalicCheckbox ===
                        false
                          ? (italicCheckboxSelected2.WorkExperienceitalicCheckbox =
                              'italic')
                          : (italicCheckboxSelected2.WorkExperienceitalicCheckbox =
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
                      v-model="boldCheckboxSelected.WorkExperienceboldCheckbox"
                      @click="
                        this.boldCheckboxSelected.WorkExperienceboldCheckbox ===
                        false
                          ? (this.boldCheckboxSelected2.WorkExperienceboldCheckbox =
                              'bold')
                          : (this.boldCheckboxSelected2.WorkExperienceboldCheckbox =
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
                  Skills
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
                  <select v-model="sizeSelected.Skillssize" class="form-select">
                    <option class="" v-for="(size, i) in sizes" :key="i">
                      {{ size }}
                    </option>
                  </select>
                  <br />
                  <p class="text">Text Style</p>
                  <select
                    v-model="styleSelected.Skillsstyle"
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
                      v-model="italicCheckboxSelected.SkillsitalicCheckbox"
                      @click="
                        italicCheckboxSelected.SkillsitalicCheckbox === false
                          ? (italicCheckboxSelected2.SkillsitalicCheckbox =
                              'italic')
                          : (italicCheckboxSelected2.SkillsitalicCheckbox =
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
                      v-model="boldCheckboxSelected.SkillsboldCheckbox"
                      @click="
                        this.boldCheckboxSelected.SkillsboldCheckbox === false
                          ? (this.boldCheckboxSelected2.SkillsboldCheckbox =
                              'bold')
                          : (this.boldCheckboxSelected2.SkillsboldCheckbox =
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
          <!--Achievements -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading6">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapse6"
              >
                Achievments
              </button>
            </h2>
            <div
              id="collapse6"
              class="accordion-collapse collapse"
              aria-labelledby="heading6"
              data-bs-parent="#accordian1"
            >
              <div class="accordion-body">
                <p class="text">Text size</p>
                <select
                  v-model="sizeSelected.Achievmentssize"
                  class="form-select"
                >
                  <option class="" v-for="(size, i) in sizes" :key="i">
                    {{ size }}
                  </option>
                </select>
                <br />
                <p class="text">Text Style</p>
                <select
                  v-model="styleSelected.Achievmentsstyle"
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
                    v-model="italicCheckboxSelected.AchievmentsitalicCheckbox"
                    @click="
                      italicCheckboxSelected.AchievmentsitalicCheckbox === false
                        ? (italicCheckboxSelected2.AchievmentsitalicCheckbox =
                            'italic')
                        : (italicCheckboxSelected2.AchievmentsitalicCheckbox =
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
                    v-model="boldCheckboxSelected.AchievmentsboldCheckbox"
                    @click="
                      this.boldCheckboxSelected.AchievmentsboldCheckbox ===
                      false
                        ? (this.boldCheckboxSelected2.AchievmentsboldCheckbox =
                            'bold')
                        : (this.boldCheckboxSelected2.AchievmentsboldCheckbox =
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

          <!--end-->
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
  data = vxm.cvstore;
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
    PersonalDetailssize: "",
    Educationsize: "",
    WorkExperiencesize: "",
    Skillssize: "",
    Achievementssize:""
  };
  styleSelected = {
    PersonalDetailsstyle: "",
    Educationstyle: "",
    WorkExperiencestyle: "",
    Skillsstyle: "",
    Achievementsstyle:""
  };
  boldCheckboxSelected = {
    PersonalDetailsboldCheckbox: false,
    EducationboldCheckbox: false,
    WorkExperienceboldCheckbox: false,
    SkillsboldCheckbox: false,
    AchievementsboldCheckbox: false
  };
  boldCheckboxSelected2 = {
    PersonalDetailsboldCheckbox: false,
    EducationboldCheckbox: false,
    WorkExperienceboldCheckbox: false,
    SkillsboldCheckbox: false,
    AchievementsboldCheckbox: false
  };

  italicCheckboxSelected = {
    PersonalDetailsitalicCheckbox: false,
    EducationitalicCheckbox: false,
    WorkExperienceitalicCheckbox: false,
    SkillsitalicCheckbox: false,
    AchievementsitalicCheckbox: false
  };
  italicCheckboxSelected2 = {
    PersonalDetailsitalicCheckbox: false,
    EducationitalicCheckbox: false,
    WorkExperienceitalicCheckbox: false,
    SkillsitalicCheckbox: false,
    AchievementsitalicCheckbox: false
  };
}
</script>
<style>
.container{
   overflow: auto;
   max-height: 100%;
}
</style>