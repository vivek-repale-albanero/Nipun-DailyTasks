// // import { createStore } from 'vuex'
// // import data from './data'
//  let uuid=Math.ceil(Math.random() * 1000)
// // export default createStore({
// //   state: {
  
// //     array: [{ Name: "", City: "", id:uuid  }],
// //   },
// //   mutations: {
// //     addBlock(state){
// //       let uuid=Math.ceil(Math.random() * 1000),
// //       arr:data={
// //         Name:"",
// //         City:"",
// //         id:uuid
// //       }
// //       state.array.push(arr);
// //     },
// //     editBlockNameCommit(state,arr){
// //       state.array=state.array.map((item) => {
// //           if (item.id === parseInt(arr[1])) {
// //             let temp=item.City
// //             return{
// //             Name:arr[0],
// //             City:temp,
// //             id:arr[1]
// //             } 
// //           }
// //           else
// //           return item;
// //         });
// //     },
// //     editBlockCityCommit(state,arr){
// //       state.array= state.array.map((item) => {
// //         if (item.id === arr[1]) {
// //           let temp=item.Name
// //           return{
// //           Name:temp,
// //           City:arr[0],
// //           id:arr[1]
// //           }
// //         }
// //         else
// //         return item;
// //       });
      
// //     },
// //     deleteBlock(state,id){
// //       state.array=state.array.filter((item)=>{
// //         return item.id!==id
// //     })
// //     }

// //   },
// //   actions: {
// //     addBlock({commit}){
// //       commit('addBlock')
// //     },
// //     editBlockNewName({commit},arr){
// //       console.log("editBlockNewName"+arr)
// //       commit('editBlockNameCommit',arr)
// //     },
// //     editBlockCity({commit},arr){
// //       commit('editBlockCityCommit',arr)
// //     },
// //     deleteBlock({commit},id){
// //       console.log("del"+id)
// //       commit('deleteBlock',id)
// //     }
// //   },
// //   modules: {
// //   }
// // })
 
// // import Vue from 'vue'
// // import Component from 'vue-class-component'
// // import {
// //   State,
// //   Getter,
// //   Action,
// //   Mutation,
// //   namespace
// // } from 'vuex-class'

// // @Component
// // export default class createStore extends Vue {
// //   @State {
// //     array: [{ Name: "", City: "", id:uuid  }],
// //   }
// //   @Mutation{

// //   }

// // }