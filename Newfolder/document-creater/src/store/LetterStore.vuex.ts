import { createModule, mutation, action, getter, Module, createProxy } from "vuex-class-component";
const VuexModule = createModule({
    namespaced: "LetterStore",
    strict: false,
})
export class LetterStore extends VuexModule {

    From:string = ""
    To:string = ""
    Subject:string = ""
    Content:string = ""

    @mutation editFromInput(data:any) {
        this.From=data
    }
    @mutation editToInput(data: any) {
        this.To=data
    }
    @mutation editSubjectInput(data: any) {
        this.Subject=data
    }
    @mutation editContentInput(data: any) {
        this.Content=data
    }


    @action async dataFromInput(data:any) {
        console.log(data)
        this.editFromInput(data)
    }
    @action async dataToInput(data: any) {
        this.editToInput(data)
    }
    @action async dataSubjectInput(data: any) {
        this.editSubjectInput(data)
    }
    @action async dataContentInput(data: number) {
        this.editContentInput(data)
    }

}
export default LetterStore;
