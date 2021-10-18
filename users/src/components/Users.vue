<template>
  <div class="main-container">
    <button @click="togglePopup()" id="btn-add-user" class="btn btn-success">
      Add User <i class="fas fa-user-plus"></i>
    </button>
    <Popup v-if="popupTriggers.buttonTrigger" :togglePopup="togglePopup">
      <div v-if="isEdited">
        <div class="container">
          <div class="row mb-3">
            <label for="Name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="Name"
                placeholder="Name"
                v-model="Name"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="Age" class="col-sm-2 col-form-label">Age</label>
            <div class="col-sm-10">
              <input type="Age" class="form-control" id="Age" v-model="Age" />
            </div>
          </div>
          <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">Location</legend>
            <div class="col-sm-8 mx-3">
              <select id="inputState" class="form-select" v-model="Location">
                <option value="Hyderabad">Hyderabad</option>
                <option value="Banglore">Banglore</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
          </fieldset>
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            v-model="Checkbox1"
          />
          <label for="vehicle1"> I have a bike</label><br />
          <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
            v-model="Checkbox2"
          />
          <label for="vehicle2"> I have a car</label><br />
          <button @click="updateUser()" class="btn btn-primary">
            Update User
          </button>
        </div>
      </div>
      <div v-else>
        <div class="container">
          <div class="row mb-3">
            <label for="Name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="Name"
                placeholder="Name"
                v-model="Name"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="Age" class="col-sm-2 col-form-label">Age</label>
            <div class="col-sm-10">
              <input type="Age" class="form-control" id="Age" v-model="Age" />
            </div>
          </div>
          <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">Location</legend>
            <div class="col-sm-8 mx-3">
              <select id="inputState" class="form-select" v-model="Location">
                <option value="Hyderabad">Hyderabad</option>
                <option value="Banglore">Banglore</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
          </fieldset>

          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            v-model="Checkbox1"
          />
          <label for="vehicle1"> I have a bike</label><br />
          <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
            v-model="Checkbox2"
          />
          <label for="vehicle2"> I have a car</label><br />
          <br />
          <button @click="addUser()" class="btn btn-primary">Add User</button>
        </div>
      </div>

      <div></div>
    </Popup>
    <div class="container-2">
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
              <button @click="deleteUser(index)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import Popup from "./Popup.vue";
import { ref } from "vue";
export default {
  name: "Users",
  components: {
    Popup,
  },
  data() {
    return {
      Name: "",
      Age: "",
      Location: "",
      Checkbox1: false,
      Checkbox2: false,
      isEdited: false,
      id: 0,
      popupTriggers: ref({
        buttonTrigger: false,
      }),
    };
  },
  computed: {
    ...mapState({
      users: "users",
    }),
    getUsers() {
      return localStorage.getItem("Users");
    },
  },
  methods: {
    togglePopup() {
      this.popupTriggers.buttonTrigger = !this.popupTriggers.buttonTrigger;
    },
    addUser() {
      let id = Math.ceil(Math.random() * 1000);
      let arr = [
        this.Name,
        this.Age,
        this.Location,
        this.Checkbox1,
        this.Checkbox2,
        id,
      ];
      this.$store.dispatch("addNewUser", arr);
      (this.Name = ""),
        (this.Age = ""),
        (this.Location = ""),
        (this.Checkbox1 = false),
        (this.Checkbox2 = false);
        
    },
    deleteUser(id) {
      this.$store.dispatch("deleteUser", parseInt(id));
    },
    editUser(index) {
      console.log(this.users)
      this.togglePopup();
      let data = this.users[index];
      (this.Name = data.Name),
        (this.Age = data.Age),
      (this.Location = data.Location),
      (this.Checkbox1 = data.Checkbox1),
      (this.Checkbox2 = data.Checkbox2);
      this.isEdited = true;
      this.id = data.id;
    },
    updateUser() {
      let arr = [
        this.Name,
        this.Age,
        this.Location,
        this.Checkbox1,
        this.Checkbox2,
        this.id,
      ];
      this.$store.dispatch("updateUser", arr);
        (this.Name = ""),
        (this.Age = ""),
        (this.Location = ""),
        (this.Checkbox1 = false),
        (this.Checkbox2 = false),
        (this.isEdited = false)
    },
  },
};
</script>

<style scoped>
.main-container {
  padding-top: 5rem;
  margin: 4rem;
  border: 1px solid white;
  box-shadow: 2px solid whitesmoke;
}
.container {
  padding: 8rem;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-bottom: 5rem;
}
.table {
  padding: 2rem;
}
.container-2 {
  padding: 4rem;
  margin-bottom: 10rem;
}
#btn-add-user {
  float: right;
  margin-right: 4rem;
}
.btn-edit {
  width: 80px;
}
</style>