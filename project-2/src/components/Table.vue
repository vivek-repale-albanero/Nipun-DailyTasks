<template>
 
  <div class="container">
    <br />
    <button
      type="button"
      class="float-right btn btn-success btn-xs mr-10 "
      @click="openModel" style="float:right;" >  Add User</button>
    <Popup
      :myModel="myModel"
      :editedId="editedId"
      :isEdited="isEdited"
      @addNewUser="addUser"
      @updateUser="updateUser"
      :userData="userData"
    />
    <br />
    <br />
    <div >
      <table class="table table-sm table-bordered">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Location</th>
            <th scope="col">Car</th>
            <th scope="col">Bike</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <th scope="row">{{ index }}</th>
            <td>{{ user.Name }}</td>
            <td>{{ user.Age }}</td>
            <td>{{ user.Location }}</td>
            <td>{{ user.Checkbox1 }}</td>
            <td>{{ user.Checkbox2 }}</td>
            <td>
              <button @click="editUser(index)" class="btn btn-warning btn-edit">
                Edit
              </button>
            </td>
            <td>
              <button @click="deleteUser(user.id)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script >
import { Vue, Component, Prop } from "vue-property-decorator";
import Popup from "./Popup.vue";
import { mapState } from "vuex";

@Component({
  components: {
    Popup,
  },
  computed: {
    ...mapState({
      users: "users",
    }),
  },
})
export default class Table extends Vue {
  userData = {
    Name : "",
    Age :"",
    Location : "",
    Checkbox1 : false,
    Checkbox2 :false,
    id : Number
  }
  myModel = false;
  actionButton = "insert";
  editedId = 0;
  openModel() {
    this.myModel = !this.myModel;
  }
  addUser(arr) {
    this.$store.dispatch("addNewUser", arr);
    this.myModel = !this.myModel;
  }
  updateUser(arr) {
    this.$store.dispatch("updateUser", arr);
    this.isEdited = false;
    this.myModel = !this.myModel;
  }
   deleteUser(id) {
    this.$store.dispatch("deleteUserId", parseInt(id));
    this.myModel = false;
    this.isEdited=false
  }
  editUser(index) {
    this.isEdited = true;
    let data = this.users[index];
    this.editedId = data.id;
    (this.userData.Name = data.Name),
    (this.userData.Age = data.Age),
    (this.userData.Location = data.Location),
    (this.userData.Checkbox1 = data.Checkbox1),
    this.userData.Checkbox2 = data.Checkbox2;
    this.userData.id = data.id;
    this.openModel();
  }
}
</script>

<style>
</style>