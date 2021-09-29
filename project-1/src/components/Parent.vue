<template>
<div>
<br> <br>

<div v-for="(arr,index) in array" :key="index">
 <button class="btn-2" @click="deleteBlock(index)">X</button>
 <Child :array="array"/>
</div>
<br>
<button  class=" btn btn-success" @click="addBlock()">Add Block</button>

<div class="container mt-5">
    <br><br>
    <button @click="toggle()" class="  btn btn-primary " style="float:right">Show</button>
    <br><br>
    <div v-if="show" >
        <div v-for="(arr,index) in array" :key="index"> 
            <div v-if="index">
            <div  class="card " style="width: 10rem;">
  <div class="card-body ">
      <div class="con-2"> 
    <p class="card-text">{{arr.Name}}</p> <br><br>
    <p class="card-text">{{arr.City}}</p>
    </div>
  </div>
  </div>
</div>
        </div>
    </div>
<hr>
</div>
</div>
</template>
<script>
import Child from "./Child.vue"
import subChild from "./subChild.vue"
export default {
  components: { Child,subChild },
  data(){
    return{
        array:[],
        show:false
    }
  },
  methods: {
      addBlock(){
       this.array.push({Name:"",City:""})
   },
   deleteBlock(index){
       this.array.splice(index,1)
   },
   toggle(){
       this.show=!this.show
   }
  }
}
</script>

<style scoped>
.showBlock{
    display: flex;
}
.btn-2{
    margin-left: 16rem;
    color:red;
    background-color:transparent;
    border: 0px;
}
.con-2{
    display:grid; 
    grid-template-columns: repeat(3);
}
</style>