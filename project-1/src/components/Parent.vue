<template>
  <div>
    <br />
    <br />
<button  class=" btn btn-success" @click="addBlock()">Add Block</button>
<br>
<br>
    <div v-for="(arr, index) in array" :key="index">
    <button class="btn-2" @click="deleteBlock(index)">X</button>
      <Child
        :arr="arr"
        :editBlockName="editBlockName"
        :editBlockCity="editBlockCity"
        
      />
    </div>

    <div class="container mt-5">
      <br /><br />
      <button @click="toggle()" class="btn btn-primary" style="float: right">
        Show
      </button>
      <br /><br />
      <hr />
      <div v-if="show">     
        <div class="con-2 ">   
        <div v-for="(arr, index) in array" :key="index">
          <div class="card" style="width: 10rem">
            <div class="card-body">
                <p class="card-text">{{ arr.Name }}</p>
                <br /> 
                <p class="card-text">{{ arr.City }}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <br><br><br> <br>
  </div>
</template>
<script>
import Child from "./Child.vue";
import subChild from "./subChild.vue";
export default {
  components: { Child, subChild },
  data() {
    return {
      array: [{ Name: "", City: "", id: Math.ceil(Math.random() * 1000) }],
      show: true,
    };
  },
  methods: {
    addBlock() {
      this.array.push({
        Name: "",
        City: "",
        id: Math.ceil(Math.random() * 1000),
      });
    },
    editBlockName(Name_new, index) {
      if (Name_new !== undefined) {
        this.array = this.array.map((item) => {
          if (item.id === index) {
            item.Name = Name_new;
          }
          return item;
        });
      }
    },
    editBlockCity(City_new, index) {
      if (City_new !== undefined) {
        this.array = this.array.map((item) => {
          if (item.id === index) {
            item.City = City_new;
          }
          return item;
        });
      }
    },
    deleteBlock(index) {
      this.array.splice(index, 1);
    },
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.showBlock {
  display: flex;
}
.btn-2 {
  margin-left: 16rem;
  color: red;
  background-color: transparent;
  border: 0px;
}
.con-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
}
.card{
    border:2px solid black
}
</style>