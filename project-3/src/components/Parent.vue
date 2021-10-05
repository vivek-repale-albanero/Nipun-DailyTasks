<template>
  <div>
    <br />
    <br />
    <button class="btn btn-success" @click="addBlock()">Add Block</button>
    <br />
    <br />
    <div v-for="(arr, index) in user.array" :key="index">
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
        <div class="con-2">
          <div v-for="(arr, index) in user.array" :key="index">
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
    <br /><br /><br />
    <br />
    
  </div>
</template>

<script >
import { Options, Vue } from "vue-class-component";
// import {mapState} from "vuex"
import Child from "./Child.vue"
  import { vxm } from "../store/store.vuex";

@Options({
  //  computed:{
  //     ...mapState({
  //         array:'array'
  //     })
  // },
  components:{
    Child
  }
})
export default class App extends Vue {
  show= true 
  user=vxm.user
  addBlock() {
        // this.$store.dispatch('addBlock');
        this.user.addNewBlock()
    }
    editBlockName(Name, id) {
        let arr=[Name,id]
        // this.$store.dispatch('editBlockNewName',arr)
        this.user.editBlockNewName(arr)
    }
    editBlockCity(City_new, index) {
        let arr=[City_new,index]
        // this.$store.dispatch('editBlockCity',arr)
        this.user.editBlockNewCity(arr)
    }
    deleteBlock(index) {
      // this.$store.dispatch('deleteBlock',index);
      this.user.deleteBlockId(parseInt(index))
    }
    toggle() {
      this.show = !this.show;
    }
    
}
</script>

<style>
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