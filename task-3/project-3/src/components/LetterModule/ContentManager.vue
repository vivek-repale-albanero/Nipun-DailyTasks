<template>
  <div class="container border">
    <br />
    <h5>Content Manager</h5>
    <div class="accordion" id="accordionExample">
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
            From
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
              >Name</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Fromdataname"
              required
              @keyup="eventForm"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Adrdess-1</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Fromdataaddress1"
              required
              @keyup="eventForm"
            />
            <label for="validationDefault01" class="form-label form-control-sm"
              >Adrdess-2</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Fromdataaddress2"
              @keyup="eventForm"
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
              @keyup="eventForm"
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
              @keyup="eventForm"
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
              @keyup="eventForm"
            />
          </div>
        </div>
      </div>
      <br />

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            To
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>Title</p>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Mr."
                v-model="Todatatitle"
                @keyup="eventTo"
                required
              />
              <label class="form-check-label" for="inlineRadio1">Mr.</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Mrs."
                v-model="Todatatitle"
                @keyup="eventTo"
              />
              <label class="form-check-label" for="inlineRadio2">Mrs.</label>
            </div>
            <br />

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
              >Institute</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Todatainstitute"
              @keyup="eventTo"
            />

            <label for="validationDefault01" class="form-label form-control-sm"
              >City</label
            >
            <input
              type="text"
              class="formstyle form-control form-control-sm"
              id="validationDefault01"
              v-model="Todatacity"
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
      <br />

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Subject
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <textarea
              class="form-control"
              placeholder="Add a subject"
              style="height: 100px"
              v-model="Subjectdata"
              required
              @keyup="eventSubject"
            ></textarea>
          </div>
        </div>
      </div>
      <br />

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Content
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <button
              type="text"
              @click="addPara()"
              class="btn btn-success btn-sm"
            >
              Add paragraph
            </button>
            <br />
            <br />

            <div v-for="(item) in data.Para" :key="item.id">
              <button
                class="btn btn-sm float-end"
                style="color: red"
                @click="deleteId(item.id)"
              >
                X
              </button>
              <Paragraph :item="item" />
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>

    <br />
    <br>
    
  </div>
</template>

<script >
import { Options, Vue } from "vue-class-component";
import { vxm } from "../../store/store.vuex";

import Paragraph from "./Paragraph.vue";
@Options({
  components: {
    Paragraph,
  },
})
export default class App extends Vue {
  data = vxm.user;
  Fromdataname = "";
  Fromdataaddress1 = "";
  Fromdataaddress2 = "";
  Fromdatacity = "";
  Fromdatadistrict = "";
  Fromdatapincode = "";
  Todatatitle = "";
  Todataname = "";
  Todatainstitute = "";
  Todatacity = "";
  Todatadistrict = "";
  Todatapincode = "";
  Subjectdata = "";
  Introductiondata = "";
  Conclusiondata = "";
  contentInput = "";
  arr = [];
  Fromdata = {};
  Todata = {};
  Content = {};
  errors = [];
  eventForm(event) {
    this.Fromdata = {
      Fromdataname: this.Fromdataname,
      Fromdataaddress1: this.Fromdataaddress1,
      Fromdataaddress2: this.Fromdataaddress2,
      Fromdatacity: this.Fromdatacity,
      Fromdatadistrict: this.Fromdatadistrict,
      Fromdatapincode: this.Fromdatapincode,
    };
    // if(FormData.Fromdataname || FormData.Fromdataaddress1 || FormData.Fromdataaddress2 ||FormData.Fromdatacity || FormData.Fromdatadistrict || FormData.Fromdatapincode)
    this.data.dataFromInput(this.Fromdata);
    // else
    // this.errors.push["required"]
  }

  eventTo(event) {
    this.Todata = {
      Todatatitle: this.Todatatitle,
      Todataname: this.Todataname,
      Todatainstitute: this.Todatainstitute,
      Todatacity: this.Todatacity,
      Todatadistrict: this.Todatadistrict,
      Todatapincode: this.Todatapincode,
    };
    this.data.dataToInput(this.Todata);
  }
  eventSubject() {
    this.data.dataSubjectInput(this.Subjectdata);
  }
  eventIntroduction() {
    this.data.dataIntroductionInput(this.Introductiondata);
  }
  eventConclusion() {
    this.data.dataConclusionInput(this.Conclusiondata);
  }
  addContent() {
    this.Content = {
      Introductiondata: this.Introductiondata,
      Conclusiondata: this.Conclusiondata,
    };
    this.data.dataContentInput(this.Content);
  }
  addPara() {
    this.data.addNewPara();
  }

  deleteId(id) {
    
    this.data.deleteGetId(id);
  }
}
</script>

<style>
.formstyle {
  margin-top: -14px;
  margin-bottom: 4px;
}

.container{
  overflow: hidden;
  overflow-y: scroll;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.container::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>