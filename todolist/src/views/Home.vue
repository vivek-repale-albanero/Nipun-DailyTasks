<template>
<div class="container">
  <div class="home">
    <TodosForm />
  <TodosList/>
 <h3>Completed:  {{completedTodos}}</h3>
 <h3>Pending: {{pendingTodos}}</h3>
  </div>
</div>
</template>

<script>
import TodosList from '../components/TodosList.vue'
import TodosForm from "../components/TodosForm.vue"

export default {
  name: 'Home',
  components: {
   TodosList,
   TodosForm 
  },
  computed:{
    completedTodos(){
      return this.$store.getters.completedTodos
    },
    pendingTodos(){
      return this.$store.getters.pendingTodos
    }
  }
}
</script>

<style>

</style>
