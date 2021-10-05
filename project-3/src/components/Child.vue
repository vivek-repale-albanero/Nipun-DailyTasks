<template>
  <div>
    <div class="container">
      <div class="form-group row">
        <label for="colFormLabel" class="col-sm-2 col-form-label">Name:</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control form-control-sm mx-1"
            id="colFormLabel"
            v-model="Name"
            @keyup="editBlockName(Name, arr.id)"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="colFormLabel" class="col-sm-2 col-form-label">City:</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control form-control-sm mx-1"
            id="colFormLabel"
            v-model="City"
            @keyup="editBlockCity(City, arr.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    arr: Object,
    editBlockCity: Function,
    editBlockName: Function,
  },
})
export default class Child extends Vue {
  Name = this.arr.Name;
  City = this.arr.City;
  
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.card-text{
    float: left;
}
input{
  height:30px;
  width:250px
}
</style>