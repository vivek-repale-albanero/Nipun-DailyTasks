import { createModule, mutation, action, getter, Module, createProxy } from "vuex-class-component";
const VuexModule = createModule({
    namespaced: "user",
    strict: false,
})
export class UserStore extends VuexModule {

    public array = [
        {
            Name: "",
            City: "",
            id: Math.ceil(Math.random() * 1000)
        }
    ]
    @mutation addBlock() {
            
            const obj:any = {
                Name: "",
                City: "",
                id: Math.ceil(Math.random() * 1000)
            }
        this.array.push(obj);
    }
    @mutation editBlockNameCommit(arr: any) {
        this.array = this.array.map((item) => {
            if (item.id === parseInt(arr[1])) {
                let temp = item.City
                return {
                    Name: arr[0],
                    City: temp,
                    id: arr[1]
                }
            }
            else
                return item;
        });
    }
    @mutation editBlockCityCommit(arr: any) {
        this.array = this.array.map((item) => {
            if (item.id === arr[1]) {
                let temp = item.Name
                return {
                    Name: temp,
                    City: arr[0],
                    id: arr[1]
                }
            }
            else
                return item;
        });
    }
    @mutation deleteBlock(id: number) {
        this.array = this.array.filter((item) => {
            return item.id !== id
        })
    }


    @action async addNewBlock() {
        this.addBlock()
    }
    @action async  editBlockNewName(arr: any) {
        this.editBlockNameCommit(arr)
    }
    @action async  editBlockNewCity(arr: any) {
        this.editBlockCityCommit(arr)
    }
    @action async  deleteBlockId(id: number) {
        this.deleteBlock(id)
    }

}
export default UserStore;
