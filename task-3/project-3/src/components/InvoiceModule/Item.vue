<template>
  <div>
    <!-- {{item.id}} -->
           <label for="validationDefault01" class="form-label form-control-sm"
              >Name</label
            >
            <input
              type="date"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="itemName"
              required
              @keyup="eventItems"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Gst</label
            >
            <input
              type="date"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="itemGst"
              required
              @keyup="eventItems"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Price</label
            >
            <input
              type="date"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="itemPrice"
              required
              @keyup="eventItems"
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
  data = vxm.invoicestore;
  itemName=""
  itemPrice=""
  itemGst=""
  Items={}
  
    eventItems(){
    this.Items={
     itemName:this.itemName,
     itemPrice:this.itemPrice,
     itemGst:this.itemGst
    }
    this.data.ItemsInput(this.Items)
   } 
}
</script>

<style>
</style>