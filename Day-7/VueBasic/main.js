Vue.component('app-user',{
    data:function(){
        return {
            profile:[
                { name: 'Nipun' }
            ]
        }
    },
    template:' <div> ><p>{{user.name}}</p> </div> '
})

var app =  new Vue({
    el:'#app',
    data:{
        seen :false ,
        product:'socks',
        red:'class',
        count:0,
        classObject:{red:false,blue:true},

        description:'A pair of warm, fuzzy socks',
        todos:[
            { text: 'Learn Javascript' },
            { text : ' Learn Vue.js ' },
            { text : 'Build UI' }
        ]
       },
        methods:{
            reverseMessage : function(){
                this.description="A pair of not warm, fuzzy socks"
            },
            toggleColor(){
                this.classObject.red=!this.classObject.red 
                this.classObject.blue=!this.classObject.blue
            }
        }
    }
)
app.todos.push({ text: 'New item' });


