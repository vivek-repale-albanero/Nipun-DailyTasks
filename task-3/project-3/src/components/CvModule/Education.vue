<template>
  <div>
    <!-- {{item.id}} -->
    <label for="validationDefault01" class="form-label form-control-sm"
      >Degree</label
    >

    <input
      type="text"
      class="formstyle form-control form-control-sm"
      id="validationDefault01"
      v-model="degree"
      required
      @keyup="educationForm"
    />
    <label for="validationDefault01" class="form-label form-control-sm"
      >City/town</label
    >

    <input
      type="text"
      class="formstyle form-control form-control-sm"
      id="validationDefault01"
      v-model="city"
      required
      @keyup="educationForm"
    />
    <label for="validationDefault01" class="form-label form-control-sm"
      >School</label
    >

    <input
      type="text"
      class="formstyle form-control form-control-sm"
      id="validationDefault01"
      v-model="schoolName"
      required
      @keyup="educationForm"
    />
    <label for="validationDefault01" class="form-label form-control-sm"
      >Start Date</label
    >

    <input
      type="date"
      class="formstyle form-control form-control-sm"
      id="validationDefault01"
      v-model="startDate"
      required
      @keyup="educationForm"
    />
    <label for="validationDefault01" class="form-label form-control-sm"
      >End Date</label
    >

    <input
      type="date"
      class="formstyle form-control form-control-sm"
      id="validationDefault01"
      v-model="endDate"
      required
      @keyup="educationForm"
    />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { vxm } from "../../store/store.vuex";
@Options({
  components: {},
  props: {
    item: Object,
  },
})
export default class extends Vue {
  data = vxm.cvstore;
  degree = "";
  city = "";
  schoolName = "";
  startDate = "";
  endDate = "";
  educationDetails = {};
  educationForm() {
    this.educationDetails = {
      id:this.item.id,
      Degree: this.degree,
      city: this.city,
      school: this.schoolName,
      startDate: this.startDate,
      endDate: this.endDate
    };
    // console.log(this.educationDetails)
    this.data.educationInputForm(this.educationDetails)
  }
}
</script>

<style>
</style>