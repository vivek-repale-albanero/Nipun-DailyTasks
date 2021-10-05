<template>
  <div id="app">

   <Table :msg="msg"/>
   
  </div>
</template>

<script lang="ts">

import Table from './components/Table.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import HelloWorld from "./components/HelloWorld.vue"
@Component({
  components:{
    Table,
    HelloWorld
  }
})
export default class  extends Vue{
 msg="hello from parent"
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
