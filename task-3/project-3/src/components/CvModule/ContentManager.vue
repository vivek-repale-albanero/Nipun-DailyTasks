<template>
  <div class="container border">
    <br />
    <h5>Content Manager</h5>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Personal Details
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <label for="validationDefault01" class="form-label form-control-sm"
              >First Name</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="firstName"
              required
              @keyup="personalForm"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Last Name</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="lastName"
              required
              @keyup="personalForm"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Email</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="email"
              @keyup="personalForm"
            />
            <label
              for="validationDefault01"
              class="formstyle form-label form-control-sm"
              >Phone Number</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="phoneNumber"
              required
              @keyup="personalForm"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Address</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="address"
              required
              @keyup="personalForm"
            />
            <label class="mt-2 ms-1">website:</label> <br />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Linkedin
            </label>
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="linkedin"
              required
              @keyup="personalForm"
            />
          </div>
        </div>
      </div>

      <!--Education -->
<br>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSecond">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSecond"
            aria-expanded="false"
            aria-controls="collapseSecond"
          >
            Education
          </button>
        </h2>
        <div
          id="collapseSecond"
          class="accordion-collapse collapse"
          aria-labelledby="headingSecond"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <button
              type="text"
              @click="addEducation()"
              class="btn btn-success btn-sm"
            >
              Add Education
            </button>
            <br />
            <div v-for="(item, i) in data.Education" :key="i">
              <button
                class="btn btn-sm float-end"
                style="color: red"
                @click="educationId(item.id)"
              >
                X
              </button>
              <Education :item="item" />
              <br />
            </div>
          </div>
          <br />
        </div>
      </div>
<br>
      <!-- Work experince --->

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThird">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThird"
            aria-expanded="false"
            aria-controls="collapseThird"
          >
            Work Experience
          </button>
        </h2>
        <div
          id="collapseThird"
          class="accordion-collapse collapse"
          aria-labelledby="headingThird"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <button
              type="text"
              @click="addWorkExperience"
              class="btn btn-success btn-sm"
            >
              Add Work Experience
            </button>
            <br />
            <div v-for="(item, i) in data.workExperience" :key="i">
              <button
                class="btn btn-sm float-end"
                style="color: red"
                @click="WorkExperienceId(item.id)"
              >
                X
              </button>
              <WorkExperience :item="item" />
              <br />
            </div>
          </div>
          <br />
        </div>
      </div>
<br>
      <!-- skills -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFourth">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFourth"
            aria-expanded="false"
            aria-controls="collapseFourth"
          >
            Skills
          </button>
        </h2>
        <div
          id="collapseFourth"
          class="accordion-collapse collapse"
          aria-labelledby="headingFourth"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <button
              type="text"
              @click="addSkill"
              class="btn btn-success btn-sm"
            >
              Add Skills
            </button>
            <br />
            <div v-for="(item, i) in data.skills" :key="i">
              <button
                class="btn btn-sm float-end"
                style="color: red"
                @click="skillsId(item.id)"
              >
                X
              </button>
              <Skills :item="item" />
              <br />
            </div>
          </div>
          <br />
        </div>
      </div>
<br>
      <!--Achievments -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFifth">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFifth"
            aria-expanded="false"
            aria-controls="collapseFifth"
          >
            Achievements
          </button>
        </h2>
        <div
          id="collapseFifth"
          class="accordion-collapse collapse"
          aria-labelledby="headingFifth"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <button
              type="text"
              @click="addAcheivement"
              class="btn btn-success btn-sm"
            >
              Add Achievment
            </button>
            <br />
            <br />

            <div v-for="(item, i) in data.Acheivement" :key="i">
              <button
                class="btn btn-sm float-end"
                style="color: red"
                @click="achievementId(item.id)"
              >
                X
              </button>
              <Achievement :item="item" />
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { vxm } from "../../store/store.vuex";
import Education from "./Education.vue";
import WorkExperience from "./WorkExperience.vue";
import Skills from "./Skills.vue";
import Achievement from "./Achievement.vue";
@Options({
  components: {
    Education,
    WorkExperience,
    Skills,
    Achievement,
  },
})
export default class App extends Vue {
  data = vxm.cvstore;
  firstName = "";
  lastName = "";
  email = "";
  phoneNumber = "";
  address = "";
  linkedin = "";
  personal = "";
  personalDetails = {};
  personalForm() {
    this.personalDetails = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      linkedin: this.linkedin,
      personal: this.personal,
    };
    this.data.personalInputForm(this.personalDetails);
  }
  addEducation() {
    this.data.addNewEducation();
  }
  addWorkExperience() {
    this.data.addNewworkExperience();
  }
  addSkill() {
    this.data.addNewSkill();
  }
  addAcheivement() {
    this.data.addNewAcheivement();
  }
  achievementId(id) {
    this.data.deleteAchievementId(id);
  }
  skillsId(id) {
    this.data.deleteSkillsId(id);
  }
  WorkExperienceId(id) {
    this.data.deleteWorkExperienceId(id);
  }
  educationId(id) {
    this.data.deleteEducationId(id);
  }
}
</script>

<style>
.formstyle {
  margin-top: -14px;
  margin-bottom: 4px;
}
.container{
  overflow: hidden;
  overflow-y: scroll;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.container::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>