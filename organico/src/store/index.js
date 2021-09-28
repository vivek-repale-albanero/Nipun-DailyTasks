import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        product_image:
          "https://www.seekpng.com/png/full/415-4158786_park-vi-game-jersey-black-color-t-shirt.png",
        name: " Short Sleeve Crew Neck-",
        gender: "Men",
        category: "T-shirt",
        price: 450,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, iste soluta. Labore autem doloremque consequuntur aspernatur aperiam quia eveniet quaerat nihil, in sunt, voluptate laboriosam pariatur eaque corporis, vitae quae!" 

      },
      {
        id: 2,
        product_image:
          "https://www.seekpng.com/png/full/415-4158786_park-vi-game-jersey-black-color-t-shirt.png",
        name: "Women Short Sleeve Crew Neck-",
        gender: "Women",
        category: "T-shirt",
        price: 500,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, iste soluta. Labore autem doloremque consequuntur aspernatur aperiam quia eveniet quaerat nihil, in sunt, voluptate laboriosam pariatur eaque corporis, vitae quae!" 

      },
      {
        id: 3,
        product_image:
          "https://www.seekpng.com/png/full/415-4158786_park-vi-game-jersey-black-color-t-shirt.png",
        name: "Women Short Sleeve Crew Neck-",
        gender: "Women",
        category: "T-shirt",
        price: 450,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, iste soluta. Labore autem doloremque consequuntur aspernatur aperiam quia eveniet quaerat nihil, in sunt, voluptate laboriosam pariatur eaque corporis, vitae quae!" 

      },
      {
        id: 4,
        product_image:
          "https://www.seekpng.com/png/full/415-4158786_park-vi-game-jersey-black-color-t-shirt.png",
        name: " Men Trouser-",
        gender: "Men",
        category: "Trouser",
        price: 450,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, iste soluta. Labore autem doloremque consequuntur aspernatur aperiam quia eveniet quaerat nihil, in sunt, voluptate laboriosam pariatur eaque corporis, vitae quae!" 

      },
      {
        id: 5,
        product_image:
          "https://www.seekpng.com/png/full/415-4158786_park-vi-game-jersey-black-color-t-shirt.png",
        name: "Women Trouser-",
        gender: "Women",
        category: "Trouser",
        price: 500,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, iste soluta. Labore autem doloremque consequuntur aspernatur aperiam quia eveniet quaerat nihil, in sunt, voluptate laboriosam pariatur eaque corporis, vitae quae!" 

      },
      {
        id: 6,
        product_image:
          "https://www.seekpng.com/png/full/415-4158786_park-vi-game-jersey-black-color-t-shirt.png",
        name: "Men Trouser-",
        gender: "Men",
        category: "Trouser",
        price: 450,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, iste soluta. Labore autem doloremque consequuntur aspernatur aperiam quia eveniet quaerat nihil, in sunt, voluptate laboriosam pariatur eaque corporis, vitae quae!" 
      }
    ]
  },
  getters:{
    getCategories(state){
      return [...new Set(state.products.map((item)=>item.category))]
    },
    getProducts(state){
      return [...state.products]
    },
    getProduct(state,id){
      return state.products.find((item)=>item.id === id)
    }
  },

  mutations: {
    FILTER_PRODUCT(state,category){
      state.products= state.products.filter((item)=>{
        return item.category===category
      })
    }
  },
  actions: {
    filterProduct({ commit }, category) {
      commit('FILTER_PRODUCT', category)
    },
    
  },
  modules: {
  }
})
