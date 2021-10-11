<template>
  <div>
    <textarea
      type="text"
      v-model="contentInput"
      @keyup="achievmentInput()"
     style="width:300px;height:150px"
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
  data = vxm.cvstore;
  contentInput = "";
  arr = {};
  achievmentInput() {
    this.arr = {
      id: this.item.id,
      content: this.contentInput,
    };
    this.data.achievmentNewInput(this.arr);
  }
}
</script>

<style>
</style>