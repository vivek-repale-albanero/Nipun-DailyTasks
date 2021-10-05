<template>
  <div>
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
                    @click="toggleModel()"
                    
                  >
                    <span aria-hidden="true" style="float:right">&times;</span>
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
                              v-model="userData.Name"
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
                              v-model="userData.Age"
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
                              v-model="userData.Location"
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
                          v-model="userData.Checkbox1"
                        />
                        <label for="vehicle1"> I have a bike</label><br />
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                          v-model="userData.Checkbox2"
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
                              v-model="userData.Name"
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
                              v-model="userData.Age"
                            />
                          </div>
                        </div>
                        <fieldset class="row mb-3">
                          <legend class="col-form-label col-sm-2 pt-0">
                            Location
                          </legend>
                          <div class="col-sm-8">
                            <select
                              id="inputState"
                              class="form-select"
                              v-model="userData.Location"
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
                          v-model="userData.Checkbox1"
                          class="form-check-input"
                          style=" float: left;height:16px"
                        />
                        <label for="vehicle1" style="float: left;margin-left:5px">
                          I have a bike</label
                        ><br />
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                          v-model="userData.Checkbox2"
                          class="form-check-input"
                          style="float: left ;height:16px"
                        />
                        <label for="vehicle2" style="float: left;margin-left:5px">
                          I have a car</label
                        ><br />
                        <br />
                        <button
                          @click.prevent="addUser()"
                          class="btn btn-primary"
                        >
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

<script >
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  props: {
    myModel: Boolean,
    isEdited: Boolean,
    editedId: Number,
    userData: Object,
  },
})
export default class extends Vue {
  id = 0;
  array = [];

  toggleModel() {
    this.myModel = !this.myModel;
    this.isEdited = !this.isEdited;
  }
  updateUser() {
    console.log(this.editedId);
    let arr = {
      Name: this.userData.Name,
      Age: this.userData.Age,
      Location: this.userData.Location,
      Checkbox1: this.userData.Checkbox1,
      Checkbox2: this.userData.Checkbox2,
      id: this.editedId,
    };
    this.$emit("updateUser", arr);
    this.isEdited = false;
    this.userData.Name = "";
    this.userData.Age = "";
    this.userData.Location = "";
    this.userData.Checkbox1 = false;
    this.userData.Checkbox2 = false;
  }
  addUser() {
    let id = Math.ceil(Math.random() * 1000);
    let arr = {
      Name: this.userData.Name,
      Age: this.userData.Age,
      Location: this.userData.Location,
      Checkbox1: this.userData.Checkbox1,
      Checkbox2: this.userData.Checkbox2,
      id,
    };
    this.$emit("addNewUser", arr);
    this.userData.Name = "";
    this.userData.Age = "";
    this.userData.Location = "";
    this.userData.Checkbox1 = false;
    this.userData.Checkbox2 = false;
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9000;
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