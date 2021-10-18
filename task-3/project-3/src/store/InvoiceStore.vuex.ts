import { createModule, mutation, action, getter, Module, createProxy } from "vuex-class-component";
const VuexModule = createModule({
    namespaced: "InvoiceStore",
    strict: false,
})
export class InvoiceStore extends VuexModule {
    uuid: number = Math.ceil(Math.random() * 1000)
    
    fromAddress = {}
    toAddress = {}
    items: any = []
    notes = ""
    termsAndConditions = ""
    invoiceDates = {}
    id = 0
    @mutation editToInput(data: any) {
        this.toAddress = data
    }
    @mutation editFromInput(data: any) {
        this.fromAddress = data
    }
    @mutation invoiceDetail(data: any) {
        this.invoiceDates = data
    }
    @mutation addItem() {
        this.uuid = this.uuid + 1
        this.items.push(
            {
                name: "",
                price: "",
                gst: "",
                id: this.id
            }
        )
    }
    @mutation ItemsEdit(data: any) {
        this.items = this.items.map((item: any) => {
            if (item.id === data.id) {
                return {
                    name: data.name,
                    price: data.price,
                    gst: data.gst,
                    id: data.id
                }
            }
        }
        )
    }

    @action async dataToInput(data: any) {
        this.editToInput(data)
    }
    @action async dataFromInput(data: any) {
        this.editFromInput(data)
    }


    @action async invoiceDetailsInput(data: any) {
        this.invoiceDetail(data)
    }
    @action async addNewItem() {
        this.addItem()
    }
    @action async ItemsInput(data: any) {
        this.ItemsEdit(data)
    }


}

export default InvoiceStore