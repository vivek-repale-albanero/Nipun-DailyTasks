import { createModule, mutation, action, getter, Module, createProxy } from "vuex-class-component";
const VuexModule = createModule({
    namespaced: "LetterStore",
    strict: false,
})
export class LetterStore extends VuexModule {
    uuid:number=Math.ceil(Math.random()*1000)
    From = {}
    To = {}
    Subject = ""
    Introduction = ""
    Conclusion=""
    showLetterContent=true
    Para:any=[  {
        content:"",
        id:this.uuid
      }]
    id=0
    input=""
    array:any=[]
    

    @mutation editFromInput(data:any) {
        this.From=data
        console.log(this.From)
    }
    @mutation editToInput(data: any) {
        this.To=data
    }
    @mutation editSubjectInput(data: any) {
        this.Subject=data
    }
    @mutation editIntroductionInput(data: any) {
        this.Introduction=data
    }
    @mutation editConclusionInput(data: any) {
        this.Conclusion=data
    }
    @mutation newPara(){
        this.uuid=this.uuid+1
        this.Para.push( 
           {
             content:"",
             id:this.uuid
           }
        )
    }
    @mutation paraInput(arr:any){
        this.showLetterContent=false
      this.id=arr[0]
      this.input=arr[1]
      this.Para=this.Para.map((item:any)=>{
          if(item.id===this.id){
              return{
                content:this.input ,
                id:this.id
              }
          }else{
              return item
          }
      })
    }

    @mutation editContentInput(data:any){
         
        this.Introduction=data.Introductiondata
        this.Conclusion=data.Conclusiondata
    }
    @mutation deleteId(del_id:any){  
        console.log(del_id)
      this.Para = this.Para.filter((item:any) => {
        return item.id !== del_id;
      });
    }

    @action async dataFromInput(data:any) {
        
         this.editFromInput(data)
    }
    @action async dataToInput(data: any) {
        this.editToInput(data)
    }
    @action async dataSubjectInput(data: any) {
        this.editSubjectInput(data)
    }
    @action async dataIntroductionInput(data: any) {
        this.editIntroductionInput(data)
    }

    @action async dataConclusionInput(data: any) {
        this.editConclusionInput(data)
    }
    @action async dataContentInput(data:any){
        this.editContentInput(data)
    }
    @action async addNewPara(){
        this.showLetterContent=false
        this.newPara()
    }
    @action async paraNewInput(arr:Array<any>){
        this.array=arr
        this.showLetterContent=false
       this.paraInput(this.array)
    }
    @action async deleteGetId(id:Number){
        this.deleteId(id)
    }
}
export default LetterStore;
