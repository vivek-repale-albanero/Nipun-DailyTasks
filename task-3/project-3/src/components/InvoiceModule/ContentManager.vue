<template>
  <div class="container border">
    <br />
    <h5>Content Manager</h5>
    <div class="accordion" id="accordionExample">
      <!--Basic -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
         class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Invoice Details
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <label for="validationDefault01" class="form-label form-control-sm"
              >Invoice Date</label
            >
            <input
              type="date"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="InvoiceDate"
              required
              @click="eventInvoiceDetails()"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Due Date</label
            >
            <input
              type="date"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="DueDate"
              required
              @click="eventInvoiceDetails"
            />
          </div>
        </div>
      </div>
      <br>
      <!--From-->

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSecond">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSecond"
            aria-expanded="false"
            aria-controls="collapseSecond"
          >
            Sender Address
          </button>
        </h2>
        <div
          id="collapseSecond"
          class="accordion-collapse collapse"
          aria-labelledby="headingSecond"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <label for="validationDefault01" class="form-label form-control-sm"
              >Company Name</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Fromdataname"
              required
              @keyup="eventFrom"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Address</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Fromdataaddress1"
              required
              @keyup="eventFrom"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Email</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Fromdataemail"
              required
              @keyup="eventFrom"
            />

            <label
              for="validationDefault01"
              class="formstyle form-label form-control-sm"
              >City</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Fromdatcity"
              required
              @keyup="eventFrom"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >District</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Fromdatadistrict"
              required
              @keyup="eventFrom"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Pincode</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Fromdatapincode"
              required
              @keyup="eventFrom"
            />
          </div>
        </div>
      </div>
      <br>
      <!--TO -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThird">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThird"
            aria-expanded="false"
            aria-controls="collapseThird"
          >
            Reciever Address
          </button>
        </h2>
        <div
           id="collapseThird"
          class="accordion-collapse collapse"
          aria-labelledby="headingThird"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <label for="validationDefault01" class="form-label form-control-sm"
              >Name</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Todataname"
              required
              @keyup="eventTo"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Address</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Todataaddress1"
              required
              @keyup="eventTo"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Email</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Todataemail"
              required
              @keyup="eventTo"
            />

            <label
              for="validationDefault01"
              class="formstyle form-label form-control-sm"
              >City</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Todatcity"
              required
              @keyup="eventTo"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >District</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Todatadistrict"
              required
              @keyup="eventTo"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Pincode</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Todatapincode"
              required
              @keyup="eventTo"
            />
          </div>
        </div>
      </div>
<br>
<!--Items -->
  <div class="accordion-item">
                <h2 class="accordion-header" id="headingFourth">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFourth"
            aria-expanded="false"
            aria-controls="collapseFourth"
          >
            Items Table
          </button>
        </h2>
        <div
           id="collapseFourth"
          class="accordion-collapse collapse"
          aria-labelledby="headingFourth"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
              <button class="btn btn-success" @click="addItem">Add Item</button>
              <br>
            <label for="validationDefault01" class="form-label form-control-sm"
              >Name</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="itemName"
              required
              @keyup="eventItems"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Gst</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="itemGst"
              required
              @keyup="eventItems"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Price</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="itemPrice"
              required
              @keyup="eventItems"
            />
           
          </div>
        </div>
      </div>
    <br>


      <!--end -->
    </div>
  </div>
</template>

<script>
import { vxm } from "../../store/store.vuex";
import { Options, Vue } from "vue-class-component";
@Options()
export default class Invoice extends Vue {
  data = vxm.invoicestore
  Fromdataname = "";
  Fromdataaddress1 = "";
  Fromdataemail = "";
  Fromdatacity = "";
  Fromdatadistrict = "";
  Fromdatapincode = "";
  Todataname = "";
  Todataaddress1 = "";
  Todataemail = "";
  Todatacity = "";
  Todatadistrict = "";
  Todatapincode = "";
  Fromdata = {};
  Todata = {};
  InvoiceDate = "";
  DueDate = "";
  invoiceDates = {};
  
  eventFrom() {
    this.Fromdata = {
      Fromdataname: this.Fromdataname,
      Fromdataaddress1: this.Fromdataaddress1,
      Fromdataemail: this.Fromdataemail,
      Fromdatacity: this.Fromdatacity,
      Fromdatadistrict: this.Fromdatadistrict,
      Fromdatapincode: this.Fromdatapincode,
    };
    this.data.dataFromInput(this.Fromdata);
  }
  eventTo() {
    this.Todata = {
      Todataname: this.Todataname,
      Todataaddress1: this.Todataaddress1,
      Todataemail: this.Todataemail,
      Todatacity: this.Todatacity,
      Todatadistrict: this.Todatadistrict,
      Todatapincode: this.Todatapincode,
    };
    this.data.dataToInput(this.Todata);
  
  }
  eventInvoiceDetails() {
    this.invoiceDates = {
      InvoiceDate: this.InvoiceDate,
      DueDate: this.DueDate,
    }
    console.log(this.DueDate)
    this.data.invoiceDetailsInput(this.invoiceDates)
  }
  addItem(){
   this.data.addNewItem()
  }
    


}
</script>

<style>
.formstyle {
  margin-top: -14px;
  margin-bottom: 4px;
}
</style>
