import { createModule, mutation, action, getter, Module, createProxy } from "vuex-class-component";
const VuexModule = createModule({
    namespaced: "CvStore",
    strict: false,
})
export class CvStore extends VuexModule {
    uuid = Math.ceil(Math.random() * 1000)
    personalDetails = {}
    id = 0
    Education = [{
        Degree: "",
        city: "",
        school: "",
        startDate: "",
        endDate: "",
        id: this.uuid
    }]
    workExperience = [{
        jobTitle: "",
        city: "",
        employer: "",
        startDate: "",
        endDate: "",
        id: this.uuid
    }]
    skills =[
        {
            skill:"",
            level:"",
            id:this.uuid
        }
    ]
    Acheivement=[
        {
            content:"",
            id:this.uuid
        }
    ]
    @mutation personalEditForm(data: any) {
        this.personalDetails = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            address: data.address,
            linkedin: data.linkedin,
            personal: data.personal
        }
    }
    @mutation addEducation() {
        // this.uuid=this.uuid+1
        this.uuid += 1
        this.Education.push({
            Degree: "",
            city: "",
            school: "",
            startDate: "",
            endDate: "",
            id: this.uuid
        })
    }
    @mutation addworkExperience() {
        // this.uuid=this.uuid+1
        this.uuid += 1
        this.workExperience.push({
            jobTitle: "",
            city: "",
            employer: "",
            startDate: "",
            endDate: "",
            id: this.uuid
        })
    }
    @mutation educationEditForm(data: any) {
        console.log(data)
        this.id = data.id
        this.Education = this.Education.map((item: any) => {
            if (item.id === this.id) {
                return {
                    Degree: data.Degree,
                    city: data.city,
                    school: data.school,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    id: data.id
                }
            } else {
                return item
            }
        })
    }
    @mutation workExperienceEditForm(data: any) {
        this.id = data.id
        console.log(data)
        this.workExperience = this.workExperience.map((item: any) => {
            if (item.id === this.id) {
                return {
                    jobTitle:data.jobTitle,
                    city: data.city,
                    employer:data.employer,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    id: data.id
                }
            } else {
                return item
            }
        })
    }
    @mutation addSkill(){
        this.uuid += 1
        this.skills.push({
            skill:"",
            level:"",
            id: this.uuid
        })
    }
    @mutation skillsEditForm(data:any){
     this.skills=this.skills.map((item)=>{
         if(item.id===data.id){
             return{
            skill:data.skill,
            level:data.level,
            id:data.id
             }
         }
         else{
             return item
         }
     })

    }

    @mutation addAcheivement(){
        this.uuid+=1
        this.Acheivement.push({
            content:"",
            id:this.uuid
        })
    }
    @mutation achievementEditInput(data:any){
    
        this.Acheivement=this.Acheivement.map((item)=>{
            if(item.id===data.id){
                return{
                    content:data.content,
                    id:data.id
                }
            }
            else{
                return item
            }
        })
    }
    @mutation deleteAchievementEditId(del_id:any){
        this.Acheivement = this.Acheivement.filter((item:any) => {
            return item.id !== del_id;
          });
    }

    @mutation  deleteSkillsEditId(del_id:any){
        this.skills = this.skills.filter((item:any) => {
            return item.id !== del_id;
          });
    } 
    @mutation deleteWorkExperienceEditId(del_id:any){
        this.workExperience = this.workExperience.filter((item:any) => {
            return item.id !== del_id;
          });
    }
    @mutation deleteEducationEditId(del_id:any){
        this.Education = this.Education.filter((item:any) => {
            return item.id !== del_id;
          });
    }


    @action async personalInputForm(data: any) {
        console.log(data)
        this.personalEditForm(data)
    }
    @action async addNewEducation() {
        this.addEducation()
    }
    @action async educationInputForm(data: any) {
        this.educationEditForm(data)
    }
    @action async addNewworkExperience() {
        this.addworkExperience()
    }
    @action async workExperienceInputForm(data: any) {
        this.workExperienceEditForm(data)
    }
    
    @action async addNewSkill() {
        this.addSkill()
    }
    @action async skillsInputForm(data:any){
        this.skillsEditForm(data)
    }
    @action async addNewAcheivement(){
        this.addAcheivement()
    }
    @action async achievmentNewInput(data:any){
        
        this.achievementEditInput(data)
    } 
    @action async deleteAchievementId(id:any){
        this.deleteAchievementEditId(id)
    }

    @action async deleteSkillsId(id:any){
       this.deleteSkillsEditId(id)
        }
    @action async deleteWorkExperienceId(id:any){
      this.deleteWorkExperienceEditId(id)
    }
    @action async deleteEducationId(id:any){
     this.deleteEducationEditId(id)
    }

}
export default CvStore;
