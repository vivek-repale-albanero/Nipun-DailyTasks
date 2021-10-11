<template>
  <div
    class="container-fluid container-main border"
    :style="{
      height: auto,
      color: colorSelected,
      'background-color': backgroundSelected,
      'border-radius': BorderRadiusSelected + 'px',
    }"
    height="1000vh"
  >
    <br />
    <br />
    <div class="row">
      <div class="container float-end">
        <div
          class="card float-end bg-transparent border-0"
          style="width: 10rem"
        >
          <div class="card-body">
            <div
              :style="{
                'font-size': sizeSelected.Tosize + 'px',
                fontFamily: styleSelected.Tostyle,
                fontWeight: boldCheckboxSelected2.ToboldCheckbox,
                fontStyle:italicCheckboxSelected2.ToitalicCheckbox
              }"
            >
              To 
              <div>{{ data.To.Todatatitle }} {{ data.To.Todataname }}</div>
              <div>{{ data.To.Todatainstitute }}</div>
              <div>{{ data.To.Todatacity }}</div>
              <div>{{ data.To.Todatadistrict }}</div>
              <div>{{ data.To.Todatapincode }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />

    <div class="row">
      <div class="card bg-transparent border-0">
        <div class="card-body">
          <div
            :style="{
              'font-size': sizeSelected.Subjectsize + 'px',
              fontFamily: styleSelected.Subjectstyle,
              fontWeight: boldCheckboxSelected2.SubjectboldCheckbox,
              fontStyle:italicCheckboxSelected2.SubjectitalicCheckbox
            }"
          >
            <div><b>Subject:</b> {{ data.Subject }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="(item, i) in data.Para" :key="i">
        <div class="card bg-transparent border-0">
          <div
            class="card-body"
            :style="{
              'font-size': sizeSelected.Contentsize + 'px',
              fontFamily: styleSelected.Contentstyle,
              fontWeight: boldCheckboxSelected2.ContentboldCheckbox,
              fontStyle:italicCheckboxSelected2.ContentitalicCheckbox
            }"
          >
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="row float-end">
      <div class="card bg-transparent border-0" style="width: 10rem">
        <div class="card-body">
          <div
            :style="{
              'font-size': sizeSelected.Fromsize + 'px',
              fontFamily: styleSelected.Fromstyle,
              fontWeight: boldCheckboxSelected2.FromboldCheckbox,
              fontStyle:italicCheckboxSelected2.FromitalicCheckbox
            }"
          >
            <div>From:</div>
            <div>{{ data.From.Fromdataname }}</div>
            <div>{{ data.From.Fromdataaddress1 }}</div>
            <div>{{ data.From.Fromdataaddress2 }}</div>
            <div>{{ data.From.Fromdatacity }}</div>
            <div>{{ data.From.Fromdatadistrict }}</div>
            <div>{{ data.From.Fromdatapincode }}</div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br /><br /><br /><br /><br />
    <br />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { vxm } from "../../store/store.vuex";
@Options({
  components: {},
  props: {
    sizeSelected: Object,
    styleSelected: Object,
    colorSelected: String,
    backgroundSelected: String,
    BorderRadiusSelected: Number,
    boldCheckboxSelected: String,
    italicCheckboxSelected: String,
    boldCheckboxSelected2: Object,
    italicCheckboxSelected2:Object
  },
})
export default class App extends Vue {
  data = vxm.user;
  contentInput = "";
}
</script>

<style>
.container-main {
  overflow: auto;
  max-height: 100%;

}
</style>