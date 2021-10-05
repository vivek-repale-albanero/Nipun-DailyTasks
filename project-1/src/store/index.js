import { createStore } from 'vuex'
let uuid=Math.ceil(Math.random() * 1000)
export default createStore({
  state: {
    array: [{ Name: "", City: "", id:uuid  }],
  },
  mutations: {
    addBlock(state){
      state.array.push({
        Name: "",
        City: "",
        id: Math.ceil(Math.random() * 1000),
      });
    },
    editBlockNameCommit(state,arr){
        state.array = state.array.map((item) => {
          if (item.id === arr[1]) {
            let temp=item.City
            return{
            Name:arr[0],
            City:temp
            }
          }
          else
          return item;
        });
      
    }, 
    editBlockCityCommit(state,arr){
      state.array = state.array.map((item) => {
        if (item.id === arr[1]) {
          let temp=item.Name
          return{
          Name:temp,
          City:arr[0]
          }
        }
        else
        return item;
      });
      
    },
    deleteBlock(state,id){
      state.array=state.array.filter((item)=>{
        return item.id!==id
    })
    }

  },
  actions: {
    addBlock({commit}){
      commit('addBlock')
    },
    editBlockNewName({commit},arr){
      console.log("editBlockNewName"+arr)
      commit('editBlockNameCommit',arr)
    },
    editBlockCity({commit},arr){
      commit('editBlockCityCommit',arr)
    },
    deleteBlock({commit},id){
      console.log("del"+id)
      commit('deleteBlock',id)
    }
  },
  modules: {
  }
})
