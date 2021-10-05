<template>
  <div class="container main-container">
    <br />
    <br />
    <input
      type="button"
      class="btn btn-success btn-xs"
      @click="openModel"
      value="Add"
    />
    <!-- <button @click="togglePopup()" id="btn-add-user" class="btn btn-success">
      Add User <i class="fas fa-user-plus"></i>
    </button> -->
    <br />
    <br />
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
          <tr v-for="(user, index) in array" :key="index">
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

    <div v-if="myModel">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close btn btn-danger"
                    @click="myModel = false"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <br />
                  <br /><br />
                  <br />
                  <div>
                    <div v-if="isEdited">
                      <div class="container">
                        <div class="row mb-3">
                          <label for="Name" class="col-sm-2 col-form-label"
                            >Name</label
                          >
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
                          <label for="Age" class="col-sm-2 col-form-label"
                            >Age</label
                          >
                          <div class="col-sm-10">
                            <input
                              type="Age"
                              class="form-control"
                              id="Age"
                              v-model="Age"
                            />
                          </div>
                        </div>
                        <fieldset class="row mb-3">
                          <legend class="col-form-label col-sm-2 pt-0">
                            Location
                          </legend>
                          <div class="col-sm-8 mx-3">
                            <select
                              id="inputState"
                              class="form-select"
                              v-model="Location"
                            >
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
                          <label for="Name" class="col-sm-2 col-form-label"
                            >Name</label
                          >
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
                          <label for="Age" class="col-sm-2 col-form-label"
                            >Age</label
                          >
                          <div class="col-sm-10">
                            <input
                              type="Age"
                              class="form-control"
                              id="Age"
                              v-model="Age"
                            />
                          </div>
                        </div>
                        <fieldset class="row mb-3">
                          <legend class="col-form-label col-sm-2 pt-0">
                            Location
                          </legend>
                          <div class="col-sm-8 mx-3">
                            <select
                              id="inputState"
                              class="form-select"
                              v-model="Location"
                            >
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
                        <button @click="addUser()" class="btn btn-primary">
                          Add User
                        </button>
                      </div>
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    

  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import Popup from "./components/Popup.vue"
@Component({
  Popup
})
export default class HelloWorld extends Vue {
  msg="Hello world"
  Name = "";
  Age = "";
  Location = "";
  Checkbox1 = false;
  Checkbox2 = false;
  isEdited = false;
  id = Number;
  array = [];
  myModel = false;
  actionButton = "insert";
  openModel() {
    this.myModel = true;
  }

  addUser() {
    let uuid = Math.ceil(Math.random() * 1000);
    this.array.push({
      Name: this.Name,
      Age: this.Age,
      Location: this.Location,
      Checkbox1: this.Checkbox1,
      Checkbox2: this.Checkbox2,
      id: uuid,
    });
    this.Name = "";
    this.Age = "";
    this.Location = "";
    this.Checkbox1 = false;
    this.Checkbox2 = false;
    this.isEdited = false;
    this.id = Number;
    this.myModel = false;
  }
  deleteUser(id) {
    this.array = this.array.filter((item) => {
      return item.id !== id;
    });
  }

  editUser(index) {
    this.myModel = true;
    let data = this.array[index];
    (this.Name = data.Name),
      (this.Age = data.Age),
      (this.Location = data.Location),
      (this.Checkbox1 = data.Checkbox1),
      (this.Checkbox2 = data.Checkbox2);
    this.isEdited = true;
    this.id = data.id;
  }
  updateUser() {
    console.log(this.Name);
    this.array = this.array.map((item) => {
      if (item.id === this.id) {
        return {
          Name: this.Name,
          Age: this.Age,
          Location: this.Location,
          Checkbox1: this.Checkbox1,
          Checkbox2: this.Checkbox2,
        };
      } else {
        return item;
      }
    });
    this.isEdited = false;
    this.myModel = false;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
