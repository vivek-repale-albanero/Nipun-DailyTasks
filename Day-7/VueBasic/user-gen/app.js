/* const app = Vue.createApp({
    data(){
        return{
            firstName : 'Nipun' ,
            lastName : 'Bathini' ,
            email : 'bathininipun79@gmail.com',
            gender : 'female' ,
            picture : 'https://randomuser.me/api/portraits/men/58.jpg'
        }
    },
     methods:{
       async getUser(){
            const res = await fetch('https://randomuser.me/api/')
            const {results} = await res.json()

            this.firstName = results[0].name.first ,
            this.lastName = results[0].name.last  ,
            this.email = results[0].email ,
            this.gender = results[0].gender  ,
            this.picture = results[0].picture.large
        }
    }
})
*/
let arr =[
    {
        "id":1,
        "product_image":"https://www.seekpng.com/png/full/415-4158786_park-vi-game-jersey-black-color-t-shirt.png",
        "name":"Mens Short Sleeve Crew Neck-",
        "desc":"White",
         "price":450
    },
    {
        "id":2,
        "product_image":"",
        "name":"Womens Short Sleeve Crew Neck-",
        "desc":"Black",
         "price":500
    },
    {
        "id":3,
        "product_image":" ",
        "name":"mens Short Sleeve Crew Neck-",
        "desc":"Burgendy",
         "price":450
    },
    {
        "id":4,
        "product_image":"",
        "name":"mens  Sleeve Crew Neck-",
        "desc":"Dusk Blue",
         "price":450
    },
    {
        "id":5,
        "product_image":"",
        "name":"Mens Short Sleeve Crew Neck- ",
        "desc":"navy-blue",
         "price":450
    },
    {
        "id":6,
        "product_image":"",
        "name":"Mens Short Sleeve Crew Neck- ",
        "desc":"green",
        "price":450
    },
    {
        "id":7,
        "product_image":"",
        "name":"Womens Short Sleeve V Neck-",
        "desc":"copper",
         "price":450
    },
    {
        "id":8,
        "product_image":"",
        "name":"Short Sleeve Crew Neck",
        "desc":"Mens",
         "price":450
    },
    {
        "id":9,
        "product_image":"",
        "name":"Short Sleeve Crew Neck",
        "desc":"Mens",
         "price":450
    },
    {
        "id":10,
        "product_image":"",
        "name":"Short Sleeve Crew Neck",
        "desc":"Mens",
         "price":450
    },
    {
        "id":11,
        "product_image":"",
        "name":"Short Sleeve Crew Neck",
        "desc":"Mens",
         "price":450
    }
]

const app = Vue.createApp({
    data(){
        return{
                arr
        }
    },
})

app.mount("#app")