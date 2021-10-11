<template>
  <div
    class="container-fluid container-main border"
    :style="{
      height: auto,
      color: colorSelected,
      'background-color': backgroundSelected,
      'border-radius': BorderRadiusSelected + 'px',
    }"
    height="1000vh"
  >
    <br />
    <!--Personal Details -->
    <div class="row">
      <div class="text" style="background-color: grey; max-width: 100%">
        Personal Details
      </div>
      <div class="card bg-transparent border-0">
        <div class="card-body">
          <div
            :style="{
              'font-size': sizeSelected.PersonalDetailssize + 'px',
              fontFamily: styleSelected.PersonalDetailsstyle,
              fontWeight: boldCheckboxSelected2.PersonalDetailsboldCheckbox,
              fontStyle: italicCheckboxSelected2.PersonalDetailsitalicCheckbox,
            }"
          >
            <div>
              Name: {{ data.personalDetails.firstName }}
              {{ data.personalDetails.lastName }}
            </div>
            <div>Email:{{ data.personalDetails.email }}</div>
            <div>Phone Number: {{ data.personalDetails.phoneNumber }}</div>
            <div>Address: {{ data.personalDetails.address }}</div>
            <div>Linkedin: {{ data.personalDetails.linkedin }}</div>
            <!-- <div> {{ data.personalDetails.personal }}</div> -->
          </div>
        </div>
      </div>
    </div>
    <br />
    <!--Work Experience -->

    <!-- Work Experience -->
    <div class="row">
      <div class="text" style="background-color: grey; max-width: 100%">
        Work Experience
      </div>
      <div v-for="(item, i) in data.workExperience" :key="i">
        <div class="card bg-transparent border-0">
          <div
            class="card-body"
            :style="{
              'font-size': sizeSelected.WorkExperiencesize + 'px',
              fontFamily: styleSelected.WorkExperiencestyle,
              fontWeight: boldCheckboxSelected2.WorkExperienceboldCheckbox,
              fontStyle: italicCheckboxSelected2.WorkExperienceitalicCheckbox,
            }"
          >
            <div class="row">
              <div class="col">
                <div>{{ item.jobTitle }}</div>
                <div>{{ item.employer }},{{ item.city }}</div>
              </div>
              <div
                class="col float-end"
                style="font-size: 10px; margin-right: -250px"
              >
                <div>{{ item.startDate }} -</div>
                <div>{{ item.endDate }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Education -->
    <div class="row">
      <div class="text" style="background-color: grey; max-width: 100%">
        Education
      </div>
      <div v-for="(item, i) in data.Education" :key="i">
        <div class="card bg-transparent border-0">
          <div
            class="card-body"
            :style="{
              'font-size': sizeSelected.Educationsize + 'px',
              fontFamily: styleSelected.Educationstyle,
              fontWeight: boldCheckboxSelected2.EducationboldCheckbox,
              fontStyle: italicCheckboxSelected2.EducationitalicCheckbox,
            }"
          >
            <div class="row">
              <div class="col">
                <div>{{ item.Degree }}</div>
                <div>{{ item.school }},{{ item.city }}</div>
              </div>
              <div
                class="col float-end"
                style="font-size: 10px; margin-left: -250px"
              >
                <div>{{ item.startDate }} -</div>
                <div>{{ item.endDate }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--skills-->
    <div class="row">
      <div class="text" style="background-color: grey; max-width: 100%">
        Skills
      </div>
      <div v-for="(item, i) in data.skills" :key="i">
        <div class="card bg-transparent border-0">
          <div class="card-body">
            <div
              :style="{
                'font-size': sizeSelected.Skillssize + 'px',
                fontFamily: styleSelected.Skillsstyle,
                fontWeight: boldCheckboxSelected2.SkillsboldCheckbox,
                fontStyle: italicCheckboxSelected2.SkillsitalicCheckbox,
              }"
            >
              <div class="row">
                <div class="col">{{ item.skill }}</div>
                <div class="col">{{ item.level }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Achievements -->
    <div class="row">
      <div class="text" style="background-color: grey; max-width: 100%">
        Achievements
      </div>
      <div v-for="(item, i) in data.Acheivement" :key="i">
        <div class="card bg-transparent border-0">
          <div class="card-body">
            <div
              :style="{
                'font-size': sizeSelected.Achievementssize + 'px',
                fontFamily: styleSelected.Achievementstyle,
                fontWeight: boldCheckboxSelected2.AchievementsboldCheckbox,
                fontStyle: italicCheckboxSelected2.AchievementsitalicCheckbox,
              }"
            >
              <div class="text">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end -->
    <br />
    <div class="row float-end">
      <div class="card bg-transparent border-0" style="width: 10rem">
        <div class="card-body">
          <!-- <div
            :style="{
              'font-size': sizeSelected.Fromsize + 'px',
              fontFamily: styleSelected.Fromstyle,
              fontWeight: boldCheckboxSelected2.FromboldCheckbox,
              fontStyle:italicCheckboxSelected2.FromitalicCheckbox
            }"
          >
            <div>From:</div> -->
          <!-- <div>{{ data.From.Fromdataname }}</div>
            <div>{{ data.From.Fromdataaddress1 }}</div>
            <div>{{ data.From.Fromdataaddress2 }}</div>
            <div>{{ data.From.Fromdatacity }}</div>
            <div>{{ data.From.Fromdatadistrict }}</div>
            <div>{{ data.From.Fromdatapincode }}</div>  -->
        </div>
      </div>
    </div>

    <br />
    <br /><br /><br /><br /><br />
    <br />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { vxm } from "../../store/store.vuex";
@Options({
  components: {},
  props: {
    sizeSelected: Object,
    styleSelected: Object,
    colorSelected: String,
    backgroundSelected: String,
    BorderRadiusSelected: Number,
    boldCheckboxSelected: String,
    italicCheckboxSelected: String,
    boldCheckboxSelected2: Object,
    italicCheckboxSelected2: Object,
  },
})
export default class App extends Vue {
  data = vxm.cvstore;
  //   workExperienceShow=item.length>0?true:false
}
</script>

<style>
.container-main {
  overflow: hidden;
  max-height: 100%;
  
  padding-left: 5px;
  padding-right: 5px;
}
.container{
  padding: 5px;

}

</style>