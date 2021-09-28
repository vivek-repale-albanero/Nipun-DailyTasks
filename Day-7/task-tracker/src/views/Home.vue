<template>
<div>
  <div v-show="showTask">
  <AddTask  @add-task="AddTask"/>
  </div>
  <Tasks @delete-task="deleteTask" @toggle-task="toggleTask"  :tasks="tasks"/>
</div>
</template>

<script>
import AddTask from '../components/AddTask'
import Tasks from '../components/Tasks'
export default {
    name:'Home',
    components: {
    Tasks,
    AddTask,
  },
    data(){
    return {
        tasks: [],
    }
  },
  props:{
      showTask:Boolean
  },
  methods:{
      async deleteTask(id){
        if(confirm('Are you sure?')){
          let res=await fetch(`api/tasks/${id}`,{
            method:'DELETE'
          })
        res.status===200?this.tasks= this.tasks.filter((task)=>task.id!==id):alert("error")
        }
      },
      
      async  toggleTask(id){
        const taskToToggle=await this.fetchTask(id)
        const updTask = {...taskToToggle,reminder:!taskToToggle.reminder}
        const res= await fetch(`api/tasks/${id}`,{
         method:'PUT',
         headers:{
           'Content-type': 'application/json',
         },
         body: JSON.stringify(updTask)
        }) 
        const data = await res.json()
        console.log(data)
        this.tasks = this.tasks.map((task)=>
         task.id===id?{...task,reminder:data.reminder} :task
        )
      },
      async AddTask(task){
        const res =  await fetch("api/tasks",{
         method:'POST',
         headers:{
           'Content-type': 'application/json',
         },
         body: JSON.stringify(task)
        }) 
        const data = await res.json()
        this.tasks=[...this.tasks,data]
      },

      async  fetchTasks(){
        const res = await fetch("api/tasks")
        const data = await res.json()
        return data;
      },
      async  fetchTask(id){
        const res = await fetch(`api/tasks/${id}`)
        const data = await res.json()
        return data;
      }
  },
  async created(){
    this.tasks= await this.fetchTasks()
  }

}
</script>