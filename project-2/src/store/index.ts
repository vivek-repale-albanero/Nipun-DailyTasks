// import Vue from 'vue'
// import Vuex from 'vuex'
// import UserModel from './UserModel'
// Vue.use(Vuex)

// export default new Vuex.Store({

//   state: {
//     users: Array<UserModel>(),
//   },
//   mutations: {

//     ADD_USER(state, arr: UserModel) {
//       state.users.push(arr)
      
//     },
//     // DELETE_USER(state, index) {
//     //   state.users = state.users.filter((item) => {
//     //     return item.id !== index;
//     //   });
//     // },
//     UPDATE_USER(state, arr: UserModel) {
//       state.users = state.users.map((item) => {
//         if (item.id === arr.id) {
//           return {
//             Name: arr.Name,
//             Age: arr.Age,
//             Location: arr.Location,
//             Checkbox1: arr.Checkbox1,
//             Checkbox2: arr.Checkbox2,
//             id: arr.id
//           }
//         } else {
//           return item;
//         }
//       })
//     }
//   },
//   getters: {
//     getUsers(state) {
//       return [...state.users]
//     }
//   },
//   actions: {
//     addNewUser({ commit }, arr: UserModel) {
//       commit('ADD_USER', arr)
//     },
//     deleteUserId({ commit }, id) {
//       commit('DELETE_USER', id)
//     },
//     updateUser({ commit }, arr) {
//       commit('UPDATE_USER', arr)
//     }
//   },



// })




