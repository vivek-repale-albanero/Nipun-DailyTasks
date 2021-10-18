
   <template>
  <div>
    <!-- {{item.id}} -->
    <label for="validationDefault01" class="form-label form-control-sm"
      >Job Title</label
    >

    <input
      type="text"
      class="formstyle form-control form-control-sm"
      id="validationDefault01"
      v-model="jobTitle"
      required
      @keyup="workExperienceForm"
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
      @keyup="workExperienceForm"
    />
    <label for="validationDefault01" class="form-label form-control-sm"
      >Company</label
    >

    <input
      type="text"
      class="formstyle form-control form-control-sm"
      id="validationDefault01"
      v-model="employer"
      required
      @keyup="workExperienceForm"
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
      @keyup="workExperienceForm"
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
      @keyup="workExperienceForm"
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
  jobTitle = "";
  city = "";
  employer = "";
  startDate = "";
  endDate = "";
  workExperienceDetails = {};
  workExperienceForm() {
    this.workExperienceDetails = {
      id: this.item.id,
      jobTitle: this.jobTitle,
      city: this.city,
      employer: this.employer,
      startDate: this.startDate,
      endDate: this.endDate,
    };
    // console.log(this.educationDetails)
    this.data.workExperienceInputForm(this.workExperienceDetails);
  }
}
</script>

<style>
</style>