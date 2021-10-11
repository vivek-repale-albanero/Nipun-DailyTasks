<template>
  <div>
    <textarea
      type="text"
      v-model="contentInput"
      @keyup="paraInput(item.id, contentInput)"
    ></textarea>
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
  data = vxm.user;
  contentInput = "";
  arr = [];
  paraInput(idPara, contentInput) {
    this.arr = [idPara, contentInput];
    this.data.paraNewInput(this.arr);
  
  }
}
</script>

<style>
</style>