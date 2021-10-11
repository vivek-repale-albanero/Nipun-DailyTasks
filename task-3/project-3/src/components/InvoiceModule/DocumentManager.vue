<template>
  <div
    class="container-fluid container-main border"
    :style="{
      height: auto,
      color: colorSelected,
      'background-color': backgroundSelected,
      'border-radius': BorderRadiusSelected + 'px',
      'text-family':textFont
    }"
    height="1000vh"
  >
    <br />
    <!--Invoice Details -->
    <div class="row">
      <div class="text" style="background-color: grey; max-width: 100%">
        Personal Details
      </div>
      <div class="card bg-transparent border-0">
        <div class="card-body">
          
            <div>id:0001</div>
            <div>Invoice date:  {{data.invoiceDates.InvoiceDate}}</div>
            <div>Due date:  {{data.invoiceDates.DueDate}}</div>
        </div>
      </div>
    </div>
    <br />
    <!--From Address -->
 <div class="row ">
     <div class="text" style="background-color: grey; max-width: 100%">
        Sender Address
      </div>
      <div class="card bg-transparent border-0" >
        <div class="card-body">
          
            
          <div>  {{ data.fromAddress.Fromdataname }}</div>
            <div>{{ data.fromAddress.Fromdataaddress1 }}</div>
            <div>{{ data.fromAddress.Fromdataemail }}</div>
            <div>{{ data.fromAddress.Fromdatacity }}</div>
            <div>{{ data.fromAddress.Fromdatadistrict }}</div>
            <div>{{ data.fromAddress.Fromdatapincode }}</div> 
        </div>
      </div>
    </div>

    <!-- To address -->
 <div class="row ">
     <div class="text" style="background-color: grey; max-width: 100%">
        Reciever Address
      </div>
      <div class="card bg-transparent border-0" >
        <div class="card-body">
        
            
          <div>  {{ data.toAddress.Toodataname }}</div>
            <div>{{ data.toAddress.Toodataaddress1 }}</div>
            <div>{{ data.toAddress.Toodataemail }}</div>
            <div>{{ data.toAddress.Toodatacity }}</div>
            <div>{{ data.toAddress.Toodatadistrict }}</div>
            <div>{{ data.toAddress.Toodatapincode }}</div> 
        </div>
      </div>
    </div>
    <!-- Items -->
    <div class="row">
      <div class="text" style="background-color: grey; max-width: 100%">
        Items
      </div>
      <!-- <div v-for="(item, i) in items" :key="i"> -->
        <div class="card bg-transparent border-0">
          <div class="card-body">
 <table class="table table-sm table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Gst</th>
            <th scope="col">Price</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data.items" :key="index">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.gst }}</td>
            <td>{{ item.price }}</td>
           
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>

          </div>
        </div>
      </div>
    <!-- </div> -->
    
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
    italicCheckboxSelected2: Object,
    textFont:String
  },
})
export default class App extends Vue {
  data = vxm.invoicestore;
  //   workExperienceShow=item.length>0?true:false
}
</script>

<style>

</style>