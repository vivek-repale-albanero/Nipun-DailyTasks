<template>
  <div>
    <!-- {{item.id}} -->
    <label for="validationDefault01" class="form-label"
      >Skill</label
    >

    <input
      type="text"
      class="formstyle form-control form-control-sm"
      v-model="skill"
      @keyup="skillsForm"
    />
    Level
    <select class="form-select form-select-sm" aria-label="Default select example" v-model="level" @click="skillsForm">
  <option value="Basic">Basic</option>
  <option value="Inermediate">Intermediate</option>
  <option value="Expert">Expert</option>
</select>

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
  skill=""
  level=""
  skillsDetails = {};
  skillsForm() {
    this.skillsDetails = {
      id:this.item.id,
      skill:this.skill,
      level:this.level
    };
    this.data.skillsInputForm(this.skillsDetails)
  }
}
</script>

<style>
</style>