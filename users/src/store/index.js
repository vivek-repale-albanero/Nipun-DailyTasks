import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [

    ]
  },
  mutations: {

    ADD_USER(state, arr) {
      state.users.push({
        Name: arr[0],
        Age: arr[1],
        Location: arr[2],
        Checkbox1: arr[3],
        Checkbox2: arr[4],
        id: arr[5]
      })
      localStorage.setItem("Users",JSON.stringify(state.users))
    },
    DELETE_USER(state, id) {
      state.users.splice(id, 1)
    },
    UPDATE_USER(state, arr) {
      
      // let index = state.users.indexOf((item) => item.id === arr[5])
      // console.log(arr[5])
      // state.users.splice(index, 1, {
      //   Name: arr[0],
      //   Age: arr[1],
      //   Location: arr[2],
      //   Checkbox1: arr[3],
      //   Checkbox2: arr[4],
      //   id:arr[5]
      // }) 
      state.users= state.users.map((item)=>{
        if(item.id===arr[5])
        { return {
        Name: arr[0],
        Age: arr[1],
        Location: arr[2],
        Checkbox1: arr[3],
        Checkbox2: arr[4],
        id:arr[5]
        }
        }else{
          return item;
        }
      })
    }
  },
  getters: {
    getUsers(state) {
      return localStorage.getItem("Users") 
    }
  },
  actions: {
    addNewUser({ commit }, arr) {
      commit('ADD_USER', arr)
    },
    deleteUser({ commit }, id) {
      commit('DELETE_USER', id)
    },
    updateUser({ commit }, arr) {
      commit('UPDATE_USER', arr)
    }
  },
  modules: {

  }
})
