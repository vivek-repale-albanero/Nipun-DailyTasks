<template>
  <div>
    <br />
    <br />
<button  class=" btn btn-success" @click="addBlock()">Add Block</button>
<br>
<br>
    <div v-for="(arr, index) in array" :key="index">
    <button class="btn-2" @click="deleteBlock(arr.id)">X</button>
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
import Child from "./Child.vue" 
import {mapState} from "vuex"
export default {
  components: { Child },
  data() {
    return {
      show: true,
    };
  },
  computed:{
      ...mapState({
          array:'array'
      })
  },
  methods: {
    addBlock() {
        this.$store.dispatch('addBlock');
    },
    editBlockName(Name, id) {
        let arr=[Name,id]
        console.log('From parent'+arr)
        this.$store.dispatch('editBlockNewName',arr)
    },
    editBlockCity(City_new, index) {
        let arr=[City_new,index]
        this.$store.dispatch('editBlockCity',arr)
    },
    deleteBlock(index) {
      this.$store.dispatch('deleteBlock',index);
    },
    toggle() {
      this.show = !this.show;
    }
  }
}
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